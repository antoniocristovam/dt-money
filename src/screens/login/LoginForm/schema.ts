import * as yup from "yup";

export const loginSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
});
