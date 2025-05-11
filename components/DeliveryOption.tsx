import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type DeliveryOption = {
  id: string;
  label: string;
  description: string;
  iconName: string;
};

type DeliveryOptionCardProps = {
  option: DeliveryOption;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onEdit: (id: string) => void;
};

const DeliveryOptionCard = ({
  option,
  isSelected,
  onSelect,
  onEdit,
}: DeliveryOptionCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={() => onSelect(option.id)}
    >
      {/* Botão de Rádio */}
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => onSelect(option.id)}
      >
        <View
          style={[styles.radioButton, isSelected && styles.radioSelected]}
        />
      </TouchableOpacity>

      {/* Ícone e Informação */}
      <Ionicons
        name={option.iconName as any}
        size={24}
        color="#333"
        style={styles.icon}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Enviar para</Text>
        <Text style={styles.title}>{option.label}</Text>
        <Text style={styles.description}>{option.description}</Text>
      </View>

      {/* Botão Editar */}
      <TouchableOpacity onPress={() => onEdit(option.id)}>
        <Text style={styles.editText}>Editar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedCard: {
    borderColor: "#6200ea",
  },
  radioContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  radioButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "transparent",
  },
  radioSelected: {
    backgroundColor: "#6200ea",
  },
  icon: {
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#666",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
  editText: {
    fontSize: 14,
    color: "#e53935",
    fontWeight: "bold",
  },
});

export default DeliveryOptionCard;
