import { theme } from "@/styles/theme";
import { AxiosError } from "axios";
import { FiXCircle } from "react-icons/fi";

import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (
    error instanceof AxiosError &&
    error?.response?.data &&
    "message" in error?.response?.data
  ) {
    toast.error((error.response.data as { message: string }).message, {
      icon: <FiXCircle size={24} color={theme.colors.error} />,
    });
  } else if ("message" in error) {
    toast.error(`Houve um erro: ${(error as { message: string }).message}`, {
      icon: <FiXCircle size={24} color={theme.colors.error} />,
    });
  } else {
    toast.error(`Houve um erro: Erro desconhecido`, {
      icon: <FiXCircle size={24} color={theme.colors.error} />,
    });
  }
};
