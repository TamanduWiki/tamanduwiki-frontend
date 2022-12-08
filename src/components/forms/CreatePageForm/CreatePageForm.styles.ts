import styled from "@emotion/styled";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 540px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
