import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ItemCard } from "../components/cards/card-produto";
import { LocationBox } from "../components/buttons/botao-localizacao";

type Categoria = {
  id: number;
  nome: string;
  icone: any;
};

const categorias: Categoria[] = [
  { id: 1, nome: "Roupas", icone: "shirt-outline" },
  { id: 2, nome: "Casa", icone: "home-outline" },
  { id: 3, nome: "Eletrônicos", icone: "laptop-outline" },
  { id: 4, nome: "Acessórios", icone: "watch-outline" },
  { id: 5, nome: "Outros", icone: "ellipsis-horizontal-outline" },
];

const categories = [
  {
    id: "1",
    name: "Roupas",
    icon: require("../../assets/images/images-telas/camiseta.jpg"),
  },
  {
    id: "2",
    name: "Casa",
    icon: require("../../assets/images/images-telas/camiseta.jpg"),
  },
  {
    id: "3",
    name: "Calçados",
    icon: require("../../assets/images/images-telas/camiseta.jpg"),
  },
  {
    id: "4",
    name: "Acessórios",
    icon: require("../../assets/images/images-telas/camiseta.jpg"),
  },
  {
    id: "5",
    name: "Outros",
    icon: require("../../assets/images/images-telas/camiseta.jpg"),
  },
];

const products = new Array(6).fill({
  title: "Gradient Graphic T-shirt",
  description: "Descrição do produto",
  imageUri: "../../assets/images/images-telas/camiseta.jpg",
  rating: 4.5,
});

export default function HomePage() {
  const renderItem = ({ item }: any) => (
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
  );

  const renderCategory = (title: string) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Ver todos</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(_, index) => `${title}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>
          Re<Text style={styles.brandAccent}>Use</Text>
        </Text>
        <Ionicons name="notifications-outline" size={24} color="#FFF" />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.greeting}>Olá, Henrique 👋</Text>

        <View style={styles.locationContainer}>
          <LocationBox
            location="Uberlândia/MG"
            onEdit={() => console.log("Editar localização")}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriasContainer}
        >
          {categorias.map((categoria) => (
            <TouchableOpacity key={categoria.id} style={styles.categoriaItem}>
              <View style={styles.categoriaIcone}>
                <Ionicons name={categoria.icone} size={20} color="#2A4BA0" />
              </View>
              <Text style={styles.categoriaNome}>{categoria.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            placeholder="Buscar por itens (Ex: Tênis Nike)"
            style={styles.searchInput}
          />
        </View>

        {renderCategory("Em destaque")}
        {renderCategory("Roupas")}
        {renderCategory("Para sua casa")}
        {renderCategory("Calçados")}
        {renderCategory("Outros")}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#22408C" },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: { fontSize: 22, fontWeight: "bold", color: "#FFF" },
  brandAccent: { color: "#FDB813" },
  content: {
    backgroundColor: "#FFF",
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    alignItems: "center",
    color: "#2A4BA0",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  locationText: { fontSize: 14, color: "#2A4BA0" },
  bold: { fontWeight: "bold" },
  categoriesList: { marginBottom: 20 },
  categoryItem: {
    alignItems: "center",
    marginRight: 16,
  },
  categoryIcon: { width: 60, height: 60, borderRadius: 30, marginBottom: 4 },
  categoryText: { fontSize: 12 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
  },
  section: { marginBottom: 30 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  viewAll: { color: "#22408C", fontSize: 14 },
  horizontalList: { gap: 16 },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#22408C",
  },
  categoriasContainer: {
    paddingBottom: 16,
  },
  categoriaItem: {
    alignItems: "center",
    marginRight: 16,
  },
  categoriaIcone: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  categoriaNome: {
    fontSize: 12,
    color: "#555",
  },
});
