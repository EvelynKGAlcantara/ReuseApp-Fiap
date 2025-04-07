import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface LocationBoxProps {
  location: string;
  onEdit?: () => void;
}

export const LocationBox: React.FC<LocationBoxProps> = ({
  location,
  onEdit,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Local: <Text style={styles.locationText}>{location}</Text>
      </Text>
      <TouchableOpacity onPress={onEdit}>
        <Ionicons name="create-outline" size={18} color="#22408C" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },

  label: {
    color: "#666",
    fontSize: 14,
  },
  locationText: {
    fontWeight: "bold",
    color: "#000",
  },
});
