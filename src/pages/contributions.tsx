import { GetServerSideProps } from "next/types";

import MainPageLayout from "@/components/layouts/MainPageLayout";

import { serverSideAuthCheck } from "@/utils";
import PageUnderDevelopment from "@/components/common/PageUnderDevelopment";

const ContributionsPage = () => {
  return (
    <MainPageLayout pageHead="Minhas contribuições - UFABCwiki">
      <PageUnderDevelopment />
    </MainPageLayout>
  );
};

export default ContributionsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await serverSideAuthCheck(context);
};
