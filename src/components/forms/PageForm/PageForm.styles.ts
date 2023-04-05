import styled from "@emotion/styled";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 538px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;
