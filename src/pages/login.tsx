import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/images/logo.svg";

import Button from "@/components/Button";
import Input from "@/components/Input";
import styled from "@emotion/styled";

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

const LoginPage = () => {
  return (
    <PageContainer>
      <Content>
        <Link href="/"><Image src={logoImg} alt="logo" /></Link>

        <MainAreaContent>
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

            <Button fluid>Fazer Login</Button>
          </Form>

          <CreateAccount>Ainda não tem conta? <Link href="/signup">Fazer o cadastro</Link></CreateAccount>
        </MainAreaContent>

        <PrivacyPolicy href="/privacy">Política de privacidade</PrivacyPolicy>
      </Content>
    </PageContainer>
  );
};

export default LoginPage;
