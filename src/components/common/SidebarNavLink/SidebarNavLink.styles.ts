import styled from "@emotion/styled";
import Link from "next/link";

export const StyledLink = styled(Link)<{ selected: boolean }>`
  display: flex;
  text-decoration: none;
  min-width: 100%;
  align-items: center;
  color: ${({ selected, theme }) => theme.colors[selected ? 'primary' : 'neutral_400']};
  padding: ${({ theme }) => theme.spacing.xs};
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ selected }) => selected ? 600 : 400};
`;
