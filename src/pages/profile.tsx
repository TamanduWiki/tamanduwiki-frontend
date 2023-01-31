import styled from "@emotion/styled";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";

import { apiGetUserInfo } from "@/api";

import fakeProfilePicture from "@/assets/images/ash.jpg";
import booksBackgroundImg from "@/assets/images/books_background.png";

import MainPageLayout from "@/components/layouts/MainPageLayout";

import { handleError } from "@/utils";

interface IUser {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  status: string;
  universityTie: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral_100};
  position: relative;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
`

export const PageTitle = styled.h1`
  padding: 0 ${({ theme }) => theme.spacing.sm};
  border-left: 8px solid ${({ theme }) => theme.colors.primary};
`;

export const ProfilePic = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-image: ${`url(${fakeProfilePicture.src})`};
  background-size: cover;
  background-position: 50% 50%;
`;

export const PicContainer = styled.div`
  width: 172px;
  height: 172px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral_100};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -136px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>()

  const handleGetUserInfo = useCallback(async () => {
    setLoading(true);

    try {
      await apiGetUserInfo().then((userData) => setUser(userData));
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetUserInfo();
  }, [handleGetUserInfo]);

  return (
    <MainPageLayout
      pageHead={`${(user?.firstName && user?.lastName) ? `${user.firstName} ${user.lastName}` : "Página desconhecida"} | UFABCwiki`}
      noContent={!user}
      noContentText="Erro: Conteúdo inexistente"
      loading={loading}
      loadingText="Carregando detalhes do usuário"
    >
      <div style={{ marginBottom: "24px", marginTop: "8px" }}>
        <PageTitle>
          Meu perfil
        </PageTitle>
      </div>

      <div style={{ height: "128px", backgroundImage: `url(${booksBackgroundImg.src})`, borderTop: `2px solid #dedede`, borderLeft: `2px solid #dedede`, borderRight: `2px solid #dedede` }}></div>

      <Container>
        <PicContainer>
          <ProfilePic/>
        </PicContainer>

        <p><strong>Membro desde:</strong> {moment(user?.createdAt).format("DD/MM/yyyy, h:mm")}</p>

        <p><strong>Última atualização:</strong> {moment(user?.updatedAt).format("DD/MM/yyyy, h:mm")}</p>

        <p><strong>Nome:</strong> {`${user?.firstName} ${user?.lastName}`}</p>

        <p><strong>E-mail:</strong> {user?.email}</p>
      </Container>
    </MainPageLayout>
  );
};

export default ProfilePage;
