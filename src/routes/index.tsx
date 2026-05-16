import { LoginScreen } from "@/screens/login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

type PublicStackParamsList = {
  Login: undefined;
  Register: undefined;
};

export const NavigationRoutes = () => {
  const PublicStack = createStackNavigator<PublicStackParamsList>();

  return (
    <NavigationContainer>
      <PublicStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <PublicStack.Screen name="Login" component={LoginScreen} />
      </PublicStack.Navigator>
    </NavigationContainer>
  );
};
