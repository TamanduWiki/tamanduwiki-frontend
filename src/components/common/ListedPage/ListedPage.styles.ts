import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;

  height: 160px;
  min-height: 160px;

  background-color: ${({ theme }) => theme.colors.neutral_400};

  @media (max-width: 538px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div<{
  imageUrl: string;
  pageUpdatedAt: string;
}>`
  border-radius: 1px; // (???) necessary for smoother image

  height: 100%;
  min-width: 160px;
  width: 160px;

  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ imageUrl, pageUpdatedAt }) =>
    `url(${imageUrl}?lastmod=${pageUpdatedAt})`};

  @media (max-width: 538px) {
    width: 100%;
    height: 160px;
  }

  box-shadow: inset 0 0 10px 1px ${({ theme }) => theme.colors.neutral_600};
`;

export const PageDescription = styled.p`
  overflow: hidden;
  width: 100%;
  max-height: 40px;
  display: inline-block;
  word-break: break-word;
`;
