import { BadgeContainer } from "./Badge.styles";

interface Props {
  children: React.ReactNode;
}

const Badge = ({ children }: Props) => {
  return (
    <BadgeContainer>
      {children}
    </BadgeContainer>
  );
};

export default Badge;
