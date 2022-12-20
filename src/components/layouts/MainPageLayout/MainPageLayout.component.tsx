import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  FiBookmark,
  FiFeather,
  FiFilePlus,
  FiHelpCircle,
  FiHome,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiSearch,
  FiSkipBack,
  FiUser,
  FiUserPlus,
  FiX,
  FiXSquare,
} from "react-icons/fi";

import logoImg from "@/assets/images/logo.svg";

import { AuthContext } from "@/contexts/auth/authContext";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SidebarNavBtn from "@/components/common/SidebarNavBtn";
import SidebarNavLink from "@/components/common/SidebarNavLink";

import {
  ChildrenContainer,
  Content,
  ContentContainer,
  HeaderInputContainer,
  SubmenuButtonContainer,
  MainHeader,
  MainHeaderContainer,
  MainSection,
  PageContainer,
  ProfilePic,
  SideMenuSection,
  SideSection,
  SubmenuContainer,
  SubmenuSubcontainer,
  Backdrop,
  SubmenuInputContainer,
} from "./MainPageLayout.styles";
import Flex from "@/components/common/Flex";

interface Props {
  children: React.ReactNode;
  onSearch?: (searchValue: string) => void;
}

const PrimaryNavigation = () => {
  const { logged } = useContext(AuthContext);

  return (
    <>
      <SidebarNavLink href="/" icon={FiHome} label="Página inicial" />

      {logged && (
        <SidebarNavLink
          href="/create-page"
          icon={FiFeather}
          label="Criar página"
        />
      )}

      <SidebarNavLink href="/about" icon={FiHelpCircle} label="Sobre" />
    </>
  );
};

const SecondaryNavigation = () => {
  const { logged, handleLogout } = useContext(AuthContext);

  if (logged)
    return (
      <>
        <Flex justify="center" align="center" width="fit-parent">
          <ProfilePic />
        </Flex>

        <SidebarNavLink href="/profile" icon={FiUser} label="Meu perfil" />

        <SidebarNavLink
          href="/contributions"
          icon={FiFilePlus}
          label="Minhas contribuições"
        />

        <SidebarNavLink
          href="/saved-pages"
          icon={FiBookmark}
          label="Páginas Salvas"
        />

        <SidebarNavBtn onClick={handleLogout} icon={FiLogOut} label="Logout" />
      </>
    );

  return (
    <>
      <SidebarNavLink href="/login" icon={FiLogIn} label="Login" />

      <SidebarNavLink href="/signup" icon={FiUserPlus} label="Cadastro" />
    </>
  );
};

const MainSubmenu = ({ search, setSearch, handleSearch, onClose, collapsed }) => {
  return (
    <>
      {!collapsed && <Backdrop />}

      <SubmenuContainer collapsed={collapsed}>
        {!collapsed && (
          <>
            <SubmenuInputContainer>
              <Input
                fluid
                name="search"
                placeholder="Pesquisar..."
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                style={{ height: "40px", width: "100%" }}
              />

              <Button
                size="md"
                variant="secondary"
                onClick={() => { handleSearch(search); onClose() }}
              >
                <FiSearch />
              </Button>
            </SubmenuInputContainer>

            <SubmenuSubcontainer>
              <PrimaryNavigation />
            </SubmenuSubcontainer>

            <SubmenuSubcontainer>
              <SecondaryNavigation />
            </SubmenuSubcontainer>
          </>
        )}
      </SubmenuContainer>
    </>
  );
};

const MainPageLayout = ({ children, onSearch }: Props) => {
  const { query, push, pathname } = useRouter();

  const [headerSubmenuOpen, setHeaderSubmenuOpen] = useState(false);

  const [search, setSearch] = useState(
    !!query.searchPage && typeof query.searchPage === "string"
      ? query.searchPage
      : ""
  );

  const handleSearch = useCallback(async (searchParam: string) => {
    if (pathname?.length > 1) {
      await push(`/?searchPage=${searchParam}`);
      return;
    }

    onSearch(searchParam);
  }, []);

  useEffect(() => {
    // first api call...

    if (onSearch) onSearch(search);
  }, []);

  return (
    <PageContainer>
      <MainHeaderContainer>
        <MainHeader>
          <Link href="/">
            <Image src={logoImg as string} alt="logo" width={264} height={38} />
          </Link>

          <HeaderInputContainer>
            <Input
              fluid
              name="search"
              placeholder="Pesquisar por nome da página ou por categoria..."
              onChange={(event) => setSearch(event.target.value)}
              value={search}
              style={{ height: "40px" }}
            />

            <Button
              size="md"
              variant="secondary"
              onClick={() => handleSearch(search)}
            >
              <FiSearch style={{ marginRight: "8px" }} />
              Pesquisar
            </Button>
          </HeaderInputContainer>

          <SubmenuButtonContainer>
            <Button variant="secondary" size="md" onClick={() => setHeaderSubmenuOpen(prev => !prev)}>
              {headerSubmenuOpen ? <FiX style={{ flexShrink: 0 }} /> : <FiMenu style={{ flexShrink: 0 }} />}
            </Button>
          </SubmenuButtonContainer>
        </MainHeader>
      </MainHeaderContainer>

      <MainSubmenu
        collapsed={!headerSubmenuOpen}
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        onClose={() => setHeaderSubmenuOpen(false)}
      />

      <ContentContainer>
        <Content>
          <SideSection>
            <SideMenuSection>
              <PrimaryNavigation />
            </SideMenuSection>

            <SideMenuSection>
              <SecondaryNavigation />
            </SideMenuSection>
          </SideSection>

          <MainSection>
            <ChildrenContainer>{children}</ChildrenContainer>
          </MainSection>
        </Content>
      </ContentContainer>
    </PageContainer>
  );
};

export default MainPageLayout;
