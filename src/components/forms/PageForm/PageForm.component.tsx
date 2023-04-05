import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import AsyncSelect from "react-select/async";
import { FiCheckCircle } from "react-icons/fi";

import { apiCreatePage, apiListCategories, apiUpdatePage } from "@/api";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import MarkdownTextarea from "@/components/common/MakdownTextarea";
import ImageInput from "@/components/common/ImageInput";

import { handleError } from "@/utils";

import { ButtonsContainer, Container, StyledForm } from "./PageForm.styles";
import { schema } from "./PageForm.validations";

import { theme } from "@/styles/theme";

interface Values {
  title: string;
  content: string;
  slug: string;
  categoriesTitles?: string[];
  // image: any;
}

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

interface IPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  categories: { title: string }[];
}

interface Props {
  currentPage?: IPage;
}

const PageForm = ({ currentPage }: Props) => {
  const router = useRouter();

  const [image, setImage] = useState<File | undefined>();

  const onSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const imageBase64 = await getBase64(image);

      if (!!currentPage) {
        await apiUpdatePage(currentPage?.id, {
          ...values,
          categoriesTitles: values?.categoriesTitles || [],
          imageBase64,
          imageFileType: imageBase64 ? "png" : undefined, // TODO rever isso (só png)
        });

        toast.success("Página editada com sucesso", {
          icon: <FiCheckCircle size={24} color={theme.colors.green_400} />,
        });

        await router.push(`/pages/${currentPage?.slug}`);
      } else {
        const data = await apiCreatePage({
          ...values,
          imageBase64,
          imageFileType: "png", // TODO rever isso
        });

        toast.success("Página criada com sucesso", {
          icon: <FiCheckCircle size={24} color={theme.colors.green_400} />,
        });

        await router.push(`/pages/${data.slug}`);
      }
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

  return (
    <Formik
      initialValues={{
        title: currentPage?.title || "",
        content: currentPage?.content || "",
        slug: currentPage?.slug || "",
        categoriesTitles:
          currentPage?.categories.map((category) => category.title) || [],
      }}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {({ isSubmitting, setFieldValue }) => (
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
            disabled={!!currentPage}
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
              defaultValue={currentPage?.categories.map((category) => ({
                label: category.title,
                value: category.title,
              }))}
            />
          </Container>

          <ImageInput
            initialPreviewUrl={
              !!currentPage?.imageUrl &&
              `${currentPage?.imageUrl}?lastmod=${currentPage?.updatedAt}`
            }
            image={image}
            setImage={setImage}
          />

          <MarkdownTextarea
            name="content"
            placeholder="Ex.: A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real..."
          />

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

export default PageForm;
