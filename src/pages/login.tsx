import LinkButton from "@/components/common/LinkButton";
import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {
  return (
    <SimplePageLayout bottomLink={{ href: "/privacy", label: "Política de Privacidade" }}>
      <LoginForm />

      <p>Ainda não tem conta? <LinkButton href="/signup">Fazer o cadastro</LinkButton></p>
    </SimplePageLayout>
  );
};

export default LoginPage;
