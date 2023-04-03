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
`;

export const Container = styled.div<{ smaller: boolean }>`
  padding: ${({ theme, smaller }) => theme.spacing[smaller ? "0" : "xs"]};
  display: flex;
  min-width: 100%;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;
