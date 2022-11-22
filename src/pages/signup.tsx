import Head from "next/head";

import Flex from "@/components/common/Flex";
import LinkButton from "@/components/common/LinkButton";
import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import SignupForm from "@/components/forms/SignupForm";
import { theme } from "@/styles/theme";

const SignupPage = () => {
  return (
    <>
      <Head><title>Cadastro - UFABCwiki</title></Head>

      <SimplePageLayout bottomLink={{ href: "/privacy", label: "Política de Privacidade" }}>
        <Flex align="center" gap="xs" style={{ color: theme.colors.neutral[500], lineHeight: 1.5, maxWidth: "360px", textAlign: "center" }}>
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
