import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiBarChart, FiBookOpen, FiClock, FiFeather, FiHelpCircle, FiHome, FiMenu, FiUser } from 'react-icons/fi';

import logoImg from "@/assets/images/logo.svg";

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Flex from '@/components/common/Flex';

import useDebounce from '@/hooks/useDebounce';

import { theme } from '@/styles/theme';

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
            <Flex backgroundColor="white" borderRadius="sm" padding="md" direction="column">
              <Link href="/" style={{ textDecoration: "none" }}>
                <Flex align="center" gap="xs" padding="xs" style={{ color: theme.colors.neutral[400] }}>
                  <FiHome size={24} /> Página inicial
                </Flex>
              </Link>
            </Flex>

            <StickySideContainer>
              <Flex backgroundColor="white" borderRadius="sm" padding="md" gap="md" direction="column">
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Flex align="center" gap="xs" padding="xs" style={{ color: theme.colors.neutral[400] }}>
                    <FiBookOpen size={24} /> Sugestões
                  </Flex>
                </Link>

                <Link href="/" style={{ textDecoration: "none" }}>
                  <Flex align="center" gap="xs" padding="xs" style={{ color: theme.colors.neutral[400] }}>
                    <FiClock size={24} /> Últimas alterações
                  </Flex>
                </Link>

                <Link href="/" style={{ textDecoration: "none" }}>
                  <Flex align="center" gap="xs" padding="xs" style={{ color: theme.colors.neutral[400] }}>
                    <FiHelpCircle size={24} /> Sobre
                  </Flex>
                </Link>
              </Flex>

              <Flex backgroundColor="white" borderRadius="sm" padding="md" gap="md" direction="column">
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Flex align="center" gap="xs" padding="xs" style={{ color: theme.colors.neutral[400] }}>
                    <FiUser size={24} /> Teste 1
                  </Flex>
                </Link>

                <Link href="/" style={{ textDecoration: "none" }}>
                  <Flex align="center" gap="xs" padding="xs" style={{ color: theme.colors.neutral[400] }}>
                    <FiBarChart size={24} /> Teste 2
                  </Flex>
                </Link>

                <Link href="/" style={{ textDecoration: "none" }}>
                  <Flex align="center" gap="xs" padding="xs" style={{ color: theme.colors.neutral[400] }}>
                    <FiFeather size={24} /> Teste 3
                  </Flex>
                </Link>
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
