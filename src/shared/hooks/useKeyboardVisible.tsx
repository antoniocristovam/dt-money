import { Keyboard } from "react-native";
import React, { useEffect, useState } from "react";

export const useKeyboardVisible = () => {
  const [isKeyBoardVisible, setIsKeyBoardVisible] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyBoardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyBoardVisible(false);
      },
    );

    return () => {
      keyboardShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return isKeyBoardVisible;
};
