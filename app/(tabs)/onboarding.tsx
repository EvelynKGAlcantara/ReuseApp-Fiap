import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Tem algo por aí parado? Porque não troca com alguém?",
    subtitle:
      "Somos a plataforma brasileira de consumo consciente para trocar.",
  },
  {
    id: "2",
    title: "Reduzir os resíduos no mundo",
    subtitle: "Vamos cuidar do nosso planeta juntos!",
  },
  {
    id: "3",
    title: "Fortalecer a comunidade",
    subtitle: "Ajude sua comunidade a se desenvolver e conheça novas pessoas",
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
      <TouchableOpacity onPress={() => {}}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22408C",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: width,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "left",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "left",
    fontWeight: 200,
  },
  indicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 100,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#A9A9A9",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#FFF",
    width: 16,
  },
});
