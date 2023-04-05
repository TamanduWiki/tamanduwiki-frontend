import { IconType } from "react-icons";
import { IconButtonVariant, StyledButton } from "./IconButton.styles";

interface Props {
  icon: IconType;
  variant?: IconButtonVariant;
  size?: "lg" | "md" | "sm";
  onClick?: () => void | Promise<any>;
}

const IconButton = ({
  icon: Icon,
  variant = "primary",
  size = "md",
  onClick,
}: Props) => {
  return (
    <StyledButton
      style={{ flexShrink: 0 }}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      <Icon size={24} />
    </StyledButton>
  );
};

export default IconButton;
