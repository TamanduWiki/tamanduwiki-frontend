import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "@/styles/theme";
import Image from "next/image";

export type ButtonVariant = "primary" | "secondary";

interface StyledButtonProps {
  variant: ButtonVariant;
  fluid?: boolean;
}

const variantStyles = {
  primary: css`
    background: ${theme.colors.green_500};
    color: ${theme.colors.neutral_100};

    &:hover {
      background: ${theme.colors.green_400};
    }

    &:active {
      background: ${theme.colors.green_500};
    }
  `,
  secondary: css`
    background: transparent;
    border: 1px solid ${theme.colors.neutral_300};
    color: ${theme.colors.neutral_200};

    &:active {
      border: 1px solid ${theme.colors.neutral_400};
      color: ${theme.colors.neutral_300};
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  padding: 0 ${({ theme }) => theme.spacing.md};
  border: none;
  cursor: pointer;
  transition: all 0.05s;
  line-height: 1;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  min-height: 40px;
  max-height: 40px;
  font-weight: 600;

  ${({ fluid }) => fluid && "width: 100%"};

  ${({ variant }) => variantStyles[variant]};
`;

export const SpinnerImg = styled(Image)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
