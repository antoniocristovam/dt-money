import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { PublicStackParamsList } from "@/routes/publicRoutes/types-public-routes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schema";

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
  } = useForm<RegisterFormParams>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  const onSubmit = async (data: RegisterFormParams) => {
    console.log(data);
  };

  return (
    <View className="flex-1 justify-between pb-6">
      <View className="flex-1 justify-center">
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

        <View className="mt-8">
          <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-forward">
            Cadastrar
          </AppButton>
        </View>
      </View>

      <View className="pt-8">
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
  );
};
