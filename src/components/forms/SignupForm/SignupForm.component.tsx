import { FiX } from "react-icons/fi";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Flex from "@/components/common/Flex";

import { StyledForm } from "./SignupForm.styles";
import { Formik, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface Values {
  email: string;
  password: string;
}

const SignupForm = () => {
  const router = useRouter();

  const onSubmit = async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
        method: "POST",
        body: JSON.stringify({ ...values, universityTie: 'student' }),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => {
        console.log(response);

        if (!response.ok) {
          return response.text().then(text => { throw new Error(text) })
        }
      });

      toast.success("Usuário criado com sucesso", { position: 'top-right', duration: 5000 });

      await router.push("/login")
    } catch(error) {
      toast.error(`Houve um erro ao tentar criar conta: ${error?.message || "Erro desconhecido"}`, { position: 'top-right' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
      {({ isSubmitting }) =>
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
            placeholder="Ex.: bvsdug0234$%"
            formikField
          />

          <Flex direction="column" style={{ color: "#8c8c8c" }}>
            <Flex align="center" gap="8px"><FiX style={{ flexShrink: 0 }} /><p style={{ lineHeight: '1.5' }}>Contém pelo menos 1 letra maiúscula</p></Flex>
            <Flex align="center" gap="8px"><FiX style={{ flexShrink: 0 }} /><p style={{ lineHeight: '1.5' }}>Contém pelo menos 1 número</p></Flex>
            <Flex align="center" gap="8px"><FiX style={{ flexShrink: 0 }} /><p style={{ lineHeight: '1.5' }}>Contém pelo menos 1 letra minúscula</p></Flex>
            <Flex align="center" gap="8px"><FiX style={{ flexShrink: 0 }} /><p style={{ lineHeight: '1.5' }}>Contém no mínimo 8 caracteres</p></Flex>
          </Flex>

          <Button type="submit" disabled={isSubmitting} loading={isSubmitting} fluid>Criar Conta</Button>
        </StyledForm>
      }
    </Formik>
  );
};

export default SignupForm;
