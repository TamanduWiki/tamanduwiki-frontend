import { Formik, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import api from "@/infra/api";

import { handleFormSubmissionError } from "@/utils";

import PasswordStrengthMeter from "./PasswordStrengthMeter";

import { StyledForm } from "./SignupForm.styles";
import { schema } from "./SignupForm.validations";

interface Values {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
}

const SignupForm = () => {
  const router = useRouter();

  const onSubmit = async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    try {
      await api.post("/users", { ...values, universityTie: 'student' })

      toast.success("Usuário criado com sucesso");

      await router.push("/login");
    } catch(error) {
      handleFormSubmissionError(error)
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
      {({ isSubmitting, values }) =>
        <StyledForm>
          <Input
            fluid
            name="firstName"
            label="Nome"
            placeholder="Ex.: João"
            formikField
          />

          <Input
            fluid
            name="lastName"
            label="Sobrenome"
            placeholder="Ex.: Silva Carvalho"
            formikField
          />

          <Input
            fluid
            name="email"
            label="E-mail"
            placeholder="Ex.: exemplo@aluno.ufabc.edu.br"
            formikField
          />

          <Input
            fluid
            name="password"
            label="Senha"
            placeholder="Ex.: bvsdUg0234$%"
            formikField
          />

          <PasswordStrengthMeter password={values.password} />

          <Button
            fluid
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Criar Conta
          </Button>
        </StyledForm>
      }
    </Formik>
  );
};

export default SignupForm;
