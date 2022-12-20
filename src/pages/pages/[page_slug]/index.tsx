import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

import { apiDeletePage, apiGetPage } from "@/api";

import loadingImg from "@/assets/animated/loading_balls_green.svg";

import Button from "@/components/common/Button";
import Flex from "@/components/common/Flex";
import MainPageLayout from "@/components/layouts/MainPageLayout";

import { handleError } from "@/utils";

interface IPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
}

const ImageContainer = styled.div<{ url: string }>`
  width: 100%;
  min-height: 240px;

  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ url }) => `url(${url})`};
`;

const MainContainer = styled.div<{ loading: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ loading }) => (loading ? "100%" : "auto")};
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral_100};
  border: ${({ theme }) => theme.mainBorderStyle};
`;

const PageCreationPage = () => {
  const {
    push,
    query: { page_slug },
  } = useRouter();

  const [loading, setLoading] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [page, setPage] = useState<IPage>();

  const handleDeletePage = useCallback(async () => {
    setLoadingDelete(true);

    try {
      await apiDeletePage(page?.id);

      await push("/");

      toast.success("Página deletada com sucesso");
    } catch (error) {
      handleError(error);
    } finally {
      setLoadingDelete(false);
    }
  }, [page?.id, push]);

  const handleGetPage = useCallback(async (slug: string) => {
    setLoading(true);

    try {
      await apiGetPage(slug).then((pageData) => setPage(pageData));
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (page_slug) handleGetPage(page_slug as string);
  }, [handleGetPage, page_slug]);

  return (
    <>
      <Head>
        <title>Criar Página - UFABCwiki</title>
      </Head>

      <MainPageLayout>
        <MainContainer loading={loading}>
          <div style={{ position: "absolute", top: "8px", left: "8px" }}>
            <Button variant="secondary" size="md" onClick={() => push("/")}>
              <FiArrowLeft />
            </Button>
          </div>

          {loading && (
            <Flex
              height="fit-parent"
              width="fit-parent"
              align="center"
              justify="center"
            >
              <Image src={loadingImg as string} alt="loading_img" />
            </Flex>
          )}

          {!loading && page && (
            <>
              <ImageContainer url={page.imageUrl} />

              <Flex direction="column" padding="lg" gap="lg">
                <h1 style={{ wordBreak: "break-word" }}>{page.title}</h1>

                <p>Criada em: {page.createdAt}</p>

                <p>Editada em: {page.updatedAt}</p>

                <p>{page.content}</p>

                <Button
                  variant="warning"
                  loading={loadingDelete}
                  disabled={loadingDelete}
                  onClick={() => handleDeletePage()}
                >
                  Deletar página
                </Button>
              </Flex>
            </>
          )}
        </MainContainer>
      </MainPageLayout>
    </>
  );
};

export default PageCreationPage;
