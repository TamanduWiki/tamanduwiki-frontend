import styled from "@emotion/styled";
import Link from "next/link";

interface LinkButtonProps {
  variant?: "primary" | "secondary";
}

const LinkButton = styled(Link)<LinkButtonProps>`
  color: ${({ variant }) => !variant || variant === "primary" ? "#5AC229" : "#2f2f2f"};
`;

export default LinkButton;
