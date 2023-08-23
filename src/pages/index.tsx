import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";

import { apiListPages } from "@/api";

import Button from "@/components/common/Button";
import ListedPage from "@/components/common/ListedPage";
import MainPageLayout from "@/components/layouts/MainPageLayout";
import PageTitle from "@/components/common/PageTitle";
import {
  BottomComponentContainer,
  ListContainer,
} from "@/components/pages/index";

import { IMetaProps } from "@/types/common";

import { handleError } from "@/utils";

interface ICategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface IPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  categories: ICategory[];
}

const HomePage = () => {
  const router = useRouter();

  const [pagesMeta, setPagesMeta] = useState<IMetaProps>({
    total: 0,
    per: 10,
    page: 1,
  });
  const [pages, setPages] = useState<IPage[]>([]);
  const [searchingFor, setSearchingFor] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);
  const [searchPagesLoading, setSearchPagesLoading] = useState(false);
  const [loadMorePagesLoading, setLoadMorePagesLoading] = useState(false);

  const somethingIsLoading = useMemo(
    () => initialLoad || searchPagesLoading,
    [initialLoad, searchPagesLoading]
  );

  const noContent = useMemo(() => !pages.length, [pages]);

  const pageTitle = useMemo(
    () =>
      searchingFor !== ""
        ? `Resultados para "${searchingFor}"`
        : "Todas as páginas",
    [searchingFor]
  );

  const loadingTitle = useMemo(
    () =>
      initialLoad || searchingFor === ""
        ? "Carregando todas as páginas"
        : `Buscando por "${searchingFor}"`,
    [initialLoad, searchingFor]
  );

  const handleSearchPages = useCallback(async (searchParam: string) => {
    try {
      setPages([]);
      setSearchPagesLoading(true);
      setSearchingFor(searchParam);

      await apiListPages({ page: 1, searchParam }).then(({ pages, meta }) => {
        setPages(pages);
        setPagesMeta(meta);
      });
    } catch (error) {
      handleError(error);
    } finally {
      setSearchPagesLoading(false);
      setInitialLoad(false);
    }
  }, []);

  const handleLoadMorePages = useCallback(
    async (page?: number) => {
      try {
        setLoadMorePagesLoading(true);

        await apiListPages({ page: page || 1, searchParam: searchingFor }).then(
          ({ pages, meta }) => {
            setPages((prevPages) => prevPages.concat(pages));
            setPagesMeta(meta);
          }
        );
      } catch (error) {
        handleError(error);
      } finally {
        setLoadMorePagesLoading(false);
        setInitialLoad(false);
      }
    },
    [searchingFor]
  );

  return (
    <MainPageLayout
      pageHead="TamanduWiki"
      onSearch={handleSearchPages}
      loading={somethingIsLoading}
      loadingText={loadingTitle}
      noContent={noContent}
      noContentText="Não há resultados para esta busca..."
    >
      <PageTitle>{pageTitle}</PageTitle>

      <ListContainer>
        {pages.map((page) => (
          <ListedPage
            key={page.id}
            title={page.title}
            imageUrl={page.imageUrl}
            description={page.content}
            badges={page.categories.map((category) => category.title)}
            onClick={() => router.push(`/pages/${page.slug}`)}
            pageLastUpdatedAt={page.updatedAt}
          />
        ))}

        <BottomComponentContainer>
          {pagesMeta.total > pages.length && (
            <Button
              fluid
              variant="secondary"
              loading={loadMorePagesLoading}
              disabled={loadMorePagesLoading}
              onClick={() => handleLoadMorePages(pagesMeta.page + 1)}
            >
              Carregar mais...
            </Button>
          )}

          {`Mostrando ${pages.length} de ${pagesMeta.total} itens`}
        </BottomComponentContainer>
      </ListContainer>
    </MainPageLayout>
  );
};

export default HomePage;
