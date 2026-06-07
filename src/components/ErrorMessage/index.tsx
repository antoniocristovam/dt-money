import React, { FC, PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";

export const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View className="flex-row items-center mt-1">
      <MaterialIcons
        size={16}
        style={{ marginRight: 4 }}
        // className="mr-5"
        name="error-outline"
        color={colors["accent-red-background-primary"]}
      />
      <Text className="text-accent-red-background-primary">{children}</Text>
    </View>
  );
};
