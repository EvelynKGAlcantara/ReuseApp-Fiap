import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ItemCard } from "../components/cards/card-produto";
import { router } from "expo-router";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUri: string;
  rating: number;
}

const products: Product[] = [
  {
    id: "1",
    title: "Camiseta M, algodão",
    description:
      "Tá novinha. Terminei com a namorada e preciso trocar por outra.",
    imageUri:
      "https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F3200270%2FKG99-N10SI-C1.jpg%3Fv%3D638775811091870000&w=1440&q=100",
    rating: 4.5,
  },
  {
    id: "2",
    title: "Jaqueta jeans, G",
    description: "Pouco usada. Estilo vintage, perfeita pro friozinho.",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgmTkWAqu2gAwcWWC-Qpt03yaZ8tIKB-hGA&s.jpg",
    rating: 4.5,
  },
  {
    id: "3",
    title: "Vestido floral P",
    description: "Usado uma vez só no casamento da prima.",
    imageUri:
      "https://images.tcdn.com.br/img/img_prod/798207/vestido_lais_chiffon_floral_soltinho_manga_laco_e_rendas_verde_menta_3251_1_95f9f171d5986676aa584509527bb3e8.jpg",
    rating: 5.0,
  },
];

export default function CategoriaProduto() {
  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={goToDetails}>
      <ItemCard
        imageSource={{ uri: item.imageUri }}
        ratingComponent={
          <>
            {[...Array(Math.floor(item.rating))].map((_, index) => (
              <Ionicons key={index} name="star" size={16} color="gold" />
            ))}
            {item.rating % 1 !== 0 && (
              <Ionicons name="star-half" size={16} color="gold" />
            )}
            <Text style={{ marginLeft: 5 }}>{item.rating}/5</Text>
          </>
        }
        title={item.title}
        description={item.description}
      />
    </TouchableOpacity>
  );

  const goToDetails = () => {
    router.push("/screens/product-details");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Re<Text style={{ color: "#FDB813" }}>Use</Text>
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.categoryTitle}>Roupas</Text>
        <Text style={styles.categorySubtitle}>
          Existem {products.length} anúncios para esta categoria na sua região
        </Text>

        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22408C",
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  content: {
    backgroundColor: "#FFF",
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  categoryTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  categorySubtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  list: {
    paddingBottom: 40,
  },
});
