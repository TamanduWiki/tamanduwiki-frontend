import undrawnBuildingImages from "@/assets/images/undraw_building_blocks_re_5ahy.svg";

import { BuildingBlocksImg } from "./PageUnderDevelopment.styles";

import Flex from "../Flex";

const PageUnderDevelopment = () => {
  return (
    <Flex
      height="fit-parent"
      align="center"
      justify="center"
      direction="column"
      gap="md"
    >
      <h2 style={{ textAlign: "center" }}>Página em construção...</h2>

      <BuildingBlocksImg
        src={undrawnBuildingImages as string}
        alt="undraw_building_blocks"
      />
    </Flex>
  );
};

export default PageUnderDevelopment;
