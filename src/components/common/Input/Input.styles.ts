import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Field } from "formik";

export const InputContainer = styled.div<{ fluid: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({ fluid }) => fluid && css`width: 100%`};
`;

export const StyledLabel = styled.label`
  line-height: 1;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #D1D1D1;

  &::placeholder {
    color: #969696;
    font-weight: 400;
  }
`;

// this is just a copy of field, needs refactor
export const StyledField = styled(Field)`
    padding: 8px;
  border-radius: 4px;
  border: 1px solid #D1D1D1;

  &::placeholder {
    color: #969696;
    font-weight: 400;
  }
`