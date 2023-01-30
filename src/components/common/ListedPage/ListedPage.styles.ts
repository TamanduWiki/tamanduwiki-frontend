import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;

  height: 160px;
  min-height: 160px;

  background-color: ${({ theme }) => theme.colors.neutral_100};

  @media (max-width: 540px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div<{ imageUrl: string }>`
  border-radius: 1px; // (???) necessary for smoother image

  height: 100%;
  min-width: 160px;
  width: 160px;

  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  @media (max-width: 540px) {
    width: 100%;
    height: 160px;
  }
`;

export const PageDescription = styled.p`
  overflow: hidden;
  width: 100%;
  max-height: 40px;
  display: inline-block;
  word-break: break-word;
`;
