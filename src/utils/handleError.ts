import { AxiosError } from "axios";

import toast from "react-hot-toast";

export const handleError = (error) => {
  if (error instanceof AxiosError && 'message' in error.response.data) {
    toast.error((error.response.data as { message: string }).message);
  } else if ('message' in error) {
    toast.error(`Houve um erro: ${(error as { message: string }).message}`);
  } else {
    toast.error(`Houve um erro: Erro desconhecido`);
  }
}
