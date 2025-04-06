import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ItemCard } from "../components/cards/card-produto";
import { ToggleSwitch } from "../components/buttons/toggle-switch";
import Cabecalho from "../components/header/cabecalho";

type Categoria = {
  id: number;
  nome: string;
  icone: any;
};

export default function ProposalsScreen() {
  const [selected, setSelected] = useState("Propostas");
  const [checked, setChecked] = useState(false);

  const categorias: Categoria[] = [
    { id: 1, nome: "Roupas", icone: "shirt-outline" },
    { id: 2, nome: "Casa", icone: "home-outline" },
    { id: 3, nome: "Eletrônicos", icone: "laptop-outline" },
    { id: 4, nome: "Acessórios", icone: "watch-outline" },
    { id: 5, nome: "Outros", icone: "ellipsis-horizontal-outline" },
  ];

  const returnProposalTab = () => {
    return (
      <View>
        <Text style={styles.sectionTitle}>
          As seguintes ofertas foram feitas para você
        </Text>
        <Text style={styles.subTitle}>Propostas Aceitas</Text>
        <ItemCard
          imageSource={{
            uri: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          ratingComponent={
            <>
              {/* TODO: Trocar por componente criado pela Isabelle */}
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star-half" size={16} color="gold" />
              <Text style={{ marginLeft: 5 }}>4.5/5</Text>
            </>
          }
          title="Gradient Graphic T-shirt"
          status="PROPOSTA ACEITA"
          description="Tá novinha. Terminei com a namorada e preciso trocar por outra. Esse é o motivo."
          showCheckbox={false}
          checked={checked}
          onCheckChange={() => setChecked(!checked)}
        />
      </View>
    );
  };

  const returnOfferingsTab = () => {
    return (
      <View>
        <Text style={styles.sectionTitle}>Ofertas que você realizou</Text>

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

        <View style={styles.pesquisaContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.pesquisaInput}
            placeholder="Buscar por itens (Ex.: Tênis Nike)"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={22} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <Text style={styles.subTitle}>Ofertas</Text>
        <ItemCard
          imageSource={{
            uri: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          ratingComponent={
            <>
              {/* TODO: Trocar por componente criado pela Isabelle */}
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star-half" size={16} color="gold" />
              <Text style={{ marginLeft: 5 }}>4.5/5</Text>
            </>
          }
          title="Gradient Graphic T-shirt"
          status="PROPOSTA ACEITA"
          description="Tá novinha. Terminei com a namorada e preciso trocar por outra. Esse é o motivo."
          showCheckbox={false}
          checked={checked}
          onCheckChange={() => setChecked(!checked)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <ToggleSwitch
          options={["Propostas", "Suas ofertas"]}
          selectedOption={selected}
          onSelect={setSelected}
        />

        {selected === "Propostas" ? returnProposalTab() : returnOfferingsTab()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: { backgroundColor: "#4A80F0", padding: 16, alignItems: "center" },
  logo: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  tabContainer: { flexDirection: "row", justifyContent: "center", margin: 16 },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeTab: { backgroundColor: "#4A80F0" },
  tabText: { color: "#000", fontWeight: "bold" },
  content: { padding: 16 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardContent: { alignItems: "center" },
  ratingContainer: { flexDirection: "row", alignItems: "center" },
  rating: { fontSize: 14, marginLeft: 4, color: "#333" },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
  status: { color: "#4A80F0", fontWeight: "bold", marginTop: 4 },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#4A80F0",
    paddingVertical: 12,
  },
  navItem: { alignItems: "center" },
  navText: { color: "#fff", fontSize: 12, marginTop: 4 },
  separator: {
    height: 24,
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
  pesquisaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#f9f9f9",
  },
  searchIcon: {
    marginRight: 8,
  },
  pesquisaInput: {
    flex: 1,
    height: 40,
    fontSize: 13,
  },
  addButton: {
    backgroundColor: "#2A4BA0",
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
