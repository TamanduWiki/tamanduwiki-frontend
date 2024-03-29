import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import LinkButton from "@/components/common/LinkButton";
import Flex from "@/components/common/Flex";

import {
  Content,
  MainAreaContent,
  PageContainer,
} from "./SimplePageLayout.styles";

interface Props {
  children: React.ReactNode;
  bottomLinks: { label: string; href: string }[];
  pageHead: string;
  contentSize?: "sm" | "md";
}

const SimplePageLayout = ({
  children,
  bottomLinks,
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
              src="/images/tamanduwiki_logotipo_fullwhite.svg"
              alt="logo"
              width={180}
              height={32}
            />
          </Link>

          <MainAreaContent contentSize={contentSize}>
            {children}
          </MainAreaContent>

          <Flex direction="column" gap="xs" align="center">
            {bottomLinks.map((link) => (
              <LinkButton variant="secondary" href={link.href}>
                {link.label}
              </LinkButton>
            ))}
          </Flex>
        </Content>
      </PageContainer>
    </>
  );
};

export default SimplePageLayout;
