import styled from "@emotion/styled";
import Link from "next/link";

interface LinkButtonProps {
  variant?: "primary" | "secondary";
}

const LinkButton = styled(Link)<LinkButtonProps>`
  color: ${({ theme, variant }) => !variant || variant === "primary" ? theme.colors.primary : theme.colors.neutral_700};
`;

export default LinkButton;
