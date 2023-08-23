import { GetServerSideProps } from "next/types";

import MainPageLayout from "@/components/layouts/MainPageLayout";
import PageUnderDevelopment from "@/components/common/PageUnderDevelopment";

import { serverSideAuthCheck } from "@/utils";

const SavedPagesPage = () => {
  return (
    <MainPageLayout pageHead="Páginas salvas - TamanduWiki">
      <PageUnderDevelopment />
    </MainPageLayout>
  );
};

export default SavedPagesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await serverSideAuthCheck(context);
};
