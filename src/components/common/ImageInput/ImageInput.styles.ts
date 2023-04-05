import styled from "@emotion/styled";

export const StyledLabelContainer = styled.label`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.neutral_300};
  width: 100%;

  p {
    font-weight: 500;
  }
`;

export const ImageContainer = styled.div<{ url: string }>`
  min-width: 160px;
  min-height: 160px;
  width: 160px;
  height: 160px;

  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ url }) => `url(${url})`};

  @media (max-width: 538px) {
    min-width: 100px;
    min-height: 100px;
    width: 100px;
    height: 100px;
  }
`;

export const NoImg = styled.div`
  min-width: 160px;
  min-height: 160px;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${({ theme }) => theme.colors.neutral_300};
  background-color: ${({ theme }) => theme.colors.neutral_600};

  @media (max-width: 538px) {
    min-width: 100px;
    min-height: 100px;
    width: 100px;
    height: 100px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: none;
`;

export const AddFileBtn = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.neutral_300};
  color: ${({ theme }) => theme.colors.neutral_200};
  font-size: 14px;
  cursor: pointer;
`;
