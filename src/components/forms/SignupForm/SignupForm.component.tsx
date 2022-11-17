import { FiX } from "react-icons/fi";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Flex from "@/components/common/Flex";

import { FormContainer } from "./SignupForm.styles";

const SignupForm = () => {
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

      <Flex direction="column" style={{ color: "#8c8c8c" }}>
        <Flex align="center" gap="8px"><FiX style={{ flexShrink: 0 }} /><p style={{ lineHeight: '1.5' }}>Contém pelo menos 1 letra maiúscula</p></Flex>
        <Flex align="center" gap="8px"><FiX style={{ flexShrink: 0 }} /><p style={{ lineHeight: '1.5' }}>Contém pelo menos 1 número</p></Flex>
        <Flex align="center" gap="8px"><FiX style={{ flexShrink: 0 }} /><p style={{ lineHeight: '1.5' }}>Contém pelo menos 1 letra minúscula</p></Flex>
        <Flex align="center" gap="8px"><FiX style={{ flexShrink: 0 }} /><p style={{ lineHeight: '1.5' }}>Contém no mínimo 8 caracteres</p></Flex>
      </Flex>

      <Button fluid>Criar Conta</Button>
    </FormContainer>
  );
};

export default SignupForm;
