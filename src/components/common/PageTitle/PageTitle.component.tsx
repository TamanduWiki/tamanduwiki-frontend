import { PageTitleContainer, PageTitleHeader } from "./PageTitle.styles";

interface Props {
  noContainer?: boolean;
  children: React.ReactNode;
}

const PageTitle = ({ noContainer, children }: Props) => {
  if (noContainer) {
    return (
      <PageTitleHeader>
        {children}
      </PageTitleHeader>
    )
  }

  return (
    <PageTitleContainer>
      <PageTitleHeader>
        {children}
      </PageTitleHeader>
    </PageTitleContainer>
  )
}

export default PageTitle;
