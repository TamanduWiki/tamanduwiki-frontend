import Flex from "@/components/common/Flex";
import LinkButton from "@/components/common/LinkButton";
import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import SignupForm from "@/components/forms/SignupForm";

const SignupPage = () => {
  return (
    <SimplePageLayout
      pageHead="Cadastro - UFABCwiki"
      bottomLink={{ href: "/privacy", label: "Política de Privacidade" }}
    >
      <Flex
        align="center"
        gap="xs"
        color="neutral_500"
        style={{
          lineHeight: 1.5,
          maxWidth: "360px",
          textAlign: "center",
        }}
      >
        <p>
          Para criar uma conta é necessário ter um email institucional da UFABC.
        </p>
      </Flex>

      <SignupForm />

      <p>
        Já tem conta? <LinkButton href="/login">Fazer o login</LinkButton>
      </p>
    </SimplePageLayout>
  );
};

export default SignupPage;
