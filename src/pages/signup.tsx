import Head from "next/head";

import Flex from "@/components/common/Flex";
import LinkButton from "@/components/common/LinkButton";
import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import SignupForm from "@/components/forms/SignupForm";

const SignupPage = () => {
  return (
    <>
      <Head><title>Cadastro - UFABCwiki</title></Head>

      <SimplePageLayout bottomLink={{ href: "/privacy", label: "Política de Privacidade" }}>
        <Flex align="center" gap="8px" style={{ color: "#6b6b6b", lineHeight: 1.5, maxWidth: "360px", textAlign: "center" }}>
          <p>
            Para criar uma conta é necessário ter um email institucional da UFABC.
          </p>
        </Flex>

        <SignupForm />

        <p>Já tem conta? <LinkButton href="/login">Fazer o login</LinkButton></p>
      </SimplePageLayout>
    </>
  );
};

export default SignupPage;
