import styled from "@emotion/styled";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 540px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
