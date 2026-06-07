import React, { FC, PropsWithChildren } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { colors } from "@/shared/colors";
type AppButtonMode = "fill" | "outline";

interface AppButtonParams extends TouchableOpacityProps {
  mode?: AppButtonMode;
  iconName?: keyof typeof MaterialIcons.glyphMap;
}

export const AppButton: FC<PropsWithChildren<AppButtonParams>> = ({
  children,
  iconName,
  mode = "fill",
  ...rest
}) => {
  const isFill = mode === "fill";

  return (
    <TouchableOpacity
      className={clsx(
        "w-full rounded-xl px-5 flex-row items-center h-button",
        iconName ? "justify-between" : "justify-center",
        {
          "bg-accent-brand": isFill,
          "bg-none border-[1px] border-accent-brand": !isFill,
        },
      )}
      {...rest}
    >
      <Text
        className={clsx("text-base font-bold", {
          "text-white": isFill,
          "text-accent-brand": !isFill,
        })}
      >
        {children}
      </Text>

      {iconName && (
        <MaterialIcons
          size={24}
          name={iconName}
          color={isFill ? colors.white : colors["accent-brand"]}
        />
      )}
    </TouchableOpacity>
  );
};
