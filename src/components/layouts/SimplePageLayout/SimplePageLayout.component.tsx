import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import logoImg from "@/assets/images/logo.svg";

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
}

const SimplePageLayout = ({ children, bottomLink, pageHead }: Props) => {
  return (
    <>
      <Head>
        <title>{pageHead}</title>
      </Head>

      <PageContainer>
        <Content>
          <Link href="/">
            <Image src={logoImg as string} alt="logo" />
          </Link>

          <MainAreaContent>{children}</MainAreaContent>

          <LinkButton variant="secondary" href={bottomLink.href}>
            {bottomLink.label}
          </LinkButton>
        </Content>
      </PageContainer>
    </>
  );
};

export default SimplePageLayout;
