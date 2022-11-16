import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface StyledButtonProps {
  variant: ButtonVariant;
  fluid?: boolean;
}

// TODO use Design System tokens
const variantStyles = {
  primary: css`background: #5AC229`,
  secondary: css`background: #E9E9E9`,
  tertiary: css`border: 1px solid #E9E9E9`, // TODO fix border color
};

// TODO use Design System tokens
export const StyledButton = styled.button<StyledButtonProps>`
  padding: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  ${({ fluid }) => fluid && css`width: 100%`};

  ${({ variant }) => variantStyles[variant]};
`;
