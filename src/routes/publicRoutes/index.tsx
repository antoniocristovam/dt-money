import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen } from "@/screens/register";
import { LoginScreen } from "@/screens/login";
import { PublicStackParamsList } from "./types-public-routes";

export const PublicRoutes = () => {
  const PublicStack = createStackNavigator<PublicStackParamsList>();

  return (
    <PublicStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PublicStack.Screen name="Login" component={LoginScreen} />
      <PublicStack.Screen name="Register" component={RegisterScreen} />
    </PublicStack.Navigator>
  );
};
