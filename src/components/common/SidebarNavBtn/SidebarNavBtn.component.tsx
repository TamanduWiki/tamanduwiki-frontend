import { IconType } from "react-icons";

import Flex from "@/components/common/Flex";
import IconButton from "@/components/common/IconButton";

interface Props {
  onClick: () => void;
  icon: IconType;
  label?: string;
  smaller: boolean;
}

const SidebarNavBtn = ({ onClick, icon: Icon, label, smaller }: Props) => {
  return (
    <Flex
      color="neutral_200"
      align="center"
      width="fit-parent"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <IconButton size="md" icon={Icon} variant="tertiary" />

      <div
        style={{
          visibility: smaller ? "hidden" : "visible",
          width: "100%",
        }}
      >
        {label}
      </div>
    </Flex>
  );
};

export default SidebarNavBtn;
