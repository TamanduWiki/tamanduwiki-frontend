import Image from "next/image";

import loadingImg from "@/assets/animated/loading_balls_black.svg";

import { Container, LoadingTitle } from "./FullHeightContainer.styles";

interface Props {
  loading?: boolean;
  loadingTitle?: string;
  children?: React.ReactNode;
}

const FullHeightContainer = ({ loading, loadingTitle, children }: Props) => {
  return (
    <Container>
      {loading
        ? (
          <>
            <Image src={loadingImg as string} alt="loading_img" width={48} />

            <LoadingTitle>
              {loadingTitle || 'Carregando'}
            </LoadingTitle>
          </>
        )
        : children
      }
    </Container>
  );
};

export default FullHeightContainer;
