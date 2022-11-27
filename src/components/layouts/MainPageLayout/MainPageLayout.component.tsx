import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import {
  FiFeather,
  FiHome,
  FiLogIn,
  FiMenu,
  FiUserPlus,
} from 'react-icons/fi';

import logoImg from "@/assets/images/logo.svg";

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Flex from '@/components/common/Flex';

import useDebounce from '@/hooks/useDebounce';

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
  initialSearchValue?: string;
  sideText?: string;
  onSearch?: (searchValue: string) => void;
}

interface SidebarNavBtnProps {
  href: string;
  icon: IconType;
  label: string;
}

const SidebarNavBtn = ({ href, icon: Icon, label }: SidebarNavBtnProps) => {
  const { pathname } = useRouter();

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Flex
        color={pathname === href ? 'primary' : 'neutral_400'}
        align="center"
        padding="xs"
        gap="xs"
      >
        <Icon size={24} /> {label}
      </Flex>
    </Link>
  )
}

const MainPageLayout = ({ children, onSearch, initialSearchValue, sideText }: Props) => {
  const router = useRouter();

  const [search, setSearch] = useState(initialSearchValue || '');
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (onSearch) onSearch(debouncedSearch)
    else if (!!debouncedSearch) router.push(`/?searchPage=${debouncedSearch}`)
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
            <Link href="/signup" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="md">
                Cadastro
              </Button>
            </Link>

            <Link href="/login" style={{ textDecoration: 'none' }}>
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
            {/* Podem ser colocadas coisas aqui não sticky */}

            <StickySideContainer>
              <Flex bgColor="neutral_100" radius="sm" padding="md" gap="md" direction="column">
                <SidebarNavBtn href="/" icon={FiHome} label="Página inicial" />

                <SidebarNavBtn href="/create-page" icon={FiFeather} label="Criar página" />
              </Flex>

              {router.pathname === '/' &&
                <Flex bgColor="neutral_100" radius="sm" padding="md" gap="md" direction="column">
                  {sideText}

                  {/* <p>Aqui vão os filtros de busca...</p>

                  <p>Ainda não foi implementado</p>

                  <Flex align="center" gap="xs">
                    <input type="checkbox" name="filtro_1" />
                    <label htmlFor="filtro_1">Filtro 1</label>
                  </Flex>

                  <Flex align="center" gap="xs">
                    <input type="checkbox" name="filtro_2" />
                    <label htmlFor="filtro_2">Filtro 2</label>
                  </Flex>

                  <Flex align="center" gap="xs">
                    <input type="checkbox" name="filtro_2" />
                    <label htmlFor="filtro_2">Filtro 2</label>
                  </Flex> */}
                </Flex>
              }
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
