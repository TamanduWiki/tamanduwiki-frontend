import Image from 'next/image';

import logoImg from '@/assets/images/logo.svg';

import Button from '@/components/Button';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import styled from '@emotion/styled';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 1140px;
  padding: 48px;
  gap: 32px;


  @media (max-width: 540px) {
    padding: 32px 16px;
  }
`

const MainAreaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const MainArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 48px;
  border-radius: 16px;
  width: 100%;
  max-width: 720px;

  @media (max-width: 540px) {
    padding: 24px 16px;
  }
`

const MainAreaContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  width: 480px;

  @media (max-width: 540px) {
    width: 100%;
  }
`

const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 540px) {
    gap: 8px;
  }
`

const Title = styled.h1`
  @media (max-width: 540px) {
    font-size: 32px;
  }
`

const Subtitle = styled.p`
  max-width: 360px;
  text-align: center;
  line-height: 1.25;
`

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const HomePage = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
    >
      <Content>
        <Image src={logoImg} alt="logo" />

        <MainAreaContainer>
          <MainArea>
            <MainAreaContent>
              <TitlesContainer>
                <Title>Fazer Login</Title>

                <Subtitle>
                  Lorem Ipsum Ais simply dummy text of the printing and typesetting industry.
                </Subtitle>
              </TitlesContainer>

              <Form>
                <Input fluid name="email" label="E-mail" placeholder="Ex.: exemplo@aluno.ufabc.edu.br" />

                <Input fluid name="password" label="Senha" placeholder="Ex.: bvsdug0234$%" />

                <Button fluid>
                  Entrar
                </Button>
              </Form>

              <p >Problemas para fazer o login?</p>
            </MainAreaContent>
          </MainArea>
        </MainAreaContainer>

        <div>Política de privacidade</div>
      </Content>
    </Flex>
  );
};

export default HomePage;
