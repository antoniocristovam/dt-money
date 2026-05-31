import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./publicRoutes";
import { useCallback, useState } from "react";
import { PrivateRoutes } from "./privateRoutes";
import { SystemBars } from "react-native-edge-to-edge";

export const NavigationRoutes = () => {
  const [user, setUser] = useState(undefined);

  return (
    <NavigationContainer>
      <SystemBars style={"light"} />
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};
