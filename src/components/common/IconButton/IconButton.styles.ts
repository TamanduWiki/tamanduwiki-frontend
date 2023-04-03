import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "@/styles/theme";

export type IconButtonVariant = "primary" | "secondary" | "warning" | "info";

interface StyledButtonProps {
  variant: IconButtonVariant;
  size: "lg" | "md" | "sm";
}

const variantStyles = {
  primary: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.neutral_100};
  `,
  secondary: css`
    background: transparent;
    border: 1px solid ${theme.colors.neutral_300};
    color: ${theme.colors.neutral_200};
  `,
  warning: css`
    background: ${theme.colors.error};
    color: ${theme.colors.neutral_100};
  `,
  info: css`
    background: ${theme.colors.info};
    color: ${theme.colors.neutral_100};
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  cursor: pointer;
  min-height: ${({ size }) =>
    size === "sm" ? "32px" : size === "md" ? "40px" : "48px"};
  max-height: ${({ size }) =>
    size === "sm" ? "32px" : size === "md" ? "40px" : "48px"};
  min-width: ${({ size }) =>
    size === "sm" ? "32px" : size === "md" ? "40px" : "48px"};
  max-width: ${({ size }) =>
    size === "sm" ? "32px" : size === "md" ? "40px" : "48px"};

  ${({ variant }) => variantStyles[variant]};
`;
