import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Cabecalho from "../components/header/cabecalho";

type Mensagem = {
  id: string;
  remetente: string;
  texto: string;
  data: string;
  lida: boolean;
};

export default function MensagensScreen() {
  const mensagens: Mensagem[] = [
    // Adicione mensagens aqui se necessário
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />

      {mensagens.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="chatbubble-outline" size={60} color="#ccc" />
          <Text style={styles.emptyStateText}>
            Você não tem mensagens ainda
          </Text>
          <Text style={styles.emptyStateSubText}>
            As mensagens de suas conversas aparecerão aqui
          </Text>
        </View>
      ) : (
        <FlatList
          data={mensagens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            // Render mensagens aqui
            <View />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#4A80F0",
    paddingVertical: 18,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  notificationButton: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FF3B30",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#666",
  },
  emptyStateSubText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginTop: 8,
    maxWidth: "70%",
  },
});
