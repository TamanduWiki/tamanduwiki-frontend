import { ButtonHTMLAttributes } from "react";

import { ButtonVariant, StyledButton } from "./Button.styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  variant?: ButtonVariant;
  fluid?: boolean;
}

const Button = ({ children, variant = "primary", fluid, ...rest }: Props) => {
  return (
    <StyledButton variant={variant} fluid={fluid} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
