import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AsyncSelect from "react-select/async";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import { apiCreatePage, apiListCategories } from "@/api";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import TextareaInput from "@/components/common/TextareaInput";
import MarkdownContainer from "@/components/common/MarkdownContainer";

import { handleError } from "@/utils";

import {
  ButtonsContainer,
  Container,
  EditContentContainer,
  ImageContainer,
  ImageInputContainer,
  PreviewSection,
  PreviewSectionContainer,
  StyledForm,
} from "./CreatePageForm.styles";
import { schema } from "./CreatePageForm.validations";

interface Values {
  title: string;
  content: string;
  slug: string;
  categoriesTitles?: string[];
  // image: any;
}

const initialValues: Values = {
  title: "",
  content: "",
  slug: "",
  categoriesTitles: [],
  // image: undefined,
};

const getBase64 = async (file: File) => {
  if (!file) return undefined;

  return new Promise((resolve) => {
    // Make new FileReader
    const reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      const baseURL = reader.result;

      resolve(baseURL);
    };
  });
};

const CreatePageForm = (currentPage: any) => {
  const router = useRouter();

  const [image, setImage] = useState<File | undefined>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | undefined>();
  const [previewMd, setPreviewMd] = useState(false);

  const onSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const imageBase64 = await getBase64(image);

      const data = await apiCreatePage({
        ...values,
        imageBase64,
        imageFileType: "png",
      });

      toast.success("Página criada com sucesso");

      await router.push(`/pages/${data.slug}`);
    } catch (error) {
      handleError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const loadCategoriesOptions = async (
    searchParam: string
  ): Promise<{ label: string; value: string }[]> => {
    const options = await apiListCategories({ searchParam, page: 1 }).then(
      (response) =>
        response.categories.map((category) => ({
          label: category.title,
          value: category.title,
        }))
    );

    return options;
  };

  // create a preview as a side effect, whenever selected file is changed
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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <StyledForm>
          <Input
            fluid
            name="title"
            label="Título"
            placeholder="Ex.: Bases Matemáticas"
            formikField
          />

          <Input
            fluid
            name="slug"
            label="Slug"
            placeholder="Ex.: bases-matematicas"
            formikField
          />

          <Container>
            Categorias
            <AsyncSelect
              name="categoriesTitles"
              isMulti
              cacheOptions
              defaultOptions
              loadOptions={loadCategoriesOptions}
              onChange={(newValues) =>
                setFieldValue(
                  "categoriesTitles",
                  newValues.map(({ value }) => value)
                )
              }
            />
          </Container>

          <Container>
            Imagem da página
            <ImageInputContainer>
              <input
                type="file"
                name="image"
                onChange={(event) => setImage(event.currentTarget.files[0])}
                style={{ width: "100%" }}
              />

              {imagePreviewUrl && <ImageContainer url={imagePreviewUrl} />}
            </ImageInputContainer>
          </Container>

          <EditContentContainer previewActive={previewMd}>
            <TextareaInput
              fluid
              name="content"
              label="Conteúdo"
              placeholder="Ex.: A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real..."
              formikField
            />

            {previewMd && (
              <PreviewSectionContainer>
                <p>Preview</p>

                <PreviewSection>
                  <MarkdownContainer>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {values?.content}
                    </ReactMarkdown>
                  </MarkdownContainer>
                </PreviewSection>
              </PreviewSectionContainer>
            )}
          </EditContentContainer>

          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={() => setPreviewMd((prev) => !prev)}
          >
            {previewMd ? "Fechar preview" : "Preview markdown"}
          </Button>

          <ButtonsContainer>
            <Button
              fluid
              type="button"
              variant="secondary"
              disabled={isSubmitting}
              onClick={() => router.back()}
            >
              Voltar
            </Button>

            <Button
              fluid
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Salvar
            </Button>
          </ButtonsContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default CreatePageForm;
