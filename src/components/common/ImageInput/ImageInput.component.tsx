import { theme } from "@/styles/theme";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiImage } from "react-icons/fi";
import Flex from "../Flex";
import {
  StyledLabelContainer,
  ImageContainer,
  Input,
  NoImg,
  AddFileBtn,
} from "./ImageInput.styles";

interface Props {
  image: File | undefined;
  setImage: Dispatch<SetStateAction<File>>;
  initialPreviewUrl: string | undefined;
}

const ImageInput = ({ image, setImage, initialPreviewUrl }: Props) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | undefined>();

  useEffect(() => {
    if (!image) {
      setImagePreviewUrl(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setImagePreviewUrl(objectUrl);

    // free memory whenever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  return (
    <Flex direction="column" gap="xs">
      <p style={{ fontWeight: 500, color: theme.colors.neutral_100 }}>
        Imagem da página
      </p>

      <StyledLabelContainer>
        <Input
          type="file"
          name="image"
          onChange={(event) => setImage(event.currentTarget.files[0])}
          style={{ width: "100%" }}
        />

        {initialPreviewUrl || imagePreviewUrl ? (
          <ImageContainer url={imagePreviewUrl || initialPreviewUrl} />
        ) : (
          <NoImg>
            <FiImage size={24} color={theme.colors.neutral_300} />
          </NoImg>
        )}

        <Flex
          color="neutral_200"
          direction="column"
          height="fit-parent"
          justify="center"
          gap="xs"
        >
          <p>
            {initialPreviewUrl || imagePreviewUrl
              ? "Arquivo selecionado"
              : "Selecione um arquivo"}
          </p>

          <AddFileBtn>Selecionar</AddFileBtn>
        </Flex>
      </StyledLabelContainer>
    </Flex>
  );
};

export default ImageInput;
