import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Esqueceu a senha?</Text>
        <Text style={styles.subtitle}>
          Informe o e-mail de cadastro. Você receberá uma mensagem com as
          instruções para cadastrar uma nova senha.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/(auth)/criar-senha")}
        >
          <Text style={styles.loginButtonText}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.registerLink}>
          <Text style={styles.registerText}>Lembrou sua senha? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.registerLinkText}>Fazer login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 24,
    lineHeight: 20,
  },
  form: {
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#333",
    backgroundColor: "#fff",
  },
  loginButton: {
    backgroundColor: "#2A4BA0",
    borderRadius: 100,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  registerLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  registerText: {
    color: "#666",
    fontSize: 13,
  },
  registerLinkText: {
    color: "#2A4BA0",
    fontWeight: "500",
    fontSize: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
});
