import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Cabecalho from "../components/header/cabecalho";

type Categoria = {
  id: number;
  nome: string;
  icone: any; // Icone do Ionicons
};

type Produto = {
  id: number;
  titulo: string;
  imagem: string;
  avaliacao: number;
  totalAvaliacoes: number;
  categoria: string;
};

const MinhasPublicacoesScreen = () => {
  const categorias: Categoria[] = [
    { id: 1, nome: "Roupas", icone: "shirt-outline" },
    { id: 2, nome: "Casa", icone: "home-outline" },
    { id: 3, nome: "Eletrônicos", icone: "laptop-outline" },
    { id: 4, nome: "Acessórios", icone: "watch-outline" },
    { id: 5, nome: "Outros", icone: "ellipsis-horizontal-outline" },
  ];

  const produtos: Produto[] = [
    {
      id: 1,
      titulo: "Gradient Graphic T-shirt",
      imagem:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      avaliacao: 4.5,
      totalAvaliacoes: 34,
      categoria: "Para sua casa",
    },
    {
      id: 2,
      titulo: "Gradient Graphic T-shirt",
      imagem:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      avaliacao: 4.0,
      totalAvaliacoes: 27,
      categoria: "Outros",
    },
    {
      id: 3,
      titulo: "Gradient Graphic T-shirt",
      imagem:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      avaliacao: 4.0,
      totalAvaliacoes: 19,
      categoria: "Outros",
    },
  ];

  const router = useRouter();

  const renderEstrelas = (avaliacao: number) => {
    const estrelas = [];
    const totalEstrelas = 5;

    for (let i = 1; i <= totalEstrelas; i++) {
      if (i <= avaliacao) {
        estrelas.push(
          <Ionicons key={i} name="star" size={12} color="#F9B023" />
        );
      } else if (i - 0.5 <= avaliacao) {
        estrelas.push(
          <Ionicons key={i} name="star-half" size={12} color="#F9B023" />
        );
      } else {
        estrelas.push(
          <Ionicons key={i} name="star-outline" size={12} color="#F9B023" />
        );
      }
    }

    return estrelas;
  };

  const handleNew = () => {
    router.push("/screens/publicar-item");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Suas publicações</Text>
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
              placeholder="Buscar por item (Ex.: Mesa Verde)"
              placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.addButton} onPress={handleNew}>
              <Ionicons name="add" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.secaoContainer}>
            <Text style={styles.secaoTitulo}>Para sua casa</Text>

            {produtos
              .filter((p) => p.categoria === "Para sua casa")
              .map((produto) => (
                <View key={produto.id} style={styles.produtoCard}>
                  <Image
                    source={{ uri: produto.imagem }}
                    style={styles.produtoImagem}
                  />
                  <View style={styles.produtoInfo}>
                    <View style={styles.avaliacaoContainer}>
                      <View style={styles.estrelas}>
                        {renderEstrelas(produto.avaliacao)}
                      </View>
                      <Text style={styles.avaliacaoTexto}>
                        {produto.avaliacao}
                      </Text>
                    </View>
                    <Text style={styles.produtoTitulo}>{produto.titulo}</Text>
                    <View style={styles.acoes}>
                      <TouchableOpacity>
                        <Ionicons
                          name="share-social-outline"
                          size={18}
                          color="#333"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Ionicons
                          name="create-outline"
                          size={18}
                          color="#333"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
          </View>

          <View style={styles.secaoContainer}>
            <Text style={styles.secaoTitulo}>Outros</Text>

            {produtos
              .filter((p) => p.categoria === "Outros")
              .map((produto) => (
                <View key={produto.id} style={styles.produtoCard}>
                  <Image
                    source={{ uri: produto.imagem }}
                    style={styles.produtoImagem}
                  />
                  <View style={styles.produtoInfo}>
                    <View style={styles.avaliacaoContainer}>
                      <View style={styles.estrelas}>
                        {renderEstrelas(produto.avaliacao)}
                      </View>
                      <Text style={styles.avaliacaoTexto}>
                        {produto.avaliacao}
                      </Text>
                    </View>
                    <Text style={styles.produtoTitulo}>{produto.titulo}</Text>
                    <View style={styles.acoes}>
                      <TouchableOpacity>
                        <Ionicons
                          name="share-social-outline"
                          size={18}
                          color="#333"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Ionicons
                          name="create-outline"
                          size={18}
                          color="#333"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#2A4BA0",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#222",
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
  secaoContainer: {
    marginBottom: 16,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#444",
  },
  produtoCard: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
      web: {
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
    }),
  },
  produtoImagem: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  produtoInfo: {
    padding: 12,
  },
  avaliacaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  estrelas: {
    flexDirection: "row",
    marginRight: 4,
  },
  avaliacaoTexto: {
    fontSize: 12,
    color: "#666",
  },
  produtoTitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  acoes: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  notificationButton: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FF3B30",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default MinhasPublicacoesScreen;
