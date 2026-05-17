import { PublicStackParamsList } from "@/routes/publicRoutes/types-public-routes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";

export const Home = () => {
  const navigator = useNavigation<StackNavigationProp<PublicStackParamsList>>();
  console.log("TELA DE HOME");

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Tela de home</Text>
      <TouchableOpacity
        className="bg-green-500 px-4 py-2 rounded"
        onPress={() => navigator.navigate("Register")}
      >
        <Text className="text-white">Ir para registro</Text>
      </TouchableOpacity>
    </View>
  );
};
