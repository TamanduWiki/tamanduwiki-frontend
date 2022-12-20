import styled from "@emotion/styled";

export const PasswordRuleContainer = styled.div<{ obeyed: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, obeyed }) =>
    obeyed ? theme.colors.success : theme.colors.neutral_500};

  p {
    line-height: 1.5;
  }
`;
