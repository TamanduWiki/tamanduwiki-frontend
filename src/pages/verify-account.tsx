import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { apiConfirmAccount } from "@/api";

import SimplePageLayout from "@/components/layouts/SimplePageLayout";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { theme } from "@/styles/theme";

const VerifyAccountPage = () => {
  const {
    query: { token },
    push,
  } = useRouter();

  const handleConfirmAccount = async (token: string) => {
    try {
      await apiConfirmAccount(token);

      toast.success(
        "Conta confirmada com successo! Você pode fazer login agora :)",
        { icon: <FiCheckCircle size={24} color={theme.colors.green_400} /> }
      );
    } catch {
      toast.error("Houve um erro ao confirmar sua conta...", {
        icon: <FiXCircle size={24} color={theme.colors.error} />,
      });
    } finally {
      push("/login");
    }
  };

  useEffect(() => {
    if (token) {
      handleConfirmAccount(token as string);
    }
  }, [token]);

  return (
    <SimplePageLayout
      pageHead="Verificando Conta - TamanduWiki"
      bottomLinks={[{ href: "/login", label: "Voltar para página de login" }]}
    >
      <p>Verificando conta, aguarde alguns segundos...</p>
    </SimplePageLayout>
  );
};

export default VerifyAccountPage;
