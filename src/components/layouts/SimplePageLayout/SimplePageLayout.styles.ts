import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 1140px;
  padding: ${({ theme }) => theme.spacing["3xl"]};
  gap: ${({ theme }) => theme.spacing["3xl"]};

  @media (max-width: 540px) {
    padding: ${({ theme }) => `${theme.spacing["3xl"]} ${theme.spacing.xs}`};
    justify-content: space-around;
  }
`;

export const MainAreaContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 560px;
  padding: ${({ theme }) => theme.spacing.xl};
  border: ${({ theme }) => `1px solid #dedede`}; // Design System Exception

  background-color: ${({ theme }) => theme.colors.neutral_100};

  @media (max-width: 540px) {
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
