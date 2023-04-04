import { useRouter } from "next/router";
import { IconType } from "react-icons";

import IconButton from "@/components/common/IconButton";

import { Container, StyledLink } from "./SidebarNavLink.styles";

interface SidebarNavLinkProps {
  href: string;
  icon: IconType;
  label: string;
  smaller: boolean;
}

const SidebarNavLink = ({
  href,
  icon: Icon,
  label,
  smaller,
}: SidebarNavLinkProps) => {
  const { pathname } = useRouter();

  return (
    <StyledLink href={href} selected={pathname === href}>
      <Container smaller={smaller}>
        <IconButton
          size="md"
          icon={Icon}
          variant="tertiary"
          onClick={() => {}}
        />{" "}
        <div
          style={{
            visibility: smaller ? "hidden" : "visible",
          }}
        >
          {label}
        </div>
      </Container>
    </StyledLink>
  );
};

export default SidebarNavLink;
