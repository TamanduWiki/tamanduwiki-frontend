import styled from "@emotion/styled";
import Link from "next/link";

export const StyledLink = styled(Link)<{ selected: boolean }>`
  text-decoration: none;
  min-width: 100%;
  color: ${({ selected, theme }) =>
    theme.colors[selected ? "primary" : "neutral_400"]};
  font-weight: ${({ selected }) => (selected ? 600 : 400)};

  svg {
    color: ${({ selected, theme }) =>
      theme.colors[selected ? "primary" : "neutral_400"]};
  }
`;

export const Container = styled.div<{ smaller: boolean }>`
  padding: ${({ theme, smaller }) => theme.spacing[smaller ? "0" : "xs"]};
  display: flex;
  min-width: 100%;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;
