import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";

import loadingImg from "@/assets/animated/loading_balls_green.svg";

import Badge from "@/components/common/Badge";
import Flex from "@/components/common/Flex";
import Button from "@/components/common/Button";
import MainPageLayout from "@/components/layouts/MainPageLayout";

import api from "@/infra/api";

import { handleError } from "@/utils";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 160px;
  min-height: 160px;
  border: 1px solid #dedede; // Design System Exception

  background-color: ${({ theme }) => theme.colors.neutral_100};

  @media (max-width: 540px) {
    flex-direction: column;
    height: 100%;
  }
`;

const genRandomString = () =>
  (Math.random() + 1).toString(36).substring(Math.random() * 10);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const ImageContainer = styled.div<{ imageUrl: string }>`
  border-radius: 1px;

  height: 100%;
  min-width: 160px;
  width: 160px;

  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  @media (max-width: 540px) {
    width: 100%;
    height: 160px;
  }
`;

const PageTitle = styled.h1`
  @media (max-width: 1140px) {
    padding: 16px 16px 0 16px;
  }
`;

const MainContainer = styled.div<{ noContent: boolean }>`
  display: flex;
  width: 100%;
  height: ${({ noContent }) => (noContent ? "100%" : "auto")};
  flex-direction: column;
  gap: 16px;

  @media (max-width: 540px) {
    padding: 0;
    gap: 24px;
  }
`;

const PageDescription = styled.p`
  overflow: hidden;
  width: 100%;
  max-height: 40px;
`;

const BottomComponentContainer = styled.div`
  color: ${({ theme }) => theme.colors.neutral_400};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.neutral_100};
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #dedede; // Design System Exception
`;

const NoContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.neutral_100};
  border: 1px solid #dedede; // Design System Exception

  height: 100%;
  width: 100%;
`;

interface IPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
}

interface IMetaProps {
  page: number;
  per: number;
  total: number;
}

interface IListPagesResponse {
  pages: IPage[];
  meta: IMetaProps;
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
  const [pagesLoading, setPagesLoading] = useState(false);

  const noContent = useMemo(
    () => !initialLoad && !pages.length,
    [initialLoad, pages]
  );

  const handleSearchPages = useCallback(async (searchParam: string) => {
    setPagesLoading(true);

    try {
      setSearchingFor(searchParam);

      await api
        .get<IListPagesResponse>("/pages", {
          params: { page: 1, searchFor: searchParam },
        })
        .then(({ data }) => {
          setPages(data.pages);
          setPagesMeta(data.meta);
        });
    } catch (error) {
      handleError(error);
    } finally {
      setPagesLoading(false);
      setInitialLoad(false);
    }
  }, []);

  const handleListPages = useCallback(
    async (page?: number) => {
      setPagesLoading(true);

      try {
        await api
          .get<IListPagesResponse>("/pages", {
            params: { page: page || 1, searchFor: searchingFor },
          })
          .then(({ data }) => {
            setPages((prevPages) => prevPages.concat(data.pages));
            setPagesMeta(data.meta);
          });
      } catch (error) {
        handleError(error);
      } finally {
        setPagesLoading(false);
        setInitialLoad(false);
      }
    },
    [searchingFor]
  );

  return (
    <>
      <Head>
        <title>UFABCwiki</title>
      </Head>

      <MainPageLayout onSearch={handleSearchPages}>
        <MainContainer noContent={noContent}>
          {initialLoad && (
            <Flex
              height="fit-parent"
              width="fit-parent"
              align="center"
              justify="center"
            >
              <Image src={loadingImg as string} alt="loading_img" />
            </Flex>
          )}

          {!initialLoad && <PageTitle>Últimas alterações</PageTitle>}

          {!noContent &&
            pages.map((page) => (
              <PageContainer onClick={() => router.push(`/pages/${page.slug}`)}>
                <ImageContainer imageUrl={page.imageUrl} />

                <Flex
                  gap="xs"
                  direction="column"
                  width="fit-parent"
                  height="fit-parent"
                  justify="space-between"
                  padding="md"
                  style={{ overflowY: "auto" }}
                >
                  <Flex direction="column" width="fit-parent" gap="xs">
                    <h3>{page.title}</h3>

                    <PageDescription>{page.content}</PageDescription>
                  </Flex>

                  <Flex
                    width="fit-parent"
                    gap="md"
                    style={{ flexWrap: "wrap" }}
                  >
                    {/* TODO remove this mock */}

                    {Array(getRandomIntInclusive(2, 5))
                      .fill("")
                      .map(() => (
                        <Badge>{genRandomString()}</Badge>
                      ))}
                  </Flex>
                </Flex>
              </PageContainer>
            ))}

          {noContent && (
            <Flex
              height="fit-parent"
              width="fit-parent"
              align="center"
              justify="center"
            >
              <NoContentContainer>
                <strong>Não há resultados para esta busca...</strong>
              </NoContentContainer>
            </Flex>
          )}

          {!initialLoad && pages.length && (
            <BottomComponentContainer>
              {pagesMeta.total > pages.length && (
                <Button
                  fluid
                  variant="secondary"
                  loading={pagesLoading}
                  disabled={pagesLoading}
                  onClick={() => handleListPages(pagesMeta.page + 1)}
                >
                  Carregar mais páginas...
                </Button>
              )}

              {`Mostrando ${pages.length} de ${pagesMeta.total} itens`}
            </BottomComponentContainer>
          )}
        </MainContainer>
      </MainPageLayout>
    </>
  );
};

export default HomePage;
