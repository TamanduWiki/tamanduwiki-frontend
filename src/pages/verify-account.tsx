import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { apiConfirmAccount } from "@/api";

import SimplePageLayout from "@/components/layouts/SimplePageLayout";

const VerifyAccountPage = () => {
  const {
    query: { token },
    push,
  } = useRouter();

  const handleConfirmAccount = async (token: string) => {
    try {
      await apiConfirmAccount(token);

      toast.success("Conta confirmada com successo! Você pode fazer login agora :)")
    } catch {
      toast.error("Houve um erro ao confirmar sua conta...")
    } finally {
      push("/login");
    }
  }

  useEffect(() => {
    if (token) {
      handleConfirmAccount(token as string);
    }
  }, [token]);

  return (
    <>
      <Head>
        <title>Verificando Conta - UFABCwiki</title>
      </Head>

      <SimplePageLayout
        bottomLink={{ href: "/login", label: "Voltar para página de login" }}
      >
        <p>
          Verificando conta, aguarde alguns segundos...
        </p>
      </SimplePageLayout>
    </>
  );
};

export default VerifyAccountPage;
