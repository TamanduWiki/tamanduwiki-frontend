import moment from "moment";
import { GetServerSideProps } from "next";
import { useCallback, useEffect, useState } from "react";

import { apiGetUserInfo } from "@/api";

import PageTitle from "@/components/common/PageTitle";
import MainPageLayout from "@/components/layouts/MainPageLayout";
import {
  Banner,
  Container,
  PicContainer,
  ProfilePic,
} from "@/components/pages/profile";

import { handleError, serverSideAuthCheck } from "@/utils";

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

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>();

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

  const pageHeadInitial =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : "Página desconhecida";

  useEffect(() => {
    handleGetUserInfo();
  }, [handleGetUserInfo]);

  return (
    <MainPageLayout
      pageHead={`${pageHeadInitial} | UFABCwiki`}
      noContent={!user}
      noContentText="Erro: Conteúdo inexistente"
      loading={loading}
      loadingText="Carregando detalhes do usuário"
    >
      <PageTitle>Meu perfil</PageTitle>

      <Banner />

      <Container>
        <PicContainer>
          <ProfilePic />
        </PicContainer>

        <p>
          <strong>Membro desde:</strong>{" "}
          {moment(user?.createdAt).format("DD/MM/yyyy, h:mm")}
        </p>

        <p>
          <strong>Última atualização:</strong>{" "}
          {moment(user?.updatedAt).format("DD/MM/yyyy, h:mm")}
        </p>

        <p>
          <strong>Nome:</strong> {`${user?.firstName} ${user?.lastName}`}
        </p>

        <p>
          <strong>E-mail:</strong> {user?.email}
        </p>
      </Container>
    </MainPageLayout>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await serverSideAuthCheck(context);
};
