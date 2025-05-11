import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ItemCard } from "../components/cards/card-produto";
import { router } from "expo-router";
import Cabecalho from "../components/header/cabecalho";
import { getCacheData, setCacheData } from "../../services/storage";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUri: string;
  rating: number;
}

export default function CategoriaProduto() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [categoryName, setCategoryName] = useState("Roupas");

  useEffect(() => {
    loadCategoryProducts();
  }, []);

  const loadCategoryProducts = async (forceRefresh = false) => {
    try {
      setError(null);
      const cacheKey = `@cache_category_${categoryName.toLowerCase()}`;
      
      if (!forceRefresh) {
        // Tenta carregar do cache primeiro
        const cachedProducts = await getCacheData(cacheKey);
        if (cachedProducts) {
          setProducts(cachedProducts);
          setLoading(false);
          return;
        }
      }

      // Se não houver cache ou forceRefresh for true, carrega da API
      const response = await fetch(`sua-api/categorias/${categoryName}`);
      if (!response.ok) {
        throw new Error('Erro ao carregar produtos da categoria');
      }
      
      const data = await response.json();
      
      // Salva no cache
      await setCacheData(cacheKey, data);
      setProducts(data);
    } catch (error) {
      console.error('Erro ao carregar produtos da categoria:', error);
      setError('Não foi possível carregar os produtos. Tente novamente.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    loadCategoryProducts(true);
  };

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

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#2A4BA0" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => loadCategoryProducts(true)}>
          <Text style={styles.retryButtonText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Cabecalho />
      <View style={styles.content}>
        <Text style={styles.categoryTitle}>{categoryName}</Text>
        <Text style={styles.categorySubtitle}>
          Existem {products.length} anúncios para esta categoria na sua região
        </Text>

        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={["#2A4BA0"]}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#22408C" },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  content: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
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
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#2A4BA0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
