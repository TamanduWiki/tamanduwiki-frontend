import { theme } from "@/styles/theme";
import ReactSimpleTooltip from "react-simple-tooltip";

interface Props {
  children: React.ReactNode;
  content: string;
  placement?: "left" | "top" | "right" | "bottom";
}

const Tooltip = ({ content, placement = "top", children }: Props) => {
  return (
    <ReactSimpleTooltip
      content={
        <div style={{ width: "max-content", fontWeight: "500" }}>{content}</div>
      }
      padding={8}
      background={theme.colors.neutral_600}
      border={theme.colors.neutral_700}
      fontSize="0.875rem"
      zIndex={1000}
      placement={placement}
    >
      {children}
    </ReactSimpleTooltip>
  );
};

export default Tooltip;
