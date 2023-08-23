import moment from "moment";
import { GetServerSideProps } from "next";
import { useCallback, useEffect, useState } from "react";

import { apiGetUserInfo } from "@/api";

import PageTitle from "@/components/common/PageTitle";
import MainPageLayout from "@/components/layouts/MainPageLayout";
import { Container, ProfilePic } from "@/components/pages/profile";

import { handleError, serverSideAuthCheck } from "@/utils";
import Flex from "@/components/common/Flex";
import { theme } from "@/styles/theme";

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
      pageHead={`${pageHeadInitial} | TamanduWiki`}
      noContent={!user}
      noContentText="Erro: Conteúdo inexistente"
      loading={loading}
      loadingText="Carregando detalhes do usuário"
    >
      <PageTitle>Meu perfil</PageTitle>

      <Container>
        <ProfilePic />

        <Flex direction="column" gap="sm">
          <Flex gap="xs">
            <p style={{ fontWeight: 500, color: theme.colors.neutral_100 }}>
              Membro desde:
            </p>

            <p style={{ fontWeight: 500, color: theme.colors.neutral_200 }}>
              {moment(user?.createdAt).format("DD/MM/yyyy, h:mm")}
            </p>
          </Flex>

          <Flex gap="xs">
            <p style={{ fontWeight: 500, color: theme.colors.neutral_100 }}>
              Última atualização:
            </p>

            <p style={{ fontWeight: 500, color: theme.colors.neutral_200 }}>
              {moment(user?.updatedAt).format("DD/MM/yyyy, h:mm")}
            </p>
          </Flex>

          <Flex gap="xs">
            <p style={{ fontWeight: 500, color: theme.colors.neutral_100 }}>
              Nome:
            </p>

            <p style={{ fontWeight: 500, color: theme.colors.neutral_200 }}>
              {`${user?.firstName} ${user?.lastName}`}
            </p>
          </Flex>
          <Flex gap="xs">
            <p style={{ fontWeight: 500, color: theme.colors.neutral_100 }}>
              E-mail:
            </p>

            <p style={{ fontWeight: 500, color: theme.colors.neutral_200 }}>
              {user?.email}
            </p>
          </Flex>
        </Flex>
      </Container>
    </MainPageLayout>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await serverSideAuthCheck(context);
};
