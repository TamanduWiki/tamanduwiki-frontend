import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  min-width: 240px;
  max-width: 240px;

  @media (max-width: 538px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral_400};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 538px) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const MainInfos = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral_400};
  padding: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 538px) {
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;
