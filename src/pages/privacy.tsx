import styled from "@emotion/styled";
import Image from "next/image";
import Head from "next/head";

import undrawnBuildingImages from "@/assets/images/undraw_building_blocks_re_5ahy.svg";

import SimplePageLayout from "@/components/layouts/SimplePageLayout";

const BuildingBlocksImg = styled(Image)`
  width: 360px;
  height: 360px;

  @media (max-width: 540px) {
    width: 240px;
    height: 240px;
  }
`

const LoginPage = () => {
  return (
    <>
      <Head><title>Privacidade - UFABCwiki</title></Head>

      <SimplePageLayout bottomLink={{ href: "/", label: "Voltar ao início" }}>
        <p>Página em construção...</p>

        <BuildingBlocksImg
          src={undrawnBuildingImages}
          alt="undraw_building_blocks"
        />
      </SimplePageLayout>
    </>
  );
};

export default LoginPage;
