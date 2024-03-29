import styled from "@emotion/styled";
import Image from "next/image";

import undrawnBuildingImages from "@/assets/images/undraw_building_blocks_re_5ahy.svg";

import MainPageLayout from "@/components/layouts/MainPageLayout";
import Flex from "@/components/common/Flex";

const BuildingBlocksImg = styled(Image)`
  width: 360px;
  height: 360px;

  @media (max-width: 538px) {
    width: 240px;
    height: 240px;
  }
`;

const AboutPage = () => {
  return (
    <MainPageLayout pageHead="Sobre - TamanduWiki">
      <Flex
        height="fit-parent"
        align="center"
        justify="center"
        direction="column"
      >
        <h2>Página em construção...</h2>

        <BuildingBlocksImg
          src={undrawnBuildingImages as string}
          alt="undraw_building_blocks"
        />
      </Flex>
    </MainPageLayout>
  );
};

export default AboutPage;
