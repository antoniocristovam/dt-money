import { createStackNavigator } from "@react-navigation/stack";
import { PrivateStackParamsList } from "./types-private-routes";
import { Home } from "@/screens/home";

export const PrivateRoutes = () => {
  const PrivateStack = createStackNavigator<PrivateStackParamsList>();

  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen name="Home" component={Home} />
    </PrivateStack.Navigator>
  );
};
