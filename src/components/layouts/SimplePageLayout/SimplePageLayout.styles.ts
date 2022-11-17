import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 1140px;
  padding: 48px;
  gap: 48px;

  @media (max-width: 540px) {
    padding: 48px 8px;
    justify-content: space-around;
  }
`;

export const MainAreaContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  width: 560px;
  padding: 32px;
  border-radius: 8px;

  background-color: white;

  @media (max-width: 540px) {
    width: 100%;
    padding: 24px 16px;
    gap: 24px;
  }
`;
