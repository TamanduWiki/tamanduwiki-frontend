import { GetServerSideProps } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { useEffect } from "react";
import { toast } from "react-toastify";

import LinkButton from "@/components/common/LinkButton";
import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import LoginForm from "@/components/forms/LoginForm";
import Button from "@/components/common/Button";

interface Props {
  destinationAfterLogin?: string;
}

const LoginPage = ({ destinationAfterLogin }: Props) => {
  useEffect(() => {
    if (destinationAfterLogin) {
      toast.info(
        "Parece que seu login expirou ou você ainda não fez login. Por favor, realize o login (novamente se for o caso) para acessar a página anterior."
      );
    }
  }, []);

  return (
    <SimplePageLayout
      pageHead="Login - UFABCwiki"
      bottomLink={{ href: "/privacy", label: "Política de Privacidade" }}
    >
      <h3>Realizar login</h3>

      <LoginForm destinationAfterLogin={destinationAfterLogin} />

      <LinkButton href="/forgot-password">Esqueci minha senha</LinkButton>
    </SimplePageLayout>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = parseCookies(context);

    if (!!cookies?.destinationAfterLogin) {
      destroyCookie(context, "destinationAfterLogin");

      return {
        props: { destinationAfterLogin: cookies.destinationAfterLogin },
      };
    }
  } catch (error) {
    console.error("serverside-login-page-error");
  }

  return { props: {} };
};
