import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const InputContainer = styled.div<{ fluid: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  ${({ fluid }) =>
    fluid &&
    css`
      width: 100%;
    `};
  position: relative;
`;

export const StyledLabel = styled.label`
  line-height: 1;
  color: ${({ theme }) => theme.colors.neutral_100};
  font-weight: 500;
`;

export const ErrorMsg = styled.span`
  line-height: 1;
  color: ${({ theme }) => theme.colors.error};
  white-space: nowrap;
`;

export const StyledInput = styled.input<{ errored?: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs};

  color: ${({ theme }) => theme.colors.neutral_200};
  width: 100%;

  border: none;

  ${({ theme, errored }) =>
    errored && `border: 1px solid ${theme.colors.error}`};

  background-color: ${({ theme }) => theme.colors.neutral_600};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral_300};
    font-weight: 400;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
