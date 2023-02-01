import { AxiosError } from "axios";

import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (
    error instanceof AxiosError &&
    error?.response?.data &&
    "message" in error?.response?.data
  ) {
    toast.error((error.response.data as { message: string }).message);
  } else if ("message" in error) {
    toast.error(`Houve um erro: ${(error as { message: string }).message}`);
  } else {
    toast.error(`Houve um erro: Erro desconhecido`);
  }
};
