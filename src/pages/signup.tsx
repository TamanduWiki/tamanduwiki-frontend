import Flex from "@/components/common/Flex";
import LinkButton from "@/components/common/LinkButton";
import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import SignupForm from "@/components/forms/SignupForm";
import { theme } from "@/styles/theme";

const SignupPage = () => {
  return (
    <SimplePageLayout
      contentSize="md"
      pageHead="Cadastro - UFABCwiki"
      bottomLink={{ href: "/privacy", label: "Política de Privacidade" }}
    >
      <Flex
        align="center"
        gap="xs"
        style={{
          lineHeight: 1.25,
          maxWidth: "360px",
          textAlign: "center",
        }}
        direction="column"
      >
        <h3>Realizar cadastro</h3>

        <p style={{ color: theme.colors.neutral_200 }}>
          Para criar uma conta é necessário ter um email institucional da UFABC.
        </p>
      </Flex>

      <SignupForm />
    </SimplePageLayout>
  );
};

export default SignupPage;
