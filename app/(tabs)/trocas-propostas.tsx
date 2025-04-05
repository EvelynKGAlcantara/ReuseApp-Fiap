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
import { ItemCard } from "../components/cards/card-produto";
import { ToggleSwitch } from "../components/buttons/tabs";

export default function ProposalsScreen() {
  const [selected, setSelected] = useState("Propostas");
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ToggleSwitch
          options={["Propostas", "Suas ofertas"]}
          selectedOption={selected}
          onSelect={setSelected}
        />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>
          As seguintes ofertas foram feitas para você
        </Text>
        <Text style={styles.subTitle}>Propostas Aceitas</Text>
        <ItemCard
          imageSource={{ uri: "https://via.placeholder.com/300x150" }}
          ratingComponent={
            <>
              {/* Trocar por componente criado pela Isabelle */}
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star-half" size={16} color="gold" />
              <Text style={{ marginLeft: 5 }}>4.5/5</Text>
            </>
          }
          title="Gradient Graphic T-shirt"
          status="PROPOSTA ACEITA"
          description="Tá novinha. Terminei com a namorada e preciso trocar por outra. Esse é o motivo."
          showCheckbox
          checked={checked}
          onCheckChange={() => setChecked(!checked)}
        />
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
