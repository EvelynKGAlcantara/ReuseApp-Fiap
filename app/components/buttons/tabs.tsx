import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

type ToggleSwitchProps = {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
};

export const ToggleSwitch = ({
  options,
  selectedOption,
  onSelect,
}: ToggleSwitchProps) => {
  const selectedIndex = options.indexOf(selectedOption);
  const translateX = useRef(new Animated.Value(selectedIndex * 100)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: selectedIndex * 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [selectedIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Animated.View
          style={[styles.slider, { transform: [{ translateX }] }]}
        />
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.option}
            onPress={() => onSelect(option)}
          >
            <Text
              style={[
                styles.text,
                selectedOption === option && styles.selectedText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    position: "relative",
    overflow: "hidden",
  },
  slider: {
    position: "absolute",
    width: "50%",
    height: "100%",
    backgroundColor: "#1E3A8A",
    borderRadius: 20,
  },
  option: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  selectedText: {
    color: "#fff",
  },
});
