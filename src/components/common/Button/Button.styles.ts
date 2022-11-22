import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface StyledButtonProps {
  variant: ButtonVariant;
  fluid?: boolean;
  size?: "lg" | "md";
}

const variantStyles = {
  primary: css`background: ${theme.colors.primary}; color: ${theme.colors.neutral[100]}`,
  secondary: css`background: ${theme.colors.neutral[200]}`,
  tertiary: css`border: 1px solid ${theme.colors.neutral[200]}`,
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ theme, size }) => size === "lg" ? theme.spacing.md : theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  box-shadow: 2px 2px 8px 1px ${({ theme }) => theme.colors.neutral[200]};
  border: none;
  cursor: pointer;
  transition: all 0.05s;
  line-height: 1;
  position: relative;
  min-height: ${({ theme, size }) => size === "lg" ? theme.spacing["3xl"] : theme.spacing.xxl};

  ${({ fluid }) => fluid && css`width: 100%`};

  ${({ variant }) => variantStyles[variant]};

  &:active {
    box-shadow: none;
  }
`;
