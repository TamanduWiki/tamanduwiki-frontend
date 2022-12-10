import * as yup from "yup";
import {
  containsAtLeastEightChars,
  containsLowercaseChar,
  containsNumber,
  containsSpecialChar,
  containsUppercaseChar,
} from "@/utils/password";

export const schema = yup.object().shape({
  firstName: yup.string().required("Nome é obrigatório"),
  lastName: yup.string().required("Sobrenome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .test("test-if-containsLowercaseChar", "Senha muito fraca", (value) =>
      containsLowercaseChar(value)
    )
    .test("test-if-containsUppercaseChar", "Senha muito fraca", (value) =>
      containsUppercaseChar(value)
    )
    .test("test-if-containsNumber", "Senha muito fraca", (value) =>
      containsNumber(value)
    )
    .test("test-if-containsSpecialChar", "Senha muito fraca", (value) =>
      containsSpecialChar(value)
    )
    .test("test-if-containsAtLeastEightChars", "Senha muito fraca", (value) =>
      containsAtLeastEightChars(value)
    ),
});
