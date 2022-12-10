import styled from "@emotion/styled";
import Image from "next/image";
import Head from "next/head";

import undrawnBuildingImages from "@/assets/images/undraw_building_blocks_re_5ahy.svg";

import MainPageLayout from "@/components/layouts/MainPageLayout";
import Flex from "@/components/common/Flex";

const BuildingBlocksImg = styled(Image)`
  width: 360px;
  height: 360px;

  @media (max-width: 540px) {
    width: 240px;
    height: 240px;
  }
`

const SavedPagesPage = () => {
  return (
    <>
      <Head><title>Páginas salvas - UFABCwiki</title></Head>

      <MainPageLayout>
        <Flex height="fit-parent" align="center" justify="center" direction="column">
          <h2>Página em construção...</h2>

          <BuildingBlocksImg
            src={undrawnBuildingImages as string}
            alt="undraw_building_blocks"
          />
        </Flex>
      </MainPageLayout>
    </>
  );
};

export default SavedPagesPage;
