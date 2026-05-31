import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoginForm } from "./LoginForm";

export const LoginScreen = () => {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
};
