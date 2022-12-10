import Head from "next/head";

import MainPageLayout from "@/components/layouts/MainPageLayout";
import Flex from "@/components/common/Flex";
import CreatePageForm from "@/components/forms/CreatePageForm";

const PageCreationPage = () => {
  return (
    <>
      <Head>
        <title>Criar Página - UFABCwiki</title>
      </Head>

      <MainPageLayout>
        <Flex
          gap="lg"
          direction="column"
          bgColor="neutral_100"
          padding="xl"
          width="fit-parent"
          style={{ minWidth: "100%", height: "100%" }}
        >
          <CreatePageForm />
        </Flex>
      </MainPageLayout>
    </>
  );
};

export default PageCreationPage;
