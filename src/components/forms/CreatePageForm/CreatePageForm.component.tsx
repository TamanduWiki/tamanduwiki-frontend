import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

import { apiCreatePage } from "@/api";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import TextareaInput from "@/components/common/TextareaInput";

import { handleError } from "@/utils";

import { StyledForm } from "./CreatePageForm.styles";
import { schema } from "./CreatePageForm.validations";

interface Values {
  title: string;
  content: string;
  slug: string;
  // image: any;
}

const initialValues = {
  title: "",
  content: "",
  slug: "",
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

const CreatePageForm = () => {
  const router = useRouter();

  const [image, setImage] = useState<File | undefined>();

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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {({ isSubmitting }) => (
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

          <TextareaInput
            fluid
            name="content"
            label="Conteúdo"
            placeholder="Ex.: A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real..."
            formikField
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            Imagem da página
            <input
              type="file"
              name="image"
              onChange={(event) => setImage(event.currentTarget.files[0])}
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Button
              fluid
              type="button"
              variant="secondary"
              disabled={isSubmitting}
              loading={isSubmitting}
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
