import { PageTitleHeader } from "./PageTitle.styles";

interface Props {
  children: React.ReactNode;
}

const PageTitle = ({ children }: Props) => {
  return <PageTitleHeader>{children}</PageTitleHeader>;
};

export default PageTitle;
