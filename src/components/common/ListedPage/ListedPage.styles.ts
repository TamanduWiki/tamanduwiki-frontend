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
    height: 356px;
    flex-direction: column;
  }
`;

export const PageDescription = styled.p`
  overflow: hidden;
  width: 100%;
  max-height: 40px;
  display: inline-block;
  word-break: break-word;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral_200};
`;

export const PageTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral_100};
`;

export const PageData = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;

  @media (max-width: 538px) {
    height: 204px;
  }
`;

export const ImageContainerContainer = styled.div`
  width: 160px;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.neutral_500};
  margin: ${({ theme }) => theme.spacing.xxs};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 538px) {
    height: 144px;
    width: calc(100% - 8px);
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
    min-width: 144px;
    width: 144px;
    height: 144px;
  }

  box-shadow: inset 0 0 10px 1px ${({ theme }) => theme.colors.neutral_600};
`;
