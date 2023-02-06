import moment from "moment";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiEdit3 } from "react-icons/fi";

import { apiGetPage } from "@/api";

import Flex from "@/components/common/Flex";
import MainPageLayout from "@/components/layouts/MainPageLayout";
import MarkdownContainer from "@/components/common/MarkdownContainer";
import PageTitle from "@/components/common/PageTitle";
import Badge from "@/components/common/Badge";
import IconButton from "@/components/common/IconButton";
import {
  ContentContainer,
  ImageContainer,
  MainInfos,
} from "@/components/pages/view-page";

import { AuthContext } from "@/contexts/auth/authContext";

import { handleError } from "@/utils";
import Tooltip from "@/components/common/Tooltip";

interface IPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  categories: { title: string }[];
}

const PageViewPage = () => {
  const {
    push,
    query: { page_slug },
  } = useRouter();
  const { logged } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<IPage>();

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
            <PageTitle noContainer>{page?.title}</PageTitle>

            {logged && (
              <Tooltip content="Editar página" placement="left">
                <IconButton
                  icon={FiEdit3}
                  variant="secondary"
                  onClick={() => push(`/pages/${page?.slug}/edit`)}
                />
              </Tooltip>
            )}
          </Flex>

          <Flex gap="lg" direction="column">
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

            <Flex gap="sm" style={{ flexWrap: "wrap" }}>
              {page?.categories.map((category) => (
                <Badge>{category.title}</Badge>
              ))}
            </Flex>
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
    </MainPageLayout>
  );
};

export default PageViewPage;
