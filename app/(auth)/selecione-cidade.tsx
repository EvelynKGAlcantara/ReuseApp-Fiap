import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "../components/logoReuse";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const cities = [
  "Uberlândia / MG",
  "São Paulo / SP",
  "Rio de Janeiro / RJ",
  "Belo Horizonte / MG",
];

export default function SelecioneCidade() {
  const router = useRouter();

  const goToLogin = () => {
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Selecione uma cidade:</Text>
        <Text style={styles.subtitle}>
          Como estamos iniciando nossas operações, temos apenas as 4 cidades
          abaixo disponíveis
        </Text>
        <View style={styles.cityList}>
          {cities.map((city, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cityItem}
              onPress={goToLogin}
            >
              <Text style={styles.cityText}>{city}</Text>
              <Ionicons name="chevron-forward" size={20} color="#FFF" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22408C",
  },

  logoContainer: {
    position: "absolute",
    top: 40,
    left: 20,
    bottom: 30,
    zIndex: 10,
  },

  content: {
    marginTop: 120,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#D0D0D0",
    marginBottom: 20,
  },
  cityList: {
    marginTop: 10,
  },
  cityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
  },
  cityText: {
    color: "#FFF",
    fontSize: 16,
  },
});
