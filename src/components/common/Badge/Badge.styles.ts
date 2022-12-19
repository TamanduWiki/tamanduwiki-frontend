import styled from '@emotion/styled';

export const BadgeContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.neutral_200};
  font-size: 0.875rem;
  font-weight: 500;
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
  text-transform: uppercase;
`;
