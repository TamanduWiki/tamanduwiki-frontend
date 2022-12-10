import { Formik, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import api from "@/infra/api";

import { handleError } from "@/utils";

import { StyledForm } from "./CreatePageForm.styles";
import { schema } from "./CreatePageForm.validations";
import { useState } from "react";
import TextareaInput from "@/components/common/TextareaInput";

interface Values {
  title: string;
  content: string;
  slug: string;
  // image: any;
}

const initialValues = {
  title: '',
  content: '',
  slug: '',
  // image: undefined,
}

const getBase64 = async (file: File) => {
  if (!file) return undefined;

  return new Promise(resolve => {
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

  const onSubmit = async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    try {
      const imageBase64 = await getBase64(image);

      const data = await api
        .post<{ slug: string }>("/pages", { ...values, imageBase64, imageFileType: 'png' })
        .then(({ data }) => data);

      toast.success("Página criada com sucesso");

      await router.push(`/pages/${data.slug}`);
    } catch(error) {
      handleError(error)
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
      {({ isSubmitting }) =>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            Imagem da página
            <input
              type="file"
              name="image"
              onChange={event => setImage(event.currentTarget.files[0])}
            />
          </div>

          <Button
            fluid
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Criar Página
          </Button>
        </StyledForm>
      }
    </Formik>
  );
};

export default CreatePageForm;
