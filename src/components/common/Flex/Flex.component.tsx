import { CSSProperties } from "react";
import { StyledDiv, StyledDivProps } from "./Flex.styles";

interface Props extends StyledDivProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

const Flex = ({ children, ...rest }: Props) => {
  return (
    <StyledDiv {...rest}>
      {children}
    </StyledDiv>
  );
}

export default Flex;
