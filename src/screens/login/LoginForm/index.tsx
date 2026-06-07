import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { useForm } from "react-hook-form";
import { Text } from "react-native";

export interface FormLoginParams {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>();

  return (
    <>
      <AppInput
        name="email"
        label="Email"
        control={control}
        placeholder="email.example.com"
        leftIconName="mail-outline"
      />

      <AppInput
        name="password"
        label="Senha"
        secureTextEntry
        control={control}
        placeholder="••••••••"
        leftIconName="lock-outline"
      />

      <AppButton iconName="arrow-forward" mode="fill">
        Login
      </AppButton>
    </>
  );
};
