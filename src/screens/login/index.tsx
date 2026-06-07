import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoginForm } from "./LoginForm";
import { AuthHeader } from "@/components/AuthHeader";

export const LoginScreen = () => {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
};
