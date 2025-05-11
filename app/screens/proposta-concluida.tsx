import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Cabecalho from "../components/header/cabecalho";

export default function PropostaConcluida() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Proposta feita!</Text>

          <View style={styles.successIconContainer}>
            <Ionicons name="checkmark-sharp" size={24} color="white" />
          </View>

          <Text style={styles.message}>
            Agora é só aguardar uma resposta =)
          </Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => router.push("/screens/proposta-recebida")}
          >
            <Text style={styles.buttonText}>Avançar</Text>
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
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
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
  contentContainer: {
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 24,
    textAlign: "center",
    lineHeight: 26,
  },
  successIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  message: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 18,
  },
  button: {
    backgroundColor: "#2A4BA0",
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
