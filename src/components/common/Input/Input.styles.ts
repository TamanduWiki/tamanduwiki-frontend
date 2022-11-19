import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const InputContainer = styled.div<{ fluid: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({ fluid }) => fluid && css`width: 100%`};
  position: relative;
`;

export const StyledLabel = styled.label`
  line-height: 1;
`;

export const ErrorMsg = styled.span`
  line-height: 1;
  color: #E04424;
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
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ errored }) => errored ? '#E04424' : '#D1D1D1'};

  &::placeholder {
    color: #969696;
    font-weight: 400;
  }
`;

// success: #67CD37
// error:   #E04424
// warning: #EBB64C
