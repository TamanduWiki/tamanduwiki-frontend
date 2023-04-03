import { IconType } from "react-icons";

import Flex from "@/components/common/Flex";
import IconButton from "@/components/common/IconButton";

interface Props {
  onClick: () => void;
  icon: IconType;
  label: string;
  smaller: boolean;
}

const SidebarNavBtn = ({ onClick, icon: Icon, label, smaller }: Props) => {
  if (smaller) {
    return (
      <IconButton
        size="sm"
        icon={Icon}
        variant="secondary"
        onClick={() => {
          onClick();
        }}
      />
    );
  }

  return (
    <Flex
      color="neutral_200"
      align="center"
      padding="xs"
      gap="xs"
      width="fit-parent"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <Icon size={24} /> {label}
    </Flex>
  );
};

export default SidebarNavBtn;
