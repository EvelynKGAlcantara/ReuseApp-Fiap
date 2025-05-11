import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Re<Text style={styles.highlight}>Use</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "300",
    color: "#FFFFFF",
  },
  highlight: {
    color: "#FFA500",
    fontWeight: "600",
  },
});
