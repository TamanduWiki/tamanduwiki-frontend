import styled from "@emotion/styled";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["3xl"]};
`;
