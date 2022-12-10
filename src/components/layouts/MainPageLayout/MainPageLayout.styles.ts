import { ThemeSpacingOption } from "@/styles/theme/spacing";
import styled from "@emotion/styled";

import fakeProfilePicture from "@/assets/images/ash.jpg";

const SIDE_SECTION_WIDTH = "264px";
const HEADER_HEIGHT = "80px";
const FULL_HEADER_CONTENT_GAP: ThemeSpacingOption = "xl";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: ${HEADER_HEIGHT} auto;
  grid-template-areas: 'header' 'content';

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

  border: ${({ theme }) => `1px solid #dedede`}; // Design System Exception
`;

export const MainHeader = styled.div`
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1140px) {
    padding-right: 16px;
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

  @media (max-width: 1140px) {
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 1140px;
  height: calc(100vh - ${({ theme }) => theme.spacing[FULL_HEADER_CONTENT_GAP]} - ${HEADER_HEIGHT});
  gap: 32px;

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
    border: ${({ theme }) => `1px solid #dedede`}; // Design System Exception
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

export const HeaderSubMenu = styled.div`
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
  background-color: ${({ theme }) => theme.colors.neutral_100};
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;
`;

export const ProfilePic = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: ${`url(${fakeProfilePicture.src})`};
  background-size: cover;
  background-position: 55% 50%;
`
