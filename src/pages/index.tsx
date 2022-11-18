import { useState } from "react";

import Flex from "@/components/common/Flex";
import MainPageLayout from "@/components/layouts/MainPageLayout";

interface IPage {
  id: string,
  title: string,
  content: string,
  slug: string,
  createdAt: string,
  updatedAt: string,
}

interface SSRProps {
  data: IPage[];
  error: { message: string } | null;
}

const HomePage = ({ data, error }: SSRProps) => {
  const [pages, setPages] = useState<IPage[]>(data);

  console.log(data);
  console.log(error);

  return (
    <MainPageLayout>
      <Flex gap="16px" direction="column" borderRadius="md" backgroundColor="white" padding="16px">
        {pages.map(page =>
          <div key={page.id}>
            <h2>{page.title}</h2>

            <p>{page.content}</p>
          </div>
        )}
      </Flex>
    </MainPageLayout>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/pages')
    const data = await res.json()

    return { props: { data, error: null } }
  } catch (error: any) {
    console.log(error);

    if (error?.name === "FetchError") {
      return { props: { data: [], error: { message: "ssrFetchError" } }}
    }

    return { props: { data: [], error: { message: "ssrUnknownError" } }}
  }
}
