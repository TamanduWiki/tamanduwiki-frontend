import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'warning';

interface StyledButtonProps {
  variant: ButtonVariant;
  fluid?: boolean;
  size?: "lg" | "md";
}

const variantStyles = {
  primary: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.neutral_100};
  `,
  secondary: css`
    background: ${theme.colors.neutral_200};
    border: 1px solid #dedede;
  `,
  tertiary: css`
    box-shadow: none;
    background: transparent;
    color: ${theme.colors.primary};
    padding: 0;
    min-height: auto;
    max-height: auto;
  `,
  warning: css`
    background: ${theme.colors.error};
    color: ${theme.colors.neutral_100};
  `
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  padding: 0 ${({ theme }) => theme.spacing.md};
  border: none;
  cursor: pointer;
  transition: all 0.05s;
  line-height: 1;
  position: relative;
  min-height: ${({ size }) => size === "md" ? '40px' : '48px'};
  max-height: ${({ size }) => size === "md" ? '40px' : '48px'};

  white-space: nowrap;

  ${({ fluid }) => fluid && css`width: 100%`};

  ${({ variant }) => variantStyles[variant]};

  &:active {
    box-shadow: none;
  }
`;
