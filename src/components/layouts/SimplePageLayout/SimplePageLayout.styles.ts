import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 1140px;
  padding: ${({ theme }) => `${theme.spacing["xl"]} ${theme.spacing["xs"]}`};
  gap: ${({ theme }) => theme.spacing["5xl"]};
`;

export const MainAreaContent = styled.div<{ contentSize: "sm" | "md" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${({ contentSize }) => (contentSize === "md" ? "520px" : "304px")};

  gap: ${({ theme }) => theme.spacing["3xl"]};
  padding: ${({ theme }) => theme.spacing.xl};

  background-color: ${({ theme }) => theme.colors.neutral_400};

  @media (max-width: 538px) {
    width: 100%;

    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
