import moment from "moment";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

import { apiDeletePage, apiGetPage } from "@/api";

import IconButton from "@/components/common/IconButton";
import Flex from "@/components/common/Flex";
import MainPageLayout from "@/components/layouts/MainPageLayout";
import MarkdownContainer from "@/components/common/MarkdownContainer";
import Modal, { ModalRef } from "@/components/common/Modal";
import Button from "@/components/common/Button";

import { PageTitle } from "@/pages";

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
  min-width: 240px;
  min-height: 240px;

  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ url }) => `url(${url})`};

  @media (max-width: 760px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral_100};
  border: 1px solid ${({ theme }) => theme.colors.neutral_300};
  border-style: dashed;
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 760px) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const MainInfos = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral_100};
  padding: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 760px) {
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const PageCreationPage = () => {
  const {
    push,
    query: { page_slug },
  } = useRouter();

  const deletePageModalRef = useRef<ModalRef>();

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
    <MainPageLayout
      pageHead={`${page?.title || "Página desconhecida"} | UFABCwiki`}
      noContent={!page}
      noContentText="Erro: Conteúdo inexistente"
      loading={loading}
      loadingText="Carregando detalhes da página"
    >
      <MainInfos>
        <ImageContainer url={page?.imageUrl} />

        <Flex direction="column" width="fit-parent" gap="md">
          <Flex width="fit-parent" align="flex-start" justify="space-between">
            <PageTitle>{page?.title}</PageTitle>

            <IconButton
              icon={FiTrash2}
              variant="warning"
              onClick={() => deletePageModalRef.current?.open()}
            />
          </Flex>

          <Flex gap="xs" direction="column">
            <p>
              <strong>Criada em:</strong>{" "}
              {moment(page?.createdAt).format("DD/MM/yyyy, h:mm")}
            </p>

            <p>
              <strong>Última edição:</strong>{" "}
              {moment(page?.updatedAt).format("DD/MM/yyyy, h:mm")}
            </p>
          </Flex>
        </Flex>
      </MainInfos>

      <ContentContainer>
        {page && (
          <MarkdownContainer>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {page.content}
            </ReactMarkdown>
          </MarkdownContainer>
        )}
      </ContentContainer>

      <Modal ref={deletePageModalRef}>
        <Flex
          bgColor="neutral_100"
          padding="md"
          direction="column"
          gap="xl"
          align="center"
          style={{ maxWidth: "480px" }}
        >
          <h3 style={{ textAlign: "center" }}>
            Tem certeza que deseja deletar a página?
          </h3>

          <Flex gap="sm" width="fit-parent">
            <Button
              fluid
              variant="secondary"
              onClick={() => deletePageModalRef.current?.close()}
              disabled={loadingDelete}
            >
              Cancelar
            </Button>

            <Button
              fluid
              variant="warning"
              onClick={handleDeletePage}
              disabled={loadingDelete}
              loading={loadingDelete}
            >
              Deletar
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </MainPageLayout>
  );
};

export default PageCreationPage;
