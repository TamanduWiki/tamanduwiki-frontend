import styled from "@emotion/styled";

export const PasswordRuleContainer = styled.div<{ obeyed: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, obeyed }) =>
    obeyed ? theme.colors.success : theme.colors.neutral_100};

  p {
    line-height: 1;
  }

  svg {
    margin-top: 1px;
  }
`;
