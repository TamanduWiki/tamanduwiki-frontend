import styled from "@emotion/styled";

import fakeProfilePicture from "@/assets/images/blankProfile.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.neutral_400};
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};

  word-break: break-word;

  @media (max-width: 766px) {
    flex-direction: column;
  }
`;

export const ProfilePic = styled.div`
  min-width: 216px;
  min-height: 216px;
  max-width: 216px;
  max-height: 216px;
  background-image: ${`url(${fakeProfilePicture.src})`};
  background-size: cover;
  background-position: 50% 50%;
`;
