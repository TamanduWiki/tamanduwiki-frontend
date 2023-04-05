import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};

  min-width: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.neutral_400};

  @media (max-width: 538px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;
