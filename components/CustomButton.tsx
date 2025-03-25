import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

type CustomButtonProps = {
  title: string; //responsável por definir o texto que irá dentro do botão
  onPress: () => void; // é a função que será executada quando o botão for pressionado
  backgroundColor?: string; // é a cor de fundo do botão
  borderColor?: string; // É a cor da borda
  textColor?: string; // é a cor do texto que vai no botão
  disabled?: boolean; // é se o botão tá habilitado ou não
};

const CustomButton = ({
  title,
  onPress,
  backgroundColor = "#2A4BA0",
  borderColor = "transparent",
  textColor = "#fff",
  disabled = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity // torna nosso botão clicável
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor,
          borderWidth: borderColor !== "transparent" ? 2 : 0, // se tiver border color, adicionamos 2px
        },
        disabled && styles.disabledButton, // se disable for == true, botão fica desabilitado
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default CustomButton;
