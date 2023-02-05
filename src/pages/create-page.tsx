import { GetServerSideProps } from "next/types";

import MainPageLayout from "@/components/layouts/MainPageLayout";
import CreatePageForm from "@/components/forms/CreatePageForm";
import PageTitle from "@/components/common/PageTitle";
import { MainContainer } from "@/components/pages/create-page";

import { serverSideAuthCheck } from "@/utils";

const PageCreationPage = () => {
  return (
    <MainPageLayout pageHead="Criar Página - UFABCwiki">
      <PageTitle>Criar página</PageTitle>

      <MainContainer>
        <CreatePageForm />
      </MainContainer>
    </MainPageLayout>
  );
};

export default PageCreationPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await serverSideAuthCheck(context);
};
