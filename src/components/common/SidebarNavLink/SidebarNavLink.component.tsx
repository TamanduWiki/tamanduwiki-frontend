import { useRouter } from "next/router";
import { IconType } from "react-icons";

import { StyledLink } from "./SidebarNavLink.styles";

interface SidebarNavLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

const SidebarNavLink = ({ href, icon: Icon, label }: SidebarNavLinkProps) => {
  const { pathname } = useRouter();

  return (
    <StyledLink href={href} selected={pathname === href}>
      <Icon size={24} /> {label}
    </StyledLink>
  )
}

export default SidebarNavLink;
