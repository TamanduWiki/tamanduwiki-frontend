import Image from "next/image";
import Link from "next/link";
import { FiInfo, FiX } from "react-icons/fi";

import logoImg from "@/assets/images/logo.svg";

import Button from "@/components/Button";
import Input from "@/components/Input";
import styled from "@emotion/styled";
import Flex from "@/components/Flex";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 1140px;
  padding: 48px;
  gap: 48px;

  @media (max-width: 540px) {
    padding: 48px 8px;
    justify-content: space-around;
  }
`;

const MainAreaContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  width: 560px;
  padding: 32px;
  border-radius: 8px;

  background-color: white;

  @media (max-width: 540px) {
    width: 100%;
    padding: 24px 16px;
    gap: 24px;
  }
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 540px) {
    gap: 16px;
  }
`;

const CreateAccount = styled.p`
  a { color: #5AC229 }
`;

const PrivacyPolicy = styled(Link)`
  color: #2f2f2f;
`

const SignupPage = () => {
  return (
    <PageContainer>
      <Content>
        <Link href="/"><Image src={logoImg} alt="logo" /></Link>

        <MainAreaContent>
          <Flex align="center" gap="8px" style={{ color: "#6b6b6b", borderRadius: "4px", lineHeight: 1.5 }}>
            <FiInfo style={{ flexShrink: 0 }}/>

            <p>
              Para criar uma conta é necessário ter um email institucional da UFABC.
            </p>
          </Flex>

          <Form>
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
          </Form>

          <CreateAccount>Já tem conta? <Link href="/login">Fazer o login</Link></CreateAccount>
        </MainAreaContent>

        <PrivacyPolicy href="/privacy">Política de privacidade</PrivacyPolicy>
      </Content>
    </PageContainer>
  );
};

export default SignupPage;
