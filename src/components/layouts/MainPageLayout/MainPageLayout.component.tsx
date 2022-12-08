import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import {
  FiBookmark,
  FiFeather,
  FiFilePlus,
  FiHelpCircle,
  FiHome,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiUser,
  FiUserPlus,
} from 'react-icons/fi';

import logoImg from "@/assets/images/logo.svg";

import Input from '@/components/common/Input';
import Flex from '@/components/common/Flex';

import useDebounce from '@/hooks/useDebounce';

import {
  ChildrenContainer,
  Content,
  ContentContainer,
  HeaderInputContainer,
  HeaderSubMenu,
  MainHeader,
  MainHeaderContainer,
  MainSection,
  PageContainer,
  SideSection,
} from "./MainPageLayout.styles";
import { theme } from '@/styles/theme';
import { AuthContext } from '@/contexts/auth/authContext';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  bottomComponent?: React.ReactNode;
  onSearch?: (searchValue: string) => void;
}

interface SidebarNavLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

interface SidebarNavBtnProps {
  onClick: () => void;
  icon: IconType;
  label: string;
}

const StyledLink = styled(Link)<{ selected: boolean }>`
  display: flex;
  text-decoration: none;
  width: 100%;
  align-items: center;
  color: ${({ selected, theme }) => theme.colors[selected ? 'primary' : 'neutral_400']};
  padding: ${({ theme }) => theme.spacing.xs};
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ selected }) => selected ? 600 : 400};
`

const SidebarNavLink = ({ href, icon: Icon, label }: SidebarNavLinkProps) => {
  const { pathname } = useRouter();

  return (
    <StyledLink href={href} selected={pathname === href}>
      <Icon size={24} /> {label}
    </StyledLink>
  )
}

const SidebarNavBtn = ({ onClick, icon: Icon, label }: SidebarNavBtnProps) => {
  return (
    <Flex
      color="neutral_400"
      align="center"
      padding="xs"
      gap="xs"
      width="fit-parent"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Icon size={24} /> {label}
    </Flex>
  )
}

const MainPageLayout = ({ children, onSearch, bottomComponent }: Props) => {
  const router = useRouter();
  const { logged, handleLogout } = useContext(AuthContext);

  const [search, setSearch] = useState(!!router.query.searchPage && typeof router.query.searchPage === 'string' ? router.query.searchPage : '');
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
        </MainHeader>
      </MainHeaderContainer>

      <ContentContainer>
        <Content>
          <SideSection>
              <Flex bgColor="neutral_100" gap="md" direction="column" style={{ padding: '32px 16px', borderBottom: `1px solid ${theme.colors.neutral_200}` }}>
                <SidebarNavLink href="/" icon={FiHome} label="Página inicial" />

                {logged && <SidebarNavLink href="/create-page" icon={FiFeather} label="Criar página" />}

                <SidebarNavLink href="/about" icon={FiHelpCircle} label="Sobre" />
              </Flex>

              {logged
                ? (
                  <Flex bgColor="neutral_100" gap="md" direction="column" align="center" style={{ padding: '32px 16px' }}>
                    <Flex radius="circle" bgColor="neutral_300" align="center" justify="center" color="neutral_100" style={{ width: '80px', height: '80px' }}>i</Flex>

                    <SidebarNavLink href="/profile" icon={FiUser} label="Meu perfil" />

                    <SidebarNavLink href="/contributions" icon={FiFilePlus} label="Minhas contribuições" />

                    <SidebarNavLink href="/saved-pages" icon={FiBookmark} label="Páginas Salvas" />

                    <SidebarNavBtn onClick={handleLogout} icon={FiLogOut} label="Logout" />
                  </Flex>
                )
                : (
                  <Flex bgColor="neutral_100" gap="md" direction="column" align="center" style={{ padding: '32px 16px' }}>
                    <SidebarNavLink href="/login" icon={FiLogIn} label="Login" />

                    <SidebarNavLink href="/signup" icon={FiUserPlus} label="Cadastro" />
                  </Flex>
                )
              }
          </SideSection>

          <MainSection withBottomComponent={!!bottomComponent}>
            <ChildrenContainer>
              {children}
            </ChildrenContainer>

            {bottomComponent &&
              <Flex
                color="neutral_400"
                align="center"
                justify="center"
                style={{ height: '36px', borderTop: `1px solid ${theme.colors.neutral_200}` }}
              >
                {bottomComponent}
              </Flex>
            }
          </MainSection>
        </Content>
      </ContentContainer>
    </PageContainer>
  );
}

export default MainPageLayout;
