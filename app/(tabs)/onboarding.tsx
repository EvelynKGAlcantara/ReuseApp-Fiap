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
import CustomButton from "@/components/CustomButton";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Tem algo aí sem uso? Que tal trocar com alguém?",
    subtitle:
      "Conectamos pessoas para dar um novo destino ao que está parado. Troque, reutilize e consuma com consciência.",
  },
  {
    id: "2",
    title: "Menos resíduos, mais futuro",
    subtitle: "Juntos, podemos reduzir o impacto no planeta. Vamos nessa?",
  },
  {
    id: "3",
    title: "Conecte, compartilhe, fortaleça",
    subtitle:
      "Impulsione sua comunidade, faça trocas e conheça pessoas incríveis no caminho.",
  },
];

export default function OnboardingScreen() {
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
      {/* Parte de cima: FlatList */}
      <View style={styles.topContent}>
        <FlatList
          ref={flatListRef}
          data={slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          )}
        />
      </View>

      {/* Parte de baixo fixa: indicadores + botões */}
      <View style={styles.bottomArea}>
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

        <View style={styles.buttonArea}>
          <View>
            <CustomButton
              title="Pular"
              onPress={() => alert("Botão Pressionado!")}
              borderColor="#FFFFFF"
              backgroundColor="#FFFFFF"
              textColor="#2A4BA0"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22408C",
  },
  topContent: {
    flex: 1,
  },
  slide: {
    width: width,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "left",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "left",
    fontWeight: "200",
    marginTop: 20,
  },
  bottomArea: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 340,
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
    width: 35,
  },
  buttonArea: {
    gap: 12,
  },
});
