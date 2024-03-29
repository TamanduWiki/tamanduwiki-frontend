import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import PageUnderDevelopment from "@/components/common/PageUnderDevelopment";

const ForgotPasswordPage = () => {
  return (
    <SimplePageLayout
      pageHead="Termos - TamanduWiki"
      bottomLinks={[{ href: "/", label: "Voltar ao início" }]}
    >
      <PageUnderDevelopment />
    </SimplePageLayout>
  );
};

export default ForgotPasswordPage;
