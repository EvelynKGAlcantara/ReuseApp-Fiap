import React from "react";
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from "react-native";
import LocationMap from "../components/LocationMap";

export default function LocationTestScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.header}>Teste de Localização</Text>

          <View style={styles.mapWrapper}>
            <LocationMap
              address="Rua Central"
              number="100"
              neighborhood="Novo Horizonte"
              city="Uberlândia"
              state="MG"
            />
          </View>

          <View style={styles.debugInfo}>
            <Text style={styles.debugText}>Status: Componente Carregado</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  mapWrapper: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
  },
  debugInfo: {
    padding: 12,
    backgroundColor: "#e8f4ff",
    borderRadius: 8,
    marginTop: 16,
  },
  debugText: {
    color: "#0066cc",
    fontSize: 14,
  },
});
