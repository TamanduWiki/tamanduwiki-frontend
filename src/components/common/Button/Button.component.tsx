import Image from 'next/image';
import { ButtonHTMLAttributes } from "react";

import loadingWhiteImg from '@/assets/animated/loading_balls_white.svg';
import loadingBlackImg from '@/assets/animated/loading_balls_black.svg';

import { ButtonVariant, StyledButton } from "./Button.styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "lg" | "md";
  fluid?: boolean;
  loading?: boolean;
}

const Button = ({ children, variant = "primary", fluid, size = "lg", loading, ...rest }: Props) => {
  return (
    <StyledButton variant={variant} fluid={fluid} size={size} {...rest} style={{ width: loading && (fluid ? '100%' : '64px') }}>
      {loading
        ? (
          <Image
            height={48}
            alt="button_loading"
            src={variant === "primary" || variant === "warning" ? loadingWhiteImg : loadingBlackImg}
            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto' }}
          />
        )
        : children
      }
    </StyledButton>
  );
}

export default Button;
