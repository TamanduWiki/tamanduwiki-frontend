import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const InputContainer = styled.div<{ fluid: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxs};
  ${({ fluid }) => fluid && css`width: 100%`};
  position: relative;
`;

export const StyledLabel = styled.label`
  line-height: 1;
`;

export const ErrorMsg = styled.span`
  line-height: 1;
  color: ${({ theme }) => theme.colors.error};
  white-space: nowrap;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const StyledInput = styled.input<{ errored?: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: 1px solid ${({ theme, errored }) => errored
    ? theme.colors.error
    : theme.colors.neutral[300]
  };

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[400]};
    font-weight: 400;
  }
`;
