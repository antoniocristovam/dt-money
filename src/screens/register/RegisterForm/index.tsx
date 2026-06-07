import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { PublicStackParamsList } from "@/routes/publicRoutes/types-public-routes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";

interface RegisterFormParams {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterFormParams>();

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  return (
    <>
      <AppInput
        name="name"
        label="Nome"
        control={control}
        leftIconName="person"
        placeholder="Seu nome completo"
      />
      <AppInput
        name="email"
        label="Email"
        control={control}
        leftIconName="mail-outline"
        placeholder="email.example.com"
      />
      <AppInput
        label="Senha"
        name="password"
        secureTextEntry
        control={control}
        leftIconName="lock"
        placeholder="••••••••"
      />
      <AppInput
        secureTextEntry
        control={control}
        leftIconName="lock"
        name="confirmPassword"
        placeholder="••••••••"
        label="Confirmar senha"
      />

      <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
        <AppButton iconName="arrow-forward">Cadastrar</AppButton>

        <View>
          <Text className="mb-6 text-gray-300 text-base">
            Já possui uma conta?
          </Text>
          <AppButton
            onPress={() => navigation.navigate("Login")}
            iconName="arrow-forward"
            mode="outline"
          >
            Acessar
          </AppButton>
        </View>
      </View>
    </>
  );
};
