import styled from "@emotion/styled";

import MainPageLayout from "@/components/layouts/MainPageLayout";
import CreatePageForm from "@/components/forms/CreatePageForm";
import PageTitle from "@/components/common/PageTitle";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};

  min-width: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.neutral_100};

  @media (max-width: 540px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const PageCreationPage = () => {
  return (
    <MainPageLayout pageHead="Criar Página - UFABCwiki">
      <PageTitle>
        Criar página
      </PageTitle>

      <MainContainer>
        <CreatePageForm />
      </MainContainer>
    </MainPageLayout>
  );
};

export default PageCreationPage;
