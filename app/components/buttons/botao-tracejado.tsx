import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";

type ImageProps = {
  source: ImageSourcePropType | undefined;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export const ImageButton = ({ source, onPress }: ImageProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={source} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderStyle: "dashed",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  icon: {
    width: 30,
    height: 30,
    opacity: 0.6,
  },
});
