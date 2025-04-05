import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import TabComponent from "@/components/TabComponent";

export default function ProposalsScreen() {
  const [selectedTab, setSelectedTab] = useState("propostas");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <TabComponent />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>
          As seguintes ofertas foram feitas para você
        </Text>
        <Text style={styles.subTitle}>Propostas Aceitas</Text>

        <View style={styles.card}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.productImage}
          />
          <View style={styles.cardContent}>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>4.5 / 5</Text>
            </View>
            <Text style={styles.productTitle}>Gradient Graphic T-shirt</Text>
            <Text style={styles.status}>PROPOSTA ACEITA</Text>
            <Text style={styles.description}>
              Tá novinha. Terminei com a namorada e preciso trocar por outra.
              Esse é o motivo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: { backgroundColor: "#4A80F0", padding: 16, alignItems: "center" },
  logo: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  tabContainer: { flexDirection: "row", justifyContent: "center", margin: 16 },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeTab: { backgroundColor: "#4A80F0" },
  tabText: { color: "#000", fontWeight: "bold" },
  content: { padding: 16 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "400",
    color: "#333",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardContent: { alignItems: "center" },
  ratingContainer: { flexDirection: "row", alignItems: "center" },
  rating: { fontSize: 14, marginLeft: 4, color: "#333" },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
  status: { color: "#4A80F0", fontWeight: "bold", marginTop: 4 },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#4A80F0",
    paddingVertical: 12,
  },
  navItem: { alignItems: "center" },
  navText: { color: "#fff", fontSize: 12, marginTop: 4 },
});
