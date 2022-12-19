import { IconType } from "react-icons";

import Flex from "@/components/common/Flex";

interface Props {
  onClick: () => void;
  icon: IconType;
  label: string;
}

const SidebarNavBtn = ({ onClick, icon: Icon, label }: Props) => {
  return (
    <Flex
      color="neutral_400"
      align="center"
      padding="xs"
      gap="xs"
      width="fit-parent"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Icon size={24} /> {label}
    </Flex>
  )
}

export default SidebarNavBtn;
