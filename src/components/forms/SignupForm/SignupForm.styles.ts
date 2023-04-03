import styled from "@emotion/styled";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["3xl"]};
`;

export const NameInputsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 538px) {
    flex-direction: column;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 538px) {
    flex-direction: column;
  }
`;
