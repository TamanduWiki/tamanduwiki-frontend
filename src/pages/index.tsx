import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";

import loadingImg from "@/assets/animated/loading_balls_green.svg";

import Flex from "@/components/common/Flex";
import MainPageLayout from "@/components/layouts/MainPageLayout";

import api from "@/infra/api";
import { delay } from "@/utils";

interface IPage {
  id: string,
  title: string,
  content: string,
  slug: string,
  createdAt: string,
  updatedAt: string,
}

const HomePage = () => {
  const [pages, setPages] = useState<IPage[]>([]);
  const [pagesLoading, setPagesLoading] = useState(false);

  const handleSearchPages = useCallback(async (searchParam: string) => {
    const url = !!searchParam ? `/pages?searchFor=${searchParam}` : "/pages";

    setPagesLoading(true);

    await api.get(url).then(({ data }) => setPages(data));

    setPagesLoading(false);
  }, []);

  return (
    <>
      <Head><title>UFABCwiki</title></Head>

      <MainPageLayout onSearch={handleSearchPages}>
        <Flex gap="16px" direction="column" borderRadius="md" backgroundColor="white" padding="16px" style={{ minWidth: "100%", minHeight: "100%" }}>
          {pagesLoading &&
            <Flex height="fit-parent" width="fit-parent" align="center" justify="center">
              <Image src={loadingImg} alt="loading_img"/>
            </Flex>
          }

          {!pagesLoading && pages.map(page =>
            <div key={page.id}>
              <h2>{page.title}</h2>

              <p>{page.content}</p>
            </div>
          )}

          {!pagesLoading && !pages.length &&
            <Flex height="fit-parent" width="fit-parent" align="center" justify="center">
              <strong>Não há resultados para esta busca...</strong>
            </Flex>
          }
        </Flex>
      </MainPageLayout>
    </>
  );
};

export default HomePage;
