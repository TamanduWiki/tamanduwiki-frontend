import styled from "@emotion/styled";
import Link from "next/link";

export const StyledLink = styled(Link)<{ selected: boolean }>`
  text-decoration: none;
  min-width: 100%;
  color: ${({ selected, theme }) =>
    theme.colors[selected ? "primary" : "neutral_200"]};
  font-weight: ${({ selected }) => (selected ? 600 : 400)};
  background-color: ${({ selected, theme }) =>
    selected && theme.colors.primary15p};

  svg {
    color: ${({ selected, theme }) =>
      theme.colors[selected ? "primary" : "neutral_200"]};
  }

  transition: width 500ms;
`;

export const Container = styled.div<{ smaller: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ smaller }) => (smaller ? "40px" : "216px")};
  position: relative;

  overflow: hidden;
  white-space: nowrap;
`;
