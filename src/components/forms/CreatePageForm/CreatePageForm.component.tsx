import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AsyncSelect from "react-select/async";

import { apiCreatePage, apiListCategories } from "@/api";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import TextareaInput from "@/components/common/TextareaInput";

import { theme } from "@/styles/theme";

import { handleError } from "@/utils";

import { EditContentContainer, StyledForm } from "./CreatePageForm.styles";
import { schema } from "./CreatePageForm.validations";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import MarkdownContainer from "@/components/common/MarkdownContainer";
import styled from "@emotion/styled";

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

const ImageContainer = styled.div<{ url: string }>`
  min-width: 240px;
  min-height: 240px;
  width: 240px;
  height: 240px;

  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ url }) => `url(${url})`};

  @media (max-width: 760px) {
    width: 100%;
  }
`;

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

const CreatePageForm = () => {
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

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            Imagem da página
            <div
              style={{
                border: `1px solid ${theme.colors.neutral_300}`,
                padding: "8px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <input
                type="file"
                name="image"
                onChange={(event) => setImage(event.currentTarget.files[0])}
                style={{ width: "100%" }}
              />

              {imagePreviewUrl && <ImageContainer url={imagePreviewUrl} />}
            </div>
          </div>

          <EditContentContainer previewActive={previewMd}>
            <TextareaInput
              fluid
              name="content"
              label="Conteúdo"
              placeholder="Ex.: A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real..."
              formikField
            />

            {previewMd && (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <p style={{ lineHeight: 1, color: theme.colors.neutral_400 }}>
                  Preview
                </p>

                <div
                  style={{
                    maxHeight: "360px",
                    height: "100%",
                    overflowX: "auto",
                    border: `2px solid ${theme.colors.neutral_200}`,
                    borderStyle: "dashed",
                    padding: "8px",
                    display: "flex",
                  }}
                >
                  <MarkdownContainer>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {values?.content}
                    </ReactMarkdown>
                  </MarkdownContainer>
                </div>
              </div>
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

          <div style={{ display: "flex", gap: "16px" }}>
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
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default CreatePageForm;
