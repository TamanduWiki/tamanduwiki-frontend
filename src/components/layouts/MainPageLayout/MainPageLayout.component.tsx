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
  FiUser,
  FiUserPlus,
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
  HeaderSubMenu,
  MainHeader,
  MainHeaderContainer,
  MainSection,
  PageContainer,
  ProfilePic,
  SideMenuSection,
  SideSection,
} from "./MainPageLayout.styles";

interface Props {
  children: React.ReactNode;
  onSearch?: (searchValue: string) => void;
}

const MainPageLayout = ({ children, onSearch }: Props) => {
  const { query, push, pathname } = useRouter();
  const { logged, handleLogout } = useContext(AuthContext);

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

          <HeaderSubMenu>
            <Button variant="secondary" size="md">
              <FiMenu style={{ flexShrink: 0 }} />
            </Button>
          </HeaderSubMenu>
        </MainHeader>
      </MainHeaderContainer>

      <ContentContainer>
        <Content>
          <SideSection>
            <SideMenuSection>
              <SidebarNavLink href="/" icon={FiHome} label="Página inicial" />

              {logged && (
                <SidebarNavLink
                  href="/create-page"
                  icon={FiFeather}
                  label="Criar página"
                />
              )}

              <SidebarNavLink href="/about" icon={FiHelpCircle} label="Sobre" />
            </SideMenuSection>

            {logged ? (
              <SideMenuSection>
                <ProfilePic />

                <SidebarNavLink
                  href="/profile"
                  icon={FiUser}
                  label="Meu perfil"
                />

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

                <SidebarNavBtn
                  onClick={handleLogout}
                  icon={FiLogOut}
                  label="Logout"
                />
              </SideMenuSection>
            ) : (
              <SideMenuSection>
                <SidebarNavLink href="/login" icon={FiLogIn} label="Login" />

                <SidebarNavLink
                  href="/signup"
                  icon={FiUserPlus}
                  label="Cadastro"
                />
              </SideMenuSection>
            )}
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
