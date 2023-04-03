import styled from "@emotion/styled";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 1198px) {
    padding-bottom: 0;
  }

  @media (max-width: 538px) {
    padding: 0;
  }
`;

export const BottomComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.neutral_300};
  background-color: ${({ theme }) => theme.colors.neutral_500};

  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
`;
