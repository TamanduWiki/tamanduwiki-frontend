import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiBookmark,
  FiFeather,
  FiFilePlus,
  FiHelpCircle,
  FiHome,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiSearch,
  FiUser,
  FiUserPlus,
  FiX,
} from "react-icons/fi";

import { AuthContext } from "@/contexts/auth/authContext";

import Button from "@/components/common/Button";
import IconButton from "@/components/common/IconButton";
import Input from "@/components/common/Input";
import Flex from "@/components/common/Flex";
import SidebarNavBtn from "@/components/common/SidebarNavBtn";
import SidebarNavLink from "@/components/common/SidebarNavLink";

import {
  ChildrenContainer,
  Content,
  ContentContainer,
  HeaderInputContainer,
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
  FullHeightContainer,
  LoadingTitle,
  HamburguerMenuContainer,
  HeaderFiltersContainer,
} from "./MainPageLayout.styles";
import { parseCookies, setCookie } from "nookies";

interface Props {
  children: React.ReactNode;
  pageHead: string;
  loading?: boolean;
  loadingText?: string;
  noContent?: boolean;
  noContentText?: string;
  onSearch?: (searchValue: string) => void;
}

const PrimaryNavigation = ({ collapsed }: { collapsed?: boolean }) => {
  const { logged } = useContext(AuthContext);

  return (
    <>
      <SidebarNavLink
        href="/"
        icon={FiHome}
        label="Página inicial"
        smaller={collapsed}
      />

      {logged && (
        <SidebarNavLink
          href="/create-page"
          icon={FiFeather}
          label="Criar página"
          smaller={collapsed}
        />
      )}

      <SidebarNavLink
        href="/about"
        icon={FiHelpCircle}
        label="Sobre"
        smaller={collapsed}
      />
    </>
  );
};

const SecondaryNavigation = ({
  collapsed,
  mobile,
}: {
  collapsed?: boolean;
  mobile?: boolean;
}) => {
  const { logged, handleLogout } = useContext(AuthContext);

  if (logged)
    return (
      <>
        <SidebarNavLink
          href="/profile"
          icon={FiUser}
          label="Meu perfil"
          smaller={collapsed}
        />

        <SidebarNavLink
          href="/contributions"
          icon={FiFilePlus}
          label="Contribuições"
          smaller={collapsed}
        />

        <SidebarNavLink
          href="/saved-pages"
          icon={FiBookmark}
          label="Páginas Salvas"
          smaller={collapsed}
        />

        <SidebarNavBtn
          onClick={handleLogout}
          icon={FiLogOut}
          label="Logout"
          smaller={collapsed}
        />
      </>
    );

  return (
    <>
      <SidebarNavLink
        href="/login"
        icon={FiLogIn}
        label="Login"
        smaller={collapsed}
      />

      <SidebarNavLink
        href="/signup"
        icon={FiUserPlus}
        label="Cadastro"
        smaller={collapsed}
      />
    </>
  );
};

const MainSubmenu = ({
  search,
  setSearch,
  handleSearch,
  onClose,
  collapsed,
}) => {
  return (
    <>
      {!collapsed && <Backdrop />}

      <SubmenuContainer collapsed={collapsed}>
        <Flex direction="column" gap="md" padding="md">
          <SubmenuInputContainer>
            <Input
              fluid
              name="search"
              placeholder="Pesquisar..."
              onChange={(event) => setSearch(event.target.value)}
              value={search}
              style={{ height: "40px", width: "100%" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch(search);
              }}
            />

            <IconButton
              icon={FiSearch}
              size="md"
              onClick={() => {
                handleSearch(search);
                onClose();
              }}
            />
          </SubmenuInputContainer>

          <Button variant="secondary" fluid>
            Selecionar filtros
          </Button>
        </Flex>

        <Flex direction="column" gap="md" padding="md">
          <PrimaryNavigation />

          <SecondaryNavigation mobile />
        </Flex>
      </SubmenuContainer>
    </>
  );
};

const MainPageLayout = ({
  children,
  onSearch,
  pageHead,
  loading,
  loadingText,
  noContent,
  noContentText,
}: Props) => {
  const { query, push, pathname } = useRouter();

  const [headerSubmenuOpen, setHeaderSubmenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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

  useEffect(() => {
    setSidebarCollapsed(parseCookies()?.sidebarCollapsed === "true");
  }, []);

  return (
    <>
      <Head>
        <title>{pageHead}</title>
      </Head>

      <PageContainer>
        <MainHeaderContainer>
          <MainHeader>
            <Link href="/" style={{ gridArea: "logo", marginLeft: "16px" }}>
              <Image
                src="/images/ufabcwiki_logotipo_white.svg"
                alt="logo"
                width={140}
                height={24}
              />
            </Link>

            <HeaderInputContainer>
              <Input
                fluid
                name="search"
                placeholder="Pesquisar por nome da página ou por categoria..."
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                style={{ height: "40px", width: "100%" }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch(search);
                }}
              />

              <IconButton
                variant="primary"
                onClick={() => handleSearch(search)}
                icon={FiSearch}
              />
            </HeaderInputContainer>

            <HeaderFiltersContainer>
              <Button variant="secondary" fluid>
                Selecionar filtros
              </Button>
            </HeaderFiltersContainer>

            <HamburguerMenuContainer style={{ gridArea: "menu" }}>
              <IconButton
                size="md"
                variant="secondary"
                onClick={() => setHeaderSubmenuOpen((prev) => !prev)}
                icon={headerSubmenuOpen ? FiX : FiMenu}
              />
            </HamburguerMenuContainer>
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
          <Content sidebarCollapsed={sidebarCollapsed}>
            <SideSection collapsed={sidebarCollapsed}>
              <div>
                <SideMenuSection collapsed={sidebarCollapsed}>
                  <PrimaryNavigation collapsed={sidebarCollapsed} />
                </SideMenuSection>

                <SideMenuSection collapsed={sidebarCollapsed}>
                  <SecondaryNavigation collapsed={sidebarCollapsed} />
                </SideMenuSection>
              </div>

              <SideMenuSection collapsed={sidebarCollapsed}>
                <SidebarNavBtn
                  smaller={sidebarCollapsed}
                  icon={
                    sidebarCollapsed ? FiArrowRightCircle : FiArrowLeftCircle
                  }
                  onClick={() =>
                    setSidebarCollapsed((prev) => {
                      setCookie(null, "sidebarCollapsed", (!prev).toString());

                      return !prev;
                    })
                  }
                />
              </SideMenuSection>
            </SideSection>

            <MainSection sidebarCollapsed={sidebarCollapsed}>
              <ChildrenContainer>
                {loading || noContent ? (
                  <FullHeightContainer>
                    {loading ? (
                      <Flex direction="column" gap="sm" align="center">
                        <Image
                          src="/images/loading_gears_n_500.svg"
                          alt="loading_img"
                          width={48}
                          height={48}
                        />

                        <LoadingTitle>
                          {loadingText || "Carregando"}
                        </LoadingTitle>
                      </Flex>
                    ) : (
                      <>{noContent && <strong>{noContentText}</strong>}</>
                    )}
                  </FullHeightContainer>
                ) : (
                  children
                )}
              </ChildrenContainer>
            </MainSection>
          </Content>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default MainPageLayout;
