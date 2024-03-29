import styled from "@emotion/styled";

export const PageTitleHeader = styled.h1`
  padding-left: ${({ theme }) => theme.spacing.sm};
  border-left: 8px solid ${({ theme }) => theme.colors.primary};
  display: inline-block;
  word-break: break-word;

  @media (max-width: 538px) {
    font-size: 24px;
  }
`;
