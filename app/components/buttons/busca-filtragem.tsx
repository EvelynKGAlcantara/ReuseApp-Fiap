import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchWithFilterProps {
  onSearchChange?: (text: string) => void;
  onFilterPress?: () => void;
}

export const SearchWithFilter: React.FC<SearchWithFilterProps> = ({
  onSearchChange,
  onFilterPress,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#666" />
        <TextInput
          placeholder="Buscar por Itens (Ex.: Tênis Nike)"
          placeholderTextColor="#666"
          style={styles.input}
          onChangeText={onSearchChange}
        />
      </View>

      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <Ionicons name="options-outline" size={18} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48, // Altura fixa
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  filterButton: {
    height: 48, // mesma altura do input
    width: 48, // quadrado
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
