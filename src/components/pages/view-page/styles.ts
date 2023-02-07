import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  min-width: 240px;
  max-width: 240px;

  @media (max-width: 760px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral_100};
  border: 1px solid ${({ theme }) => theme.colors.neutral_300};
  border-style: dashed;
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 760px) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const MainInfos = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral_100};
  padding: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 760px) {
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;
