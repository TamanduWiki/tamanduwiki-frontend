import { Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { apiSignup } from "@/api";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import { handleError } from "@/utils";

import PasswordStrengthMeter from "./PasswordStrengthMeter";
import {
  ButtonsContainer,
  NameInputsContainer,
  StyledForm,
} from "./SignupForm.styles";
import { schema } from "./SignupForm.validations";
import Flex from "@/components/common/Flex";
import { FiCheckCircle } from "react-icons/fi";
import { theme } from "@/styles/theme";

interface Values {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const SignupForm = () => {
  const router = useRouter();

  const onSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      await apiSignup({ ...values, universityTie: "student" });

      toast.success(
        "Usuário criado com sucesso, por favor verifique seu e-mail para confirmar a conta.",
        { icon: <FiCheckCircle size={24} color={theme.colors.green_400} /> }
      );

      await router.push("/login");
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
      {({ isSubmitting, values }) => (
        <StyledForm>
          <Flex gap="md" direction="column">
            <NameInputsContainer>
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
            </NameInputsContainer>

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
          </Flex>

          <ButtonsContainer>
            <Button
              fluid
              type="button"
              disabled={isSubmitting}
              variant="secondary"
              href="/login"
            >
              Voltar
            </Button>

            <Button
              fluid
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Criar Conta
            </Button>
          </ButtonsContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignupForm;
