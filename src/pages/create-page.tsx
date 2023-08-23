import { GetServerSideProps } from "next/types";

import MainPageLayout from "@/components/layouts/MainPageLayout";
import PageForm from "@/components/forms/PageForm";
import PageTitle from "@/components/common/PageTitle";
import { MainContainer } from "@/components/pages/create-page";

import { serverSideAuthCheck } from "@/utils";

const PageCreationPage = () => {
  return (
    <MainPageLayout pageHead="Criar Página - TamanduWiki">
      <PageTitle>Criar página</PageTitle>

      <MainContainer>
        <PageForm />
      </MainContainer>
    </MainPageLayout>
  );
};

export default PageCreationPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await serverSideAuthCheck(context);
};
