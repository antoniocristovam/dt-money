import React, { useRef, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";
import clsx from "clsx";

interface AppInputParams<T extends FieldValues> extends TextInputProps {
  name: Path<T>;
  label?: string;
  control: Control<T>;
  leftIconName?: keyof typeof MaterialIcons.glyphMap;
}

export const AppInput = <T extends FieldValues>({
  control,
  name,
  label,
  leftIconName,
  secureTextEntry,
  ...rest
}: AppInputParams<T>) => {
  // states
  const [isFocused, setIsFocused] = useState(false);
  const [showText, setShowText] = useState(secureTextEntry);

  // hooks
  const inputRef = useRef<TextInput>(null);

  const checkFocus = () => {
    if (inputRef.current) {
      setIsFocused(inputRef.current.isFocused());
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <View className="w-full mt-4">
            {label && (
              <Text
                className={clsx(
                  "mb-2 mt-3 text-base",
                  isFocused ? "text-accent-brand" : "text-gray-600",
                )}
              >
                {label}
              </Text>
            )}
            <TouchableOpacity className="flex-row items-center justify-between border-b-[1px] border-gray-600 px-3 py-2 h-16">
              {leftIconName && (
                <MaterialIcons
                  size={24}
                  className="mr-2 "
                  name={leftIconName}
                  color={
                    isFocused ? colors["accent-brand"] : colors.gray["600"]
                  }
                />
              )}
              <TextInput
                value={value}
                ref={inputRef}
                onFocus={checkFocus}
                onChangeText={onChange}
                onEndEditing={checkFocus}
                className="flex-1 text-base text-gray-500"
                placeholderTextColor={colors.gray["700"]}
                secureTextEntry={showText}
                {...rest}
              />

              {secureTextEntry && (
                <TouchableOpacity onPress={() => setShowText((prev) => !prev)}>
                  <MaterialIcons
                    size={24}
                    color={colors.gray["600"]}
                    name={showText ? "visibility" : "visibility-off"}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};
