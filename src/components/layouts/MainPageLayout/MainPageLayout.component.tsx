import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
  PageContainer,
  SideSection,
  StickySideContainer,
} from "./MainPageLayout.styles";
import Flex from '@/components/common/Flex';
import useDebounce from '@/hooks/useDebounce';

interface Props {
  children: React.ReactNode;
  onSearch?: (searchValue: string) => void;
}

const MainPageLayout = ({ children, onSearch }: Props) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (onSearch) onSearch(debouncedSearch)
  }, [debouncedSearch, onSearch]);

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
              onChange={event => setSearch(event.target.value as string)}
              value={search}
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
            <Flex backgroundColor="white" borderRadius="md" padding="16px" style={{ height: "72px"  }}>
              itens
            </Flex>

            <StickySideContainer>
              <Flex backgroundColor="white" borderRadius="md" padding="16px" style={{ height: "184px" }}>
                itens
              </Flex>

              <Flex backgroundColor="white" borderRadius="md" padding="16px" style={{ height: "184px" }}>
                itens
              </Flex>
            </StickySideContainer>
          </SideSection>

          <MainSection>
            {children}
          </MainSection>
        </Content>
      </ContentContainer>
    </PageContainer>
  );
}

export default MainPageLayout;
