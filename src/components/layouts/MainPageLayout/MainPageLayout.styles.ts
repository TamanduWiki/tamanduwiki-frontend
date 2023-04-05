import styled from "@emotion/styled";

import { ThemeSpacingOption } from "@/styles/theme/spacing";

import fakeProfilePicture from "@/assets/images/blankProfile.jpg";

const SIDE_SECTION_WIDTH = "248px";
const SIDE_SECTION_COLLAPSED_WIDTH = "56px";
const HEADER_HEIGHT = "80px";
const FULL_HEADER_CONTENT_GAP: ThemeSpacingOption = "xl";
const MOBILE_HEADER_CONTENT_GAP: ThemeSpacingOption = "xs";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: ${HEADER_HEIGHT} auto;
  grid-template-areas: "header" "content";

  gap: ${({ theme }) => theme.spacing[FULL_HEADER_CONTENT_GAP]};

  min-height: 100vh;

  @media (max-width: 538px) {
    gap: ${({ theme }) => theme.spacing[MOBILE_HEADER_CONTENT_GAP]};
  }
`;

export const MainHeaderContainer = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: ${({ theme }) => theme.colors.neutral_400};
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 100;

  grid-area: header;
`;

export const MainHeader = styled.div`
  width: 1140px;
  align-items: center;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 248px 602px 16px 274px;
  grid-template-areas: "logo input gap filter";

  @media (max-width: 1198px) {
    grid-template-columns: calc(100% - 56px) 56px;
    grid-template-areas: "logo menu";
  }

  @media (max-width: 538px) {
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

  @media (max-width: 1198px) {
    width: 100%;
    max-width: 1140px;
  }

  @media (max-width: 538px) {
    // prettier-ignore
    height: calc(100vh - ${({ theme }) =>
      theme.spacing[MOBILE_HEADER_CONTENT_GAP]} - ${HEADER_HEIGHT}
  );
  }
`;

export const SideSection = styled.div<{ collapsed: boolean }>`
  width: ${({ collapsed }) =>
    collapsed ? SIDE_SECTION_COLLAPSED_WIDTH : SIDE_SECTION_WIDTH};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.neutral_400};

  @media (max-width: 1198px) {
    display: none;
  }
`;

export const ChildrenContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  height: 100%;
`;

export const MainSection = styled.div<{ sidebarCollapsed: boolean }>`
  // prettier-ignore
  width: calc(1140px - ${({ sidebarCollapsed }) =>
    sidebarCollapsed ? SIDE_SECTION_COLLAPSED_WIDTH : SIDE_SECTION_WIDTH});

  height: 100%;

  background-color: ${({ theme }) => theme.colors.neutral_500};

  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg}
    0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: 1198px) {
    width: 100%;
    margin: 0 ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 538px) {
    width: 100%;
    margin: 0 ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.xs}
      ${({ theme }) => theme.spacing.xs} 0 ${({ theme }) => theme.spacing.xs};
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 538px) {
    display: none;
  }
`;

export const HeaderInputContainer = styled.div`
  width: 100%;
  display: flex;
  grid-area: input;

  @media (max-width: 1198px) {
    display: none;
  }
`;

export const HeaderFiltersContainer = styled.div`
  width: 100%;
  grid-area: filter;

  @media (max-width: 1198px) {
    display: none;
  }
`;

export const SubmenuInputContainer = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 1198px) {
    display: flex;
  }
`;

export const SideMenuSection = styled.div<{ collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

  padding: ${({ theme, collapsed }) => theme.spacing[collapsed ? "xs" : "md"]};
  gap: ${({ theme, collapsed }) => theme.spacing[collapsed ? "xs" : "md"]};

  background-color: ${({ theme }) => theme.colors.neutral_400};
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
  background-color: rgba(0, 0, 0, 0.5);

  backdrop-filter: blur(2px);

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const SubmenuContainer = styled.div<{ collapsed: boolean }>`
  height: calc(100vh - ${HEADER_HEIGHT});
  position: absolute;
  top: ${HEADER_HEIGHT};
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.neutral_400};
  overflow-y: auto;
  width: ${({ collapsed }) => (collapsed ? "0px" : "264px")};
  transition: width 0.3s ease-in-out;
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 1200px) {
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

  background-color: ${({ theme }) => theme.colors.neutral_400};
  height: calc(100% - ${({ theme }) => theme.spacing.xl});
  width: 100%;
  flex-direction: column;

  @media (max-width: 1198px) {
    height: 100%;
    margin-bottom: 0;
  }
`;

export const LoadingTitle = styled.strong`
  max-width: 160px;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral_600};
`;

export const HamburguerMenuContainer = styled.div`
  display: none;

  @media (max-width: 1198px) {
    display: block;
  }
`;
