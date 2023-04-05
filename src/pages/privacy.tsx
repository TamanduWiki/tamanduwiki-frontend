import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import PageUnderDevelopment from "@/components/common/PageUnderDevelopment";

const PrivacyPage = () => {
  return (
    <SimplePageLayout
      pageHead="Privacidade - UFABCwiki"
      bottomLinks={[{ href: "/", label: "Voltar ao início" }]}
    >
      <PageUnderDevelopment />
    </SimplePageLayout>
  );
};

export default PrivacyPage;
