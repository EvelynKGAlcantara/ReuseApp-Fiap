import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CabecalhoProps = {
  icon?: string;
};

export default function Cabecalho({ icon }: CabecalhoProps) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {icon && (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.logoTitle}>
        <Text style={styles.logo}>Re</Text>
        <Text style={styles.logoUse}>Use</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#2A4BA0",
    paddingVertical: 18,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "200",
    color: "#fff",
  },
  logoTitle: {
    display: "flex",
  },
  logo: {
    fontSize: 24,
    fontWeight: "400",
    color: "#ffffff",
  },
  logoUse: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f9b023",
  },
});
