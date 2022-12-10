import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Título é obrigatório"),
  content: yup.string().required("Conteúdo é obrigatóro"),
  slug: yup.string().required("Slug é obrigatóro"),
});
