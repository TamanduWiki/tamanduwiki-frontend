import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.neutral_100};
  border: ${({ theme }) => theme.mainBorderStyle};

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
