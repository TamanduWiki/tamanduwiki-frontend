import styled from "@emotion/styled";

import { ThemeSpacingOption } from "@/styles/theme/spacing";

import fakeProfilePicture from "@/assets/images/ash.jpg";

const SIDE_SECTION_WIDTH = "264px";
const HEADER_HEIGHT = "80px";
const FULL_HEADER_CONTENT_GAP: ThemeSpacingOption = "xl";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: ${HEADER_HEIGHT} auto;
  grid-template-areas: "header" "content";

  gap: ${({ theme }) => theme.spacing[FULL_HEADER_CONTENT_GAP]};

  min-height: 100vh;

  @media (max-width: 1140px) {
    gap: 0;
  }
`;

export const MainHeaderContainer = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: ${({ theme }) => theme.colors.neutral_100};
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 100;

  grid-area: header;

  border: ${({ theme }) => theme.mainBorderStyle};
`;

export const MainHeader = styled.div`
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1140px) {
    padding-right: ${({ theme }) => theme.spacing.md};
  }

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
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 1140px;
  height: calc(100vh - ${({ theme }) => theme.spacing[FULL_HEADER_CONTENT_GAP]} - ${HEADER_HEIGHT});
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1140px) {
    width: 100%;
    max-width: 1140px;
    height: calc(100vh - ${HEADER_HEIGHT});
  }
`;

export const SideSection = styled.div`
  min-width: ${SIDE_SECTION_WIDTH};
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 1140px) {
    display: none;
  }

  > div {
    border: ${({ theme }) => theme.mainBorderStyle};
  }
`;

export const ChildrenContainer = styled.div`
  overflow-y: auto;

  height: 100%;
`;

export const MainSection = styled.div`
  width: calc(1140px - ${SIDE_SECTION_WIDTH});

  height: 100%;

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
  display: flex;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const SubmenuInputContainer = styled.div`
  width: 100%;
  display: none;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: ${({ theme }) => theme.mainBorderStyle};
  border-left: ${({ theme }) => theme.mainBorderStyle};
  border-right: ${({ theme }) => theme.mainBorderStyle};

  @media (max-width: 760px) {
    display: flex;
  }
`;

export const SubmenuButtonContainer = styled.div`
  display: none;

  @media (max-width: 1140px) {
    display: flex;
    height: 48px;
    width: 48px;
    align-items: center;
    justify-content: center;
  }
`;

export const SideMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};

  background-color: ${({ theme }) => theme.colors.neutral_100};
`;

export const ProfilePic = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: ${`url(${fakeProfilePicture.src})`};
  background-size: cover;
  background-position: 55% 50%;
`;

export const Backdrop = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT});
  width: 100vw;
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.neutral_700};
  opacity: 0.6;

  @media (min-width: 1140px) {
    display: none;
  }
`;

export const SubmenuContainer = styled.div<{ collapsed: boolean }>`
  height: calc(100vh - ${HEADER_HEIGHT});
  position: absolute;
  top: ${HEADER_HEIGHT};
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.neutral_100};
  overflow-y: auto;
  width: ${({ collapsed }) => collapsed ? '0px' : '280px'};
  transition: width 0.3s ease-in-out;
  white-space: nowrap;
  border-left: ${({ theme }) => theme.mainBorderStyle};

  @media (min-width: 1140px) {
    display: none;
  }
`

export const SubmenuSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
  border-bottom: ${({ theme }) => theme.mainBorderStyle};
  border-left: ${({ theme }) => theme.mainBorderStyle};
  border-right: ${({ theme }) => theme.mainBorderStyle};
`;
