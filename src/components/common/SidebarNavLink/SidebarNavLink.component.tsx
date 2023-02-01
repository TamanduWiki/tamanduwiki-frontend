import { useRouter } from "next/router";
import { IconType } from "react-icons";
// import { Tooltip } from "react-tooltip";

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

  if (smaller) {
    return (
      <StyledLink
        href={href}
        selected={pathname === href}
        // id={`iconbutton-${label}-${href}`}
        // data-tooltip-content={label}
      >
        <Container smaller={smaller}>
          <IconButton
            size="sm"
            icon={Icon}
            variant="secondary"
            onClick={() => {}}
          />
        </Container>

        {/* <Tooltip
          anchorId={`iconbutton-${label}-${href}`}
          place="left"
          style={{ fontWeight: 600, borderRadius: "0px" }}
        /> */}
      </StyledLink>
    );
  }

  return (
    <StyledLink href={href} selected={pathname === href}>
      <Container smaller={smaller}>
        <Icon size={24} style={{ flexShrink: "0" }} /> {label}
      </Container>
    </StyledLink>
  );
};

export default SidebarNavLink;
