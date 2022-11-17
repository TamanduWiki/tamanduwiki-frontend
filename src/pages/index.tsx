import { useState } from "react";

import Flex from "@/components/common/Flex";
import MainPageLayout from "@/components/layouts/MainPageLayout";

const HomePage = ({ data }) => {
  const [pages, setPages] = useState(data);

  console.log(data);

  return (
    <MainPageLayout>
      <Flex gap="16px" direction="column">
        {pages.map(page =>
          <div>
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
    const res = await fetch(process.env.NEXT_API_URL + '/pages')
    const data = await res.json()

    return { props: { data } }
  } catch (error) {
    return { props: { data: [] }}
  }
}
