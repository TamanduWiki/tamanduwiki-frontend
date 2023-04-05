import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  min-width: 244px;
  max-width: 244px;
  min-height: 244px;
  max-height: 244px;

  @media (max-width: 538px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral_400};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const MainInfos = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral_400};
  padding: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;

  @media (max-width: 766px) {
    // Design System Exception (???)
    flex-direction: column;
  }
`;
