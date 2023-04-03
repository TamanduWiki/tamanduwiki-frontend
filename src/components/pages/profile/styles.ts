import styled from "@emotion/styled";

import fakeProfilePicture from "@/assets/images/blankProfile.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral_500};
  position: relative;
  gap: ${({ theme }) => theme.spacing.md};
  // prettier-ignore
  padding: ${({ theme }) => theme.spacing["2xl"]} ${({ theme }) =>
    theme.spacing.sm} ${({ theme }) => theme.spacing.lg} ${({ theme }) =>
    theme.spacing.sm};
`;

export const ProfilePic = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-image: ${`url(${fakeProfilePicture.src})`};
  background-size: cover;
  background-position: 50% 50%;
`;

export const PicContainer = styled.div`
  width: 172px;
  height: 172px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral_500};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -136px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  border: 2px solid ${({ theme }) => theme.colors.neutral_200};
`;

export const Banner = styled.div`
  height: 128px;
  border-top: 2px solid #dedede;
  border-left: 2px solid #dedede;
  border-right: 2px solid #dedede;
`;
