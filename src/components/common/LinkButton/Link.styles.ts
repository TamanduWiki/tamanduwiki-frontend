import styled from "@emotion/styled";
import Link from "next/link";

interface LinkButtonProps {
  variant?: "primary" | "secondary";
}

const LinkButton = styled(Link)<LinkButtonProps>`
  color: ${({ theme, variant }) =>
    !variant || variant === "primary"
      ? theme.colors.neutral_200
      : theme.colors.neutral_300};
`;

export default LinkButton;
