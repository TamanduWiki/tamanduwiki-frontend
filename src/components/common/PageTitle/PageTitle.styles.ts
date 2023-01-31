import styled from "@emotion/styled";

export const PageTitleHeader = styled.h1`
  padding: 0 ${({ theme }) => theme.spacing.sm};
  border-left: 8px solid ${({ theme }) => theme.colors.primary};
`;

export const PageTitleContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;

  @media (max-width: 1140px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;
