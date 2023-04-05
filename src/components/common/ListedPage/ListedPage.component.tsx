import Flex from "@/components/common/Flex";
import Badge from "@/components/common/Badge";

import {
  ImageContainer,
  ImageContainerContainer,
  PageContainer,
  PageData,
  PageDescription,
  PageTitle,
} from "./ListedPage.styles";

interface Props {
  onClick: () => void;
  imageUrl: string;
  title: string;
  description: string;
  badges: string[];
  pageLastUpdatedAt: string;
}

const ListedPage = ({
  badges,
  description,
  imageUrl,
  onClick,
  title,
  pageLastUpdatedAt,
}: Props) => {
  return (
    <PageContainer onClick={onClick}>
      <ImageContainerContainer>
        <ImageContainer imageUrl={imageUrl} pageUpdatedAt={pageLastUpdatedAt} />
      </ImageContainerContainer>

      <PageData>
        <Flex direction="column" width="fit-parent" gap="xs">
          <PageTitle>{title}</PageTitle>

          <PageDescription>{description}</PageDescription>
        </Flex>

        <Flex width="fit-parent" gap="xs" style={{ flexWrap: "wrap" }}>
          {badges.map((badgeTitle) => (
            <Badge key={badgeTitle}>{badgeTitle}</Badge>
          ))}
        </Flex>
      </PageData>
    </PageContainer>
  );
};

export default ListedPage;
