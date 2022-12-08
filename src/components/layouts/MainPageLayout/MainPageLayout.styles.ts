import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 80px auto;
  grid-template-areas: 'header' 'content';

  gap: ${({ theme }) => theme.spacing.sm};

  min-height: 100vh;
`;

export const MainHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 100;

  grid-area: header;

  @media (max-width: 1140px) {
  }
`;

export const MainHeader = styled.div`
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};

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
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 1140px;
  height: calc(100vh - 12px - 80px);

  background-color: ${({ theme }) => theme.colors.neutral_100};

  @media (max-width: 1140px) {
    width: 100%;
    max-width: 1140px;
  }
`;

const sideSectionWidth = "264px";

export const SideSection = styled.div`
  min-width: ${sideSectionWidth};
  display: flex;
  flex-direction: column;
  height: 100%;

  border-right: 1px solid ${({ theme }) => theme.colors.neutral_200};

  @media (max-width: 1140px) {
    display: none;
  }
`;

export const ChildrenContainer = styled.div`
  overflow-y: auto;

  height: 100%;
`

export const MainSection = styled.div<{ withBottomComponent: boolean }>`
  width: calc(1140px - ${sideSectionWidth});

  height: ${({ withBottomComponent }) => withBottomComponent ? 'calc(100% - 36px)' : '100%'};

  @media (max-width: 1140px) {
    width: 100%;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

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
