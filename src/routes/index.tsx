import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./publicRoutes";
import { useCallback, useState } from "react";
import { PrivateRoutes } from "./privateRoutes";

export const NavigationRoutes = () => {
  const [user, setUser] = useState(null);

  // const Routes = useCallback(() => {
  //   if (!user) return <PublicRoutes />;
  //   return <PrivateRoutes />;
  // }, [user]);

  return (
    <NavigationContainer>
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};
