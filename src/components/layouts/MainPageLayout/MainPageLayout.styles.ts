import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 80px auto;
  grid-template-areas: 'header' 'content';

  gap: ${({ theme }) => theme.spacing.lg};
  min-height: 100vh;
`;

export const MainHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.colors.neutral[200]};

  position: fixed;

  grid-area: header;

  @media (max-width: 1140px) {
    padding: 0 ${({ theme }) => theme.spacing.xs}
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
  padding-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 1140px) {
    padding: 0 ${({ theme }) => theme.spacing.xs}
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 1140px;

  @media (max-width: 1140px) {
    width: auto;
    max-width: 1140px;
  }
`;

export const SideSection = styled.div`
  min-width: 264px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  height: 100%;

  @media (max-width: 1140px) {
    display: none;
  }
`;

export const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.md};
`;

export const StickySideContainer = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 96px;

  display: flex;
  width: 100%;
  height: fit-content;
  gap: ${({ theme }) => theme.spacing.md};
  flex-direction: column;
`

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
