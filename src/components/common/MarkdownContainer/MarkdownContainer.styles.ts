import styled from "@emotion/styled";

const MarkdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  line-height: 1.5;

  th {
    background-color: ${({ theme }) => theme.colors.neutral_300};
    padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  }
  td {
    background-color: ${({ theme }) => theme.colors.neutral_200};
    padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${({ theme }) => theme.spacing.md};

    &:first-child {
      margin-top: unset;
    }
  }

  li {
    margin-left: 20px; // Design System Exception
  }
`

export default MarkdownContainer;
