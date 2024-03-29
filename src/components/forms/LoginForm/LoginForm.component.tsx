import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useContext } from "react";

import { apiLogin } from "@/api";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import { AuthContext } from "@/contexts/auth/authContext";

import { handleError } from "@/utils";

import { StyledForm } from "./LoginForm.styles";
import { schema } from "./LoginForm.validations";
import Flex from "@/components/common/Flex";
import { FiCheckCircle } from "react-icons/fi";
import { theme } from "@/styles/theme";

interface Values {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

interface Props {
  destinationAfterLogin?: string;
}

const LoginForm = ({ destinationAfterLogin }: Props) => {
  const router = useRouter();
  const { handleLogin } = useContext(AuthContext);

  const onSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const { token } = await apiLogin(values);

      handleLogin({ token });

      toast.success("Login realizado com sucesso", {
        icon: <FiCheckCircle size={24} color={theme.colors.green_400} />,
      });

      await router.push(destinationAfterLogin || "/");
    } catch (error) {
      handleError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <StyledForm>
          <Flex direction="column" gap="md">
            <Input
              fluid
              name="email"
              label="E-mail"
              placeholder="Ex.: exemplo@aluno.ufabc..."
              formikField
            />

            <Input
              fluid
              name="password"
              label="Senha"
              placeholder="Ex.: bvsdug0234$%"
              formikField
              type="password"
            />
          </Flex>

          <Flex direction="column" gap="md">
            <Button
              fluid
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Entrar
            </Button>

            <Button variant="secondary" fluid type="button" href="/signup">
              Cadastro
            </Button>
          </Flex>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
