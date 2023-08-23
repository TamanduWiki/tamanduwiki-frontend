import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import PageUnderDevelopment from "@/components/common/PageUnderDevelopment";

const TermsPage = () => {
  return (
    <SimplePageLayout
      pageHead="Termos - TamanduWiki"
      bottomLinks={[{ href: "/", label: "Voltar ao início" }]}
    >
      <PageUnderDevelopment />
    </SimplePageLayout>
  );
};

export default TermsPage;
