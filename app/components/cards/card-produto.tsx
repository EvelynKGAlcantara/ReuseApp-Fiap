import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ItemCardProps = {
  imageSource: ImageSourcePropType;
  ratingComponent?: React.ReactNode;
  title?: string;
  status?: string;
  description?: string;
  showCheckbox?: boolean;
  checked?: boolean;
  onCheckChange?: () => void;
};

export const ItemCard = ({
  imageSource,
  ratingComponent,
  title,
  status,
  description,
  showCheckbox = false,
  checked = false,
  onCheckChange,
}: ItemCardProps) => {
  return (
    <View style={styles.card}>
      {/* Checkbox no canto superior direito */}
      {showCheckbox && (
        <TouchableOpacity style={styles.checkbox} onPress={onCheckChange}>
          <Ionicons
            name={checked ? "checkbox" : "square-outline"}
            size={24}
            color={checked ? "#2A4BA0" : "#888"}
          />
        </TouchableOpacity>
      )}

      {/* Imagem do item */}
      <Image source={imageSource} style={styles.image} />

      {/* Conteúdo do Card */}
      <View style={styles.content}>
        {/* Rating (se existir) */}
        {ratingComponent && (
          <View style={styles.rating}>{ratingComponent}</View>
        )}

        {/* Título (se existir) */}
        {title && <Text style={styles.title}>{title}</Text>}

        {/* Status (se existir) */}
        {status && <Text style={styles.status}>{status}</Text>}

        {/* Descrição (se existir) */}
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
    position: "relative",
  },
  checkbox: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    padding: 2,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  content: {
    padding: 12,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
  },
});
