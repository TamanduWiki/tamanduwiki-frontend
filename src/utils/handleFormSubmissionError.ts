import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const handleFormSubmissionError = (error: any) => {
  if (error instanceof AxiosError && error?.response?.data?.message) {
    toast.error(error?.response?.data?.message);
  } else {
    toast.error(`Houve um erro: ${error?.message || "Erro desconhecido"}`);
  }
}
