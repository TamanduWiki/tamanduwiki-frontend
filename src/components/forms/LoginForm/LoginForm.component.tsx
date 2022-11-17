import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import { FormContainer } from "./LoginForm.styles";

const LoginForm = () => {
  return (
    <FormContainer>
      <Input
        fluid
        name="email"
        label="E-mail"
        placeholder="Ex.: exemplo@aluno.ufabc.edu.br"
      />

      <Input
        fluid
        name="password"
        label="Senha"
        placeholder="Ex.: bvsdug0234$%"
      />

      <Button fluid>Fazer Login</Button>
    </FormContainer>
  )
};

export default LoginForm;
