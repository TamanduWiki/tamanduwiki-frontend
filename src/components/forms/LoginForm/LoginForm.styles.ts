import styled from "@emotion/styled";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 540px) {
    gap: 16px;
  }
`;
