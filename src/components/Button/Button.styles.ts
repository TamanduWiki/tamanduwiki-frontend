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
  box-shadow: 2px 2px 8px 1px #dedede;
  border: none;
  cursor: pointer;
  transition: all 0.05s;

  ${({ fluid }) => fluid && css`width: 100%`};

  ${({ variant }) => variantStyles[variant]};

  &:active {
    box-shadow: none;
  }
`;
