import { useState } from "react";
import { IconType } from "react-icons";
// import { Tooltip } from "react-tooltip";

import Flex from "@/components/common/Flex";
import IconButton from "@/components/common/IconButton";

import { IconButtonContainer } from "./SidebarNavBtn.styles";

interface Props {
  onClick: () => void;
  icon: IconType;
  label: string;
  smaller: boolean;
}

const SidebarNavBtn = ({ onClick, icon: Icon, label, smaller }: Props) => {
  // const [tooltipOpen, setTooltipOpen] = useState(false);

  if (smaller) {
    return (
      <IconButtonContainer
      // onMouseEnter={() => setTooltipOpen(true)}
      // onMouseLeave={() => setTooltipOpen(false)}
      // id={`sidebarnavbtn-${label}`}
      // data-tooltip-content={label}
      >
        <IconButton
          size="sm"
          icon={Icon}
          variant="secondary"
          onClick={() => {
            onClick();
            // setTooltipOpen(false);
          }}
        />

        {/* <Tooltip
          anchorId={`sidebarnavbtn-${label}`}
          place="left"
          style={{ fontWeight: 600, borderRadius: "0px" }}
          isOpen={tooltipOpen}
        /> */}
      </IconButtonContainer>
    );
  }

  return (
    <Flex
      color="neutral_400"
      align="center"
      padding="xs"
      gap="xs"
      width="fit-parent"
      style={{ cursor: "pointer" }}
      onClick={() => {
        onClick();
        // setTooltipOpen(false);
      }}
    >
      <Icon size={24} /> {label}
    </Flex>
  );
};

export default SidebarNavBtn;
