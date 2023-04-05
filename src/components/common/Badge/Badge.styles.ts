import styled from "@emotion/styled";

export const BadgeContainer = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.green_200};
  color: ${({ theme }) => theme.colors.green_200};
`;
