import { GetServerSideProps } from "next";
import Head from "next/head";
import { destroyCookie, parseCookies } from "nookies";
import { useEffect } from "react";
import { toast } from "react-toastify";

import LinkButton from "@/components/common/LinkButton";
import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import LoginForm from "@/components/forms/LoginForm";

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
    <>
      <Head>
        <title>Login - UFABCwiki</title>
      </Head>

      <SimplePageLayout
        bottomLink={{ href: "/privacy", label: "Política de Privacidade" }}
      >
        <LoginForm destinationAfterLogin={destinationAfterLogin} />

        <p>
          Ainda não tem conta?{" "}
          <LinkButton href="/signup">Fazer o cadastro</LinkButton>
        </p>
      </SimplePageLayout>
    </>
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
