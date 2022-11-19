import styled from "@emotion/styled";

export const PasswordRuleContainer = styled.div<{ obeyed: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ obeyed }) => obeyed ? '#54a52f' : '#8c8c8c'};

  p {
    line-height: 1.5;
  }
`;
