import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  Text,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Header } from "../../components/Header";
import Cabecalho from "../components/header/cabecalho";

// Componente de categoria
type Categoria = {
  id: number;
  nome: string;
  icone: any; // Icone do Ionicons
};

export default function PerfilScreen() {
  const handleLogout = () => {
    router.replace("/login");
  };
  const categorias: Categoria[] = [
    { id: 1, nome: "Roupas", icone: "shirt-outline" },
    { id: 2, nome: "Casa", icone: "home-outline" },
    { id: 3, nome: "Eletrônicos", icone: "laptop-outline" },
    { id: 4, nome: "Acessórios", icone: "watch-outline" },
    { id: 5, nome: "Outros", icone: "ellipsis-horizontal-outline" },
  ];
  // Função para renderizar estrelas de avaliação
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= Math.floor(rating) ? "star" : "star-outline"}
          size={12}
          color="#F9B023"
          style={{ marginRight: 2 }}
        />
      );
    }
    return <View style={styles.starsContainer}>{stars}</View>;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Cabecalho />
      <StatusBar
        backgroundColor="#2A4BA0"
        barStyle="light-content"
        translucent={false}
      />
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Perfil do Usuário */}
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Image
                  source={require("../../assets/images/seller-profile.jpg")}
                  style={styles.avatarImage}
                />
              </View>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileLabel}>Olá eu sou</Text>
              <Text style={styles.profileName}>Miguel da Silva</Text>
              <Text style={styles.profileLocation}>Uberlândia/MG</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Perfil</Text>
          <Text style={styles.profileDescription}>
            Estes são os anúncios de Miguel
          </Text>

          {/* Categorias */}
          <Text style={styles.categoryHeading}>Categorias</Text>
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

          {/* Barra de pesquisa */}
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color="#8B96A0" />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por itens (Ex.: Tênis Nike)"
              placeholderTextColor="#8B96A0"
            />
            <TouchableOpacity>
              <Ionicons name="options-outline" size={20} color="#8B96A0" />
            </TouchableOpacity>
          </View>

          {/* Seção Para sua casa */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Para sua casa</Text>
            <View style={styles.productCardLarge}>
              <Image
                source={require("../../assets/images/sofa.png")}
                style={styles.productImageLarge}
              />
            </View>
          </View>

          {/* Seção Outros */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Outros</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.productsRow}
            >
              <TouchableOpacity style={styles.productCard} activeOpacity={0.7}>
                <View
                  style={[
                    styles.productImageContainer,
                    { backgroundColor: "#f0f0f0" },
                  ]}
                >
                  <Ionicons
                    name="briefcase-outline"
                    size={48}
                    color="#2A4BA0"
                  />
                </View>
                <View style={styles.productInfo}>
                  {renderStars(4.0)}
                  <Text style={styles.productTitle}>Bolsa de Couro</Text>
                  <Text style={styles.productLocation}>Rio de Janeiro, RJ</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.productCard} activeOpacity={0.7}>
                <View
                  style={[
                    styles.productImageContainer,
                    { backgroundColor: "#f0f0f0" },
                  ]}
                >
                  <Ionicons
                    name="footsteps-outline"
                    size={48}
                    color="#2A4BA0"
                  />
                </View>
                <View style={styles.productInfo}>
                  {renderStars(4.5)}
                  <Text style={styles.productTitle}>Tênis Esportivo</Text>
                  <Text style={styles.productLocation}>São Paulo, SP</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#2A4BA0",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatarImage: {
    width: 60,
    height: 60,
    resizeMode: "cover",
  },
  profileInfo: {
    flex: 1,
  },
  profileLabel: {
    fontSize: 12,
    color: "#8B96A0",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1B262E",
    marginVertical: 2,
  },
  profileLocation: {
    fontSize: 12,
    color: "#8B96A0",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B262E",
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  profileDescription: {
    fontSize: 14,
    color: "#8B96A0",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  categoriasContainer: {
    paddingBottom: 16,
    marginLeft: 17,
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
  categoryHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1B262E",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 16,
    width: 60,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  categoryLabel: {
    fontSize: 12,
    color: "#606D76",
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FB",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#1B262E",
    marginLeft: 8,
  },
  section: {
    marginBottom: 24,
  },
  productCardLarge: {
    marginHorizontal: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    overflow: "hidden",
    height: 180,
  },
  productImageLarge: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  productsRow: {
    paddingHorizontal: 16,
  },
  productCard: {
    width: 180,
    marginRight: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    ...(Platform.OS === "android"
      ? {
          elevation: 2,
        }
      : {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        }),
  },
  productImageContainer: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  productInfo: {
    padding: 12,
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1B262E",
    marginBottom: 4,
  },
  productLocation: {
    fontSize: 12,
    color: "#A9B4BC",
  },
});
