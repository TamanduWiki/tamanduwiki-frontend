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

export const EditContentContainer = styled.div<{ previewActive: boolean }>`
  display: grid;
  grid-template-columns: ${({ previewActive }) => previewActive ? "1fr 1fr" : "1fr"};
  grid-template-rows: 1fr;
  grid-template-areas: ${({ previewActive }) => previewActive ? "textarea preview" : "textarea"};
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: ${({ previewActive }) => previewActive ? "1fr 1fr" : "1fr"};
    grid-template-areas: 'textarea' 'preview';
    grid-template-areas: ${({ previewActive }) => previewActive ? "'textarea' 'preview'" : "textarea"};
  }
`