import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { apiGetPage } from "@/api";

import MainPageLayout from "@/components/layouts/MainPageLayout";
import PageTitle from "@/components/common/PageTitle";
import CreatePageForm from "@/components/forms/CreatePageForm";
import { MainContainer } from "@/components/pages/create-page"; // TODO trocar

import { handleError, serverSideAuthCheck } from "@/utils";

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

const PageEditionPage = () => {
  const {
    query: { page_slug },
  } = useRouter();

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
    <MainPageLayout pageHead="Criar Página - UFABCwiki" loading={loading}>
      <PageTitle>Editar página</PageTitle>

      <MainContainer>
        <CreatePageForm currentPage={page} />
      </MainContainer>
    </MainPageLayout>
  );
};

export default PageEditionPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await serverSideAuthCheck(context);
};
