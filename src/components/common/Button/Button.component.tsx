import { ButtonHTMLAttributes } from "react";

import { ButtonVariant, StyledButton } from "./Button.styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "lg" | "md";
  fluid?: boolean;
}

const Button = ({ children, variant = "primary", fluid, size = "lg", ...rest }: Props) => {
  return (
    <StyledButton variant={variant} fluid={fluid} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
