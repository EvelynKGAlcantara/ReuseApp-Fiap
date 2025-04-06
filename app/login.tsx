import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [btnAtivo, setBtnAtivo] = useState(false);

  const alternarMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const validarFormulario = () => {
    if (email.trim() !== "" && senha.trim() !== "") {
      setBtnAtivo(true);
    } else {
      setBtnAtivo(false);
    }
  };

  const handleLogin = () => {
    // Em uma aplicação real, validaria os dados aqui
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            Re<Text style={styles.logoHighlight}>Use</Text>
          </Text>
        </View>

        <Text style={styles.title}>Faça Login</Text>
        <Text style={styles.subtitle}>
          Acesse a plataforma agora e experimente{"\n"}a melhor maneira trocar
          seus itens!
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira seu e-mail"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              validarFormulario();
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={[styles.label, { marginTop: 16 }]}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Insira sua senha"
              value={senha}
              onChangeText={(text) => {
                setSenha(text);
                validarFormulario();
              }}
              secureTextEntry={!mostrarSenha}
            />
            <TouchableOpacity
              onPress={alternarMostrarSenha}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={mostrarSenha ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.loginButton, btnAtivo && styles.loginButtonActive]}
          activeOpacity={0.8}
          onPress={() => {
            setBtnAtivo(true);
            handleLogin();
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <Text style={styles.orText}>ou</Text>
        </View>

        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
          <Ionicons
            name="logo-google"
            size={18}
            color="#4285F4"
            style={styles.socialIcon}
          />
          <Text style={styles.googleButtonText}>Login com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton} activeOpacity={0.8}>
          <Ionicons
            name="logo-facebook"
            size={18}
            color="white"
            style={styles.socialIcon}
          />
          <Text style={styles.facebookButtonText}>Login com Facebook</Text>
        </TouchableOpacity>

        <View style={styles.registerLink}>
          <Text style={styles.registerText}>Ainda não tem conta? </Text>
          <Link href="/registro" asChild>
            <TouchableOpacity>
              <Text style={styles.registerLinkText}>Cadastre-se</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    padding: 16,
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
  logoContainer: {
    alignSelf: "center",
    marginBottom: 24,
  },
  logo: {
    fontSize: 32,
    fontWeight: "400",
    color: "#2A4BA0",
  },
  logoHighlight: {
    color: "#F9B023",
    fontWeight: "bold",
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
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginTop: 8,
  },
  forgotPasswordText: {
    color: "#2A4BA0",
    fontSize: 12,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#D1D1D1",
    borderRadius: 100,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  loginButtonActive: {
    backgroundColor: "#2A4BA0",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  orContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  orText: {
    color: "#888",
    fontSize: 14,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 100,
    paddingVertical: 12,
    marginBottom: 12,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: "contain",
  },
  googleButtonText: {
    fontWeight: "500",
    color: "#333",
    fontSize: 14,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1877F2",
    borderRadius: 100,
    paddingVertical: 12,
    marginBottom: 12,
  },
  socialIcon: {
    marginRight: 8,
  },
  facebookButtonText: {
    fontWeight: "500",
    color: "white",
    fontSize: 14,
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
});

export default LoginScreen;
