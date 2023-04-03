import { ButtonHTMLAttributes } from "react";

import loadingWhiteImg from "@/assets/animated/loading_balls_white.svg";
import loadingBlackImg from "@/assets/animated/loading_balls_black.svg";

import { ButtonVariant, SpinnerImg, StyledButton } from "./Button.styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  fluid?: boolean;
  loading?: boolean;
  onClick?: () => void | Promise<any>;
  href?: string;
}

const spinnerImgSrc: { [key in ButtonVariant]: string } = {
  primary: loadingWhiteImg as string,
  secondary: loadingBlackImg as string,
};

const Button = ({
  children,
  variant = "primary",
  fluid,
  loading,
  href,
  ...rest
}: Props) => {
  const button = (
    <StyledButton variant={variant} fluid={fluid} {...rest}>
      {!!loading && (
        <SpinnerImg
          height={48}
          alt="button_loading"
          src={spinnerImgSrc[variant]}
        />
      )}

      {!loading && <>{children}</>}
    </StyledButton>
  );

  if (href)
    return (
      <a href={href} style={{ textDecoration: "none", width: "100%" }}>
        {button}
      </a>
    );

  return button;
};

export default Button;
