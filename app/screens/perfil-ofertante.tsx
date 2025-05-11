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
import LocationMap from "../components/LocationMap";
import { SearchWithFilter } from "../components/buttons/busca-filtragem";

// Definição do tipo Categoria
type Categoria = {
  id: number;
  nome: string;
  icone: string;
  cor?: string;
};

export default function PerfilScreen() {
  const handleLogout = () => {
    router.replace("/login");
  };
  const goToSearch = () => {
    router.push("/(tabs)/busca");
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
          name={
            i <= Math.floor(rating)
              ? "star"
              : i <= rating
              ? "star-half"
              : "star-outline"
          }
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
            <Image
              source={require("../../assets/images/seller-profile.jpg")}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileLabel}>Olá eu sou</Text>
              <Text style={styles.profileName}>Miguel da Silva</Text>
              <Text style={styles.profileLocation}>Uberlândia/MG</Text>
            </View>
          </View>

          <Text style={styles.profileTitle}>Perfil</Text>
          <Text style={styles.profileDescription}>
            Estes são os anúncios de Miguel
          </Text>

          {/* Categorias */}
          <Text style={styles.sectionTitle}>Categorias</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriasContainer}
          >
            {categorias.map((categoria) => (
              <TouchableOpacity key={categoria.id} style={styles.categoriaItem}>
                <View style={styles.categoriaIcone}>
                  <Ionicons
                    name={categoria.icone as any}
                    size={20}
                    color="#2A4BA0"
                  />
                </View>
                <Text style={styles.categoriaNome}>{categoria.nome}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Barra de pesquisa */}
          <View style={styles.filtercontent}>
            <SearchWithFilter
              onSearchChange={(text) => console.log("Busca:", text)}
              onFilterPress={goToSearch}
            />
          </View>

          {/* Seção Para sua casa */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Para sua casa</Text>
            <TouchableOpacity
              style={styles.productCardLarge}
              activeOpacity={0.8}
              onPress={() => router.push("/detalhes-produto")}
            >
              <Image
                source={require("../../assets/images/sofa.png")}
                style={styles.productImageLarge}
                resizeMode="cover"
              />
              <View style={styles.productInfo}>
                <View style={styles.productRating}>{renderStars(4.5)}</View>
                <Text style={styles.productTitle}>
                  Gradient Graphic T-shirt
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Seção Outros */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Outros</Text>
            <TouchableOpacity
              style={styles.productCardLarge}
              activeOpacity={0.8}
              onPress={() => router.push("/detalhes-produto")}
            >
              <Image
                source={require("../../assets/images/bag.png")}
                style={styles.productImageLarge}
                resizeMode="cover"
              />
              <View style={styles.productInfo}>
                <View style={styles.productRating}>{renderStars(4.0)}</View>
                <Text style={styles.productTitle}>
                  Gradient Graphic T-shirt
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Seção Localização */}
          <View style={styles.section}>
            <LocationMap
              address="Rua Central"
              number="100"
              neighborhood="Bairro Novo Horizonte"
              city="Uberlândia"
              state="MG"
            />
          </View>

          {/* Seção Avaliações */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Avaliações do Ofertante</Text>
            <View style={styles.ratingsCard}>
              <View style={styles.ratingSummary}>
                <Text style={styles.ratingNumber}>4,9</Text>
                <View style={styles.ratingStarsLarge}>{renderStars(4.9)}</View>
              </View>

              <View style={styles.ratingBars}>
                {[
                  { stars: 5, percentage: 80 },
                  { stars: 4, percentage: 12 },
                  { stars: 3, percentage: 5 },
                  { stars: 2, percentage: 3 },
                  { stars: 1, percentage: 0 },
                ].map((item, index) => (
                  <View key={index} style={styles.ratingBarRow}>
                    <Text style={styles.ratingBarLabel}>{item.stars}</Text>
                    <View style={styles.ratingBarContainer}>
                      <View
                        style={[
                          styles.ratingBar,
                          { width: `${item.percentage}%` },
                        ]}
                      />
                    </View>
                    <Text style={styles.ratingBarPercentage}>
                      {item.percentage}%
                    </Text>
                  </View>
                ))}
              </View>

              <Text style={styles.totalRatings}>47 vendas avaliadas</Text>
            </View>
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
    paddingBottom: 32,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
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
  profileTitle: {
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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1B262E",
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 8,
  },
  categoriasContainer: {
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 16,
  },
  categoriaItem: {
    alignItems: "center",
    marginRight: 24,
  },
  categoriaIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "#E4E9F2",
  },
  categoriaNome: {
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
    marginBottom: 20,
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
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 8,
  },
  productImageLarge: {
    width: "100%",
    height: 180,
    backgroundColor: "#f8f9fb",
  },
  productInfo: {
    padding: 10,
  },
  productRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  starsContainer: {
    flexDirection: "row",
  },
  ratingText: {
    fontSize: 12,
    color: "#F9B023",
    marginLeft: 4,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1B262E",
    marginTop: 2,
  },
  ratingsCard: {
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 12,
  },
  ratingSummary: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  ratingNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1B262E",
    marginRight: 8,
  },
  ratingStarsLarge: {
    flexDirection: "row",
  },
  ratingBars: {
    marginBottom: 12,
  },
  ratingBarRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  ratingBarLabel: {
    width: 16,
    fontSize: 12,
    color: "#8B96A0",
    textAlign: "center",
  },
  ratingBarContainer: {
    flex: 1,
    height: 6,
    backgroundColor: "#F1F1F1",
    borderRadius: 3,
    marginHorizontal: 8,
  },
  ratingBar: {
    height: "100%",
    backgroundColor: "#F9B023",
    borderRadius: 3,
  },
  ratingBarPercentage: {
    width: 30,
    fontSize: 12,
    color: "#8B96A0",
    textAlign: "right",
  },
  totalRatings: {
    fontSize: 12,
    color: "#8B96A0",
    textAlign: "right",
  },
  filtercontent: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
});
