import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState("propostas");

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === "propostas" && styles.activeTab]}
        onPress={() => setSelectedTab("propostas")}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === "propostas" && styles.activeTabText,
          ]}
        >
          Propostas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tab,
          selectedTab === "suasOfertas" && styles.inactiveTab,
        ]}
        onPress={() => setSelectedTab("suasOfertas")}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === "suasOfertas" && styles.inactiveTabText,
          ]}
        >
          Suas ofertas
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#E0E0E0", // Cor de fundo neutra para a borda
    borderRadius: 20,
    padding: 2,
    width: 200, // Ajuste conforme necessário
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#1E40AF", // Azul forte para a aba ativa
  },
  inactiveTab: {
    backgroundColor: "#FFFFFF", // Branco para a aba inativa
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  activeTabText: {
    color: "#FFFFFF", // Texto branco para a aba ativa
  },
  inactiveTabText: {
    color: "#1E40AF", // Azul para o texto da aba inativa
  },
});

export default TabComponent;
