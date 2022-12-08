import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";

import loadingImg from "@/assets/animated/loading_balls_green.svg";

import Flex from "@/components/common/Flex";
import Button from "@/components/common/Button";
import MainPageLayout from "@/components/layouts/MainPageLayout";

import api from "@/infra/api";

import { theme } from "@/styles/theme";

import { handleError } from "@/utils";
import { useRouter } from "next/router";

const PageContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 24px;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral_200};
  }

  @media (max-width: 540px) {
    flex-direction: column;

    padding: 8px;
  }

`

const ImageContainer = styled.div`
  border-radius: 1px;

  min-width: 112px;
  height: 112px;

  background-size: cover;
  background-position: 50% 50%;

  @media (max-width: 540px) {
    width: 100%;
    height: 160px;
    border-radius: 8px;
  }
`

const MainContainer = styled.div<{ noContent: boolean }>`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  height: ${({ noContent }) => noContent ? '100%' : 'auto'};
  flex-direction: column;

  @media (max-width: 540px) {
    padding: 0;
    gap: 24px;

    h1 {
      padding: 24px;
    }
  }
`

interface IPage {
  id: string,
  title: string,
  content: string,
  slug: string,
  createdAt: string,
  updatedAt: string,
  imageUrl?: string,
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
  const router = useRouter()

  const [pagesMeta, setPagesMeta] = useState<IMetaProps>({ total: 0, per: 10, page: 1 });
  const [pages, setPages] = useState<IPage[]>([]);
  const [searchingFor, setSearchingFor] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);
  const [pagesLoading, setPagesLoading] = useState(false);

  const handleSearchPages = useCallback(async (searchParam: string) => {
    setPagesLoading(true);

    try {
      setSearchingFor(searchParam);

      await api
        .get<IListPagesResponse>('/pages', { params: { page: 1, searchFor: searchParam } })
        .then(({ data }) => {
          setPages(data.pages)
          setPagesMeta(data.meta);
        });
    } catch (error: any) {
      handleError(error);
    } finally {
      setPagesLoading(false);
      setInitialLoad(false);
    }
  }, []);

  const handleListPages = useCallback(async (page?: number) => {
    setPagesLoading(true);

    try {
      await api
        .get<IListPagesResponse>('/pages', { params: { page: page || 1, searchFor: searchingFor } })
        .then(({ data }) => {
          setPages(prevPages => prevPages.concat(data.pages))
          setPagesMeta(data.meta);
        });
    } catch (error: any) {
      handleError(error);
    } finally {
      setPagesLoading(false);
      setInitialLoad(false);
    }
  }, [searchingFor]);

  return (
    <>
      <Head><title>UFABCwiki</title></Head>

      <MainPageLayout
        onSearch={handleSearchPages}
        bottomComponent={`Mostrando ${pages.length} de ${pagesMeta.total} itens`}
      >
        <MainContainer noContent={!initialLoad && !pages.length}>
          {initialLoad &&
            <Flex height="fit-parent" width="fit-parent" align="center" justify="center">
              <Image src={loadingImg} alt="loading_img"/>
            </Flex>
          }

          <h1>Últimas alterações</h1>

          {!initialLoad && pages.map((page) =>
            <PageContainer style={{ cursor: 'pointer' }} onClick={() => router.push(`/pages/${page.slug}`)}>
              <ImageContainer style={{ backgroundImage: `url(${page.imageUrl})` }} />

              <Flex
                gap="xs"
                direction="column"
                width="fit-parent"
                justify="space-between"
              >
                <Flex direction="column" width="fit-parent" gap="xs">
                  <h3>{page.title}</h3>

                  <p
                    style={{
                      overflow: 'hidden',
                      color: theme.colors.neutral_400,
                      width: '100%',
                      maxHeight: '40px'
                    }}
                  >
                    {page.content}
                  </p>
                </Flex>

                <Flex width="fit-parent" gap="md">
                  <Flex radius="xs" bgColor="neutral_200" style={{ fontSize: '14px', fontWeight: '500', padding: `${theme.spacing.xxs} ${theme.spacing.xs}` }}>
                    LOREM
                  </Flex>

                  <Flex radius="xs" bgColor="neutral_200" style={{ fontSize: '14px', fontWeight: '500', padding: `${theme.spacing.xxs} ${theme.spacing.xs}` }}>
                    TESTE
                  </Flex>

                  <Flex radius="xs" bgColor="neutral_200" style={{ fontSize: '14px', fontWeight: '500', padding: `${theme.spacing.xxs} ${theme.spacing.xs}` }}>
                    TESTE2
                  </Flex>
                </Flex>
              </Flex>
            </PageContainer>
          )}

          {!initialLoad && !pages.length &&
            <Flex height="fit-parent" width="fit-parent" align="center" justify="center">
              <strong>Não há resultados para esta busca...</strong>
            </Flex>
          }

          {pagesMeta.total > pages.length &&
            <Button
              fluid
              variant="secondary"
              loading={pagesLoading}
              disabled={pagesLoading}
              onClick={() => handleListPages(pagesMeta.page + 1)}
            >
              Carregar mais páginas...
            </Button>
          }
        </MainContainer>
      </MainPageLayout>
    </>
  );
};

export default HomePage;
