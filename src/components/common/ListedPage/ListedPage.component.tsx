import Flex from "@/components/common/Flex";
import Badge from "@/components/common/Badge";

import {
  ImageContainer,
  PageContainer,
  PageDescription,
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
      <ImageContainer imageUrl={imageUrl} pageUpdatedAt={pageLastUpdatedAt} />

      <Flex
        gap="xs"
        direction="column"
        width="fit-parent"
        height="fit-parent"
        justify="space-between"
        padding="md"
        style={{ overflowY: "auto" }}
      >
        <Flex direction="column" width="fit-parent" gap="xs">
          <h3>{title}</h3>

          <PageDescription>{description}</PageDescription>
        </Flex>

        <Flex width="fit-parent" gap="md" style={{ flexWrap: "wrap" }}>
          {badges.map((badgeTitle) => (
            <Badge key={badgeTitle}>{badgeTitle}</Badge>
          ))}
        </Flex>
      </Flex>
    </PageContainer>
  );
};

export default ListedPage;
