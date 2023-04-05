import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const InputContainer = styled.div<{ fluid: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ fluid }) =>
    fluid &&
    css`
      width: 100%;
    `};
  position: relative;
  height: 100%;
`;

export const ErrorMsg = styled.span`
  line-height: 1;
  color: ${({ theme }) => theme.colors.error};
  white-space: nowrap;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const StyledTextarea = styled.textarea<{ errored?: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs};

  color: ${({ theme }) => theme.colors.neutral_200};

  border: none;

  ${({ theme, errored }) =>
    errored && `border: 1px solid ${theme.colors.error}`};

  background-color: ${({ theme }) => theme.colors.neutral_600};

  resize: none;
  height: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral_300};
    font-weight: 400;
  }
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Tab = styled.div<{ selected: boolean }>`
  cursor: pointer;
  font-weight: ${({ selected }) => (selected ? 500 : 400)};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.neutral_100 : theme.colors.neutral_200};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.neutral_300 : "transparent"};

  border-left: 1px solid ${({ theme }) => theme.colors.neutral_300};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral_300};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral_300};

  // prettier-ignore
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) =>
    theme.spacing.xs};
`;

export const PreviewSection = styled.div`
  max-height: 360px;
  height: 100%;
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.neutral_300};
  min-height: 301px;
  padding: 8px;
  display: flex;
`;

export const PreviewSectionContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  > p {
    line-height: 1;
    color: ${({ theme }) => theme.colors.neutral_400};
  }
`;
