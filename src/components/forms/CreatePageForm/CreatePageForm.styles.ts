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
  grid-template-columns: ${({ previewActive }) =>
    previewActive ? "1fr 1fr" : "1fr"};
  grid-template-rows: 1fr;
  grid-template-areas: ${({ previewActive }) =>
    previewActive ? "textarea preview" : "textarea"};
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: ${({ previewActive }) =>
      previewActive ? "1fr 1fr" : "1fr"};
    grid-template-areas: "textarea" "preview";
    grid-template-areas: ${({ previewActive }) =>
      previewActive ? "'textarea' 'preview'" : "textarea"};
  }
`;

export const PreviewSection = styled.div`
  max-height: 360px;
  height: 100%;
  overflow-x: auto;
  border: 2px solid ${({ theme }) => theme.colors.neutral_200};
  border-style: dashed;
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

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const ImageInputContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral_300};
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImageContainer = styled.div<{ url: string }>`
  min-width: 240px;
  min-height: 240px;
  width: 240px;
  height: 240px;

  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ url }) => `url(${url})`};

  @media (max-width: 760px) {
    width: 100%;
  }
`;
