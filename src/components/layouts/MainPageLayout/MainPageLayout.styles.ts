import styled from "@emotion/styled";

import { ThemeSpacingOption } from "@/styles/theme/spacing";

import fakeProfilePicture from "@/assets/images/blankProfile.jpg";

const SIDE_SECTION_WIDTH = "264px";
const SIDE_SECTION_COLLAPSED_WIDTH = "48px";
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
`;

export const MainHeader = styled.div`
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1140px) {
    padding-right: ${({ theme }) => theme.spacing.xs};
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

export const Content = styled.div<{ sidebarCollapsed: boolean }>`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 1140px;
  // prettier-ignore
  height: calc(100vh - ${({ theme }) =>
    theme.spacing[FULL_HEADER_CONTENT_GAP]} - ${HEADER_HEIGHT}
  );
  gap: ${({ theme, sidebarCollapsed }) =>
    theme.spacing[sidebarCollapsed ? "lg" : "xl"]};

  @media (max-width: 1140px) {
    width: 100%;
    max-width: 1140px;
    height: calc(100vh - ${HEADER_HEIGHT});
  }
`;

export const SideSection = styled.div<{ collapsed: boolean }>`
  min-width: ${({ collapsed }) =>
    collapsed ? SIDE_SECTION_COLLAPSED_WIDTH : SIDE_SECTION_WIDTH};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
  @media (max-width: 1140px) {
    display: none;
  }
`;

export const ChildrenContainer = styled.div`
  overflow-y: auto;

  height: 100%;

  @media (max-width: 1140px) {
    padding: 8px 8px 0 8px;
  }
`;

export const MainSection = styled.div<{ sidebarCollapsed: boolean }>`
  // prettier-ignore
  width: calc(1140px - ${({ sidebarCollapsed }) =>
    sidebarCollapsed ? SIDE_SECTION_COLLAPSED_WIDTH : SIDE_SECTION_WIDTH});

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

  @media (max-width: 760px) {
    display: flex;
  }
`;

export const SideMenuSection = styled.div<{ collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ collapsed }) => (collapsed ? "min-content" : "100%")};

  padding: ${({ theme, collapsed }) => theme.spacing[collapsed ? "xs" : "md"]};
  gap: ${({ theme, collapsed }) => theme.spacing[collapsed ? "xs" : "md"]};

  background-color: ${({ theme }) => theme.colors.neutral_100};
`;

export const CollapseSidebarButtonContainer = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.neutral_400};
  }
`;

export const ProfilePic = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(${fakeProfilePicture.src});
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT});
  width: 100vw;
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.neutral_700};
  background-color: rgba(0, 0, 0, 0.5);

  backdrop-filter: blur(2px);

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
  width: ${({ collapsed }) => (collapsed ? "0px" : "280px")};
  transition: width 0.3s ease-in-out;
  white-space: nowrap;

  @media (min-width: 1140px) {
    display: none;
  }
`;

export const SubmenuSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

export const FullHeightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.neutral_100};
  height: calc(100% - ${({ theme }) => theme.spacing.xl});
  width: 100%;
  flex-direction: column;

  @media (max-width: 1140px) {
    height: 100%;
    margin-bottom: 0;
  }
`;

export const LoadingTitle = styled.strong`
  @keyframes loading-title-animation {
    0%,
    100% {
      color: ${({ theme }) => theme.colors.neutral_400};
    }
    50% {
      color: ${({ theme }) => theme.colors.neutral_600};
    }
  }

  animation: infinite loading-title-animation 1s;
`;

export const HamburguerMenuContainer = styled.div`
  display: none;

  @media (max-width: 1140px) {
    display: block;
  }
`;
