import Image from "next/image";
import styled from "@emotion/styled";

export const BuildingBlocksImg = styled(Image)`
  width: 360px;
  height: 360px;

  @media (max-width: 540px) {
    width: 240px;
    height: 240px;
  }
`;
