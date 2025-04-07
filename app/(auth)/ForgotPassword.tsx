import { Link } from "@/components/ui/link";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    width: "100%",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a senha?</Text>
      <Text style={styles.subtitle}>
        Informe o e-mail de cadastro. Você receberá uma mensagem com as
        instruções para cadastrar uma nova senha.
      </Text>
      <Text style={styles.inputLabel}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />
      <Link to={{ screen: "Login" }}>
        <Text style={{ color: "#4CAF50" }}>Lembrou sua senha? Fazer login</Text>
      </Link>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* Lógica para enviar o e-mail */
        }}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
