import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

import logoImg from "@/assets/images/logo.svg";

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import {
  Content,
  ContentContainer,
  HeaderButtonsContainer,
  HeaderInputContainer,
  HeaderSubMenu,
  MainHeader,
  MainHeaderContainer,
  MainSection,
  MockContainer1,
  MockContainer2,
  MockContainer3,
  MockContainer4,
  PageContainer,
  SideSection,
  StickySideContainer,
} from "./MainPageLayout.styles";

interface Props {
  children: React.ReactNode;
}

const MainPageLayout = ({ children }: Props) => {
  return (
    <PageContainer>
      <MainHeaderContainer>
        <MainHeader>
          <Link href="/">
            <Image src={logoImg} alt="logo" width={264} height={38} />
          </Link>

          <HeaderSubMenu>
            <FiMenu size={32} style={{ flexShrink: 0 }} />
          </HeaderSubMenu>

          <HeaderInputContainer>
            <Input
              fluid
              name="search"
              placeholder="Pesquisar por nome da página ou por categoria..."
            />
          </HeaderInputContainer>

          <HeaderButtonsContainer>
            <Link href="/signup">
              <Button variant="secondary" size="md">
                Cadastro
              </Button>
            </Link>

            <Link href="/login">
              <Button size="md">
                Login
              </Button>
            </Link>
          </HeaderButtonsContainer>
        </MainHeader>
      </MainHeaderContainer>

      <ContentContainer>
        <Content>
          <SideSection>
            <StickySideContainer>
              <MockContainer1 />

              <MockContainer2 />

              <MockContainer3 />
            </StickySideContainer>
          </SideSection>

          <MainSection>
            <MockContainer2 />

            <MockContainer4>
              {children}
            </MockContainer4>
          </MainSection>
        </Content>
      </ContentContainer>
    </PageContainer>
  );
}

export default MainPageLayout;
