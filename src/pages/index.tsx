import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";

import { apiListPages } from "@/api";

import loadingImg from "@/assets/animated/loading_balls_green.svg";

import Badge from "@/components/common/Badge";
import Flex from "@/components/common/Flex";
import Button from "@/components/common/Button";
import MainPageLayout from "@/components/layouts/MainPageLayout";

import { genRandomString, getRandomIntInclusive, handleError } from "@/utils";

import { IMetaProps } from "@/types/common";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;

  height: 160px;
  min-height: 160px;

  border: ${({ theme }) => theme.mainBorderStyle};
  background-color: ${({ theme }) => theme.colors.neutral_100};

  @media (max-width: 540px) {
    height: 100%;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div<{ imageUrl: string }>`
  border-radius: 1px; // (???) necessary for smoother image

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
    padding: ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.md} 0 ${({ theme }) => theme.spacing.md};
  }
`;

const MainContainer = styled.div<{ noContent: boolean }>`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: ${({ noContent }) => (noContent ? "100%" : "auto")};

  gap: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ noContent, theme }) => noContent && theme.spacing.xl};

  @media (max-width: 1140px) {
    padding-bottom: 0;
  }

  @media (max-width: 540px) {
    padding: 0;
    gap: ${({ theme }) => theme.spacing.lg};
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
  padding: ${({ theme }) => theme.spacing.md};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  border: ${({ theme }) => theme.mainBorderStyle};
`;

const NoContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.neutral_100};
  border: ${({ theme }) => theme.mainBorderStyle};

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

      await apiListPages({ page: 1, searchParam }).then(({ pages, meta }) => {
        setPages(pages);
        setPagesMeta(meta);
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
        await apiListPages({ page: page || 1, searchParam: searchingFor }).then(
          ({ pages, meta }) => {
            setPages((prevPages) => prevPages.concat(pages));
            setPagesMeta(meta);
          }
        );
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

          {!initialLoad && !!pages.length && (
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
