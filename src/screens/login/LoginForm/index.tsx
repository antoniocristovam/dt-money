import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { PublicStackParamsList } from "@/routes/publicRoutes/types-public-routes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { loginSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

export interface FormLoginParams {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  const onSubmit = async (data: FormLoginParams) => {
    console.log(data);
  };

  return (
    <View className="flex-1 justify-between pb-6 ">
      <View className="flex-1 justify-center mb-10">
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

        <View className="mt-8">
          <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-forward">
            Login
          </AppButton>
        </View>
      </View>

      <View className="pt-8">
        <Text className="mb-6 text-gray-300 text-base">
          Ainda não tem uma conta?
        </Text>
        <AppButton
          onPress={() => navigation.navigate("Register")}
          iconName="arrow-forward"
          mode="outline"
        >
          Cadastrar
        </AppButton>
      </View>
    </View>
  );
};
