import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import LinkButton from "@/components/common/LinkButton";

import {
  Content,
  MainAreaContent,
  PageContainer,
} from "./SimplePageLayout.styles";

interface Props {
  children: React.ReactNode;
  bottomLink: { label: string; href: string };
  pageHead: string;
  contentSize?: "sm" | "md";
}

const SimplePageLayout = ({
  children,
  bottomLink,
  pageHead,
  contentSize = "sm",
}: Props) => {
  return (
    <>
      <Head>
        <title>{pageHead}</title>
      </Head>

      <PageContainer>
        <Content>
          <Link href="/">
            <Image
              src="/images/ufabcwiki_logotipo_fullwhite.svg"
              alt="logo"
              width={180}
              height={32}
            />
          </Link>

          <MainAreaContent contentSize={contentSize}>
            {children}
          </MainAreaContent>

          <LinkButton variant="secondary" href={bottomLink.href}>
            {bottomLink.label}
          </LinkButton>
        </Content>
      </PageContainer>
    </>
  );
};

export default SimplePageLayout;
