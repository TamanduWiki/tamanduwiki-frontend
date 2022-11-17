import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 80px auto;
  grid-template-areas: 'header' 'content';

  gap: 24px;
  min-height: 100vh;
`;

export const MainHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px 1px #dedede;

  position: fixed;

  grid-area: header;

  @media (max-width: 1140px) {
    padding: 0 8px;
  }
`;

export const MainHeader = styled.div`
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 760px) {
    gap: 0;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: content;

  @media (max-width: 1140px) {
    padding: 0 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 24px;
  max-width: 1140px;
`;

export const SideSection = styled.div`
  min-width: 264px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 1140px) {
    display: none;
  }
`;

export const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const MockContainer1 = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: white;

  height: 72px;
`;

export const MockContainer2 = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: white;

  height: 184px;
`;

export const MockContainer3 = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: white;

  height: 284px;
`;

export const MockContainer4 = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: white;

  padding: 16px;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const HeaderInputContainer = styled.div`
  width: 100%;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const HeaderSubMenu = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: flex;
    height: 48px;
    width: 48px;
    align-items: center;
    justify-content: center;
  }
`;
