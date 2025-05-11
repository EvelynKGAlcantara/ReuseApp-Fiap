import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CreatePassword() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha1, setMostrarSenha1] = useState(false);
  const [mostrarSenha2, setMostrarSenha2] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Criar nova senha</Text>
        <Text style={styles.subtitle}>
          Por favor, preencha os campos abaixo para criar sua nova senha.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nova Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Insira sua nova senha"
              secureTextEntry={!mostrarSenha1}
              value={novaSenha}
              onChangeText={setNovaSenha}
            />
            <TouchableOpacity
              onPress={() => setMostrarSenha1(!mostrarSenha1)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={mostrarSenha1 ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          <Text style={[styles.label, { marginTop: 16 }]}>Confirmar Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirme sua nova senha"
              secureTextEntry={!mostrarSenha2}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />
            <TouchableOpacity
              onPress={() => setMostrarSenha2(!mostrarSenha2)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={mostrarSenha2 ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/(auth)/login")}
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  passwordInput: {
    flex: 1,
    height: 44,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#333",
  },
  eyeIcon: {
    padding: 10,
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
