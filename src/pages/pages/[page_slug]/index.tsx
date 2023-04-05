import moment from "moment";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiBookmark, FiCalendar, FiEdit, FiEdit3 } from "react-icons/fi";

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
import { theme } from "@/styles/theme";

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
        <ImageContainer>
          <img
            src={`${page?.imageUrl}?lastmod=${page?.updatedAt}`}
            width="100%"
            height={244}
            alt="page-img"
            style={{ objectFit: "cover" }}
          />
        </ImageContainer>

        <Flex
          direction="column"
          width="fit-parent"
          height="fit-parent"
          gap="md"
        >
          <Flex width="fit-parent" align="flex-start" justify="space-between">
            <PageTitle>{page?.title}</PageTitle>

            {logged && (
              <Flex gap="md" align="center">
                <FiBookmark
                  size={24}
                  color={theme.colors.neutral_200}
                  style={{ cursor: "pointer", marginTop: "2px" }}
                />

                <FiEdit
                  onClick={() => push(`/pages/${page?.slug}/edit`)}
                  size={24}
                  color={theme.colors.neutral_200}
                  style={{ cursor: "pointer" }}
                />
              </Flex>
            )}
          </Flex>

          <Flex
            gap="lg"
            direction="column"
            height="fit-parent"
            justify="space-between"
          >
            <Flex gap="xs" direction="column">
              <Flex align="center" gap="xs">
                <FiCalendar color={theme.colors.neutral_200} />

                <p style={{ fontWeight: 500, color: theme.colors.neutral_100 }}>
                  Criada em:
                </p>

                <p style={{ fontWeight: 500, color: theme.colors.neutral_200 }}>
                  {moment(page?.createdAt).format("DD/MM/yyyy, h:mm")}
                </p>
              </Flex>

              <Flex align="center" gap="xs">
                <FiCalendar color={theme.colors.neutral_200} />

                <p style={{ fontWeight: 500, color: theme.colors.neutral_100 }}>
                  Última edição:
                </p>

                <p style={{ fontWeight: 500, color: theme.colors.neutral_200 }}>
                  {moment(page?.updatedAt).format("DD/MM/yyyy, h:mm")}
                </p>
              </Flex>
            </Flex>

            <Flex gap="sm" style={{ flexWrap: "wrap" }}>
              {page?.categories.map((category) => (
                <Badge key={category.title}>{category.title}</Badge>
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
