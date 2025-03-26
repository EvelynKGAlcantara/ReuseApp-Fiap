import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Dimensions,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width; // Obtém a largura da tela

type CustomButtonProps = {
  title: string; //responsável por definir o texto que irá dentro do botão
  onPress: () => void; // é a função que será executada quando o botão for pressionado
  backgroundColor?: string; // é a cor de fundo do botão
  borderColor?: string; // É a cor da borda
  textColor?: string; // é a cor do texto que vai no botão
  disabled?: boolean; // é se o botão tá habilitado ou não
  icon?: React.ReactNode; // Ícone ou imagem ao lado esquerdo do texto
};

const CustomButton = ({
  title,
  onPress,
  backgroundColor = "#2A4BA0",
  borderColor = "transparent",
  textColor = "#fff",
  disabled = false,
  icon,
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
      <View style={styles.content}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1E4DB7",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth * 0.9,
    alignSelf: "center",
  },
  content: {
    flexDirection: "row", // Organiza ícone e texto lado a lado
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginRight: 10, // Espaçamento entre o ícone e o texto
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  disabledButton: {
    backgroundColor: "#B0B0B0",
  },
});

export default CustomButton;
