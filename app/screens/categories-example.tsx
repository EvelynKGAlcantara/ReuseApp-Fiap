import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CategoryList, {
  shortNameCategories,
  tinyNameCategories,
} from "../../components/CategoryList";
import Theme from "../../constants/Theme";

// Categoria tipo para definir tipos personalizados para o exemplo
type Category = {
  id: string;
  name: string;
  iconName: string;
  color?: string;
};

export default function CategoriesExampleScreen() {
  // Função para lidar com o clique em uma categoria
  const handleCategoryPress = (category: Category) => {
    Alert.alert(
      "Categoria selecionada",
      `Você selecionou a categoria: ${category.name}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  // Categorias conforme mostradas na imagem
  const mainCategories: Category[] = [
    {
      id: "1",
      name: "Roupas",
      iconName: "shirt-outline",
      color: Theme.colors.primary[600],
    },
    {
      id: "2",
      name: "Casa",
      iconName: "home-outline",
      color: Theme.colors.primary[600],
    },
    {
      id: "3",
      name: "Calçados",
      iconName: "footsteps-outline",
      color: Theme.colors.primary[600],
    },
    {
      id: "4",
      name: "Acessórios",
      iconName: "glasses-outline",
      color: Theme.colors.primary[600],
    },
    {
      id: "5",
      name: "Outros",
      iconName: "bag-handle-outline",
      color: Theme.colors.primary[600],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Layout Original</Text>
        <CategoryList
          categories={mainCategories}
          title="Categorias"
          onCategoryPress={handleCategoryPress}
        />

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>Nomes Curtos</Text>
        <CategoryList
          categories={shortNameCategories}
          title="Categorias"
          onCategoryPress={handleCategoryPress}
        />

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>Nomes Ultra Curtos</Text>
        <CategoryList
          categories={tinyNameCategories}
          title="Categorias"
          onCategoryPress={handleCategoryPress}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.gray[100],
  },
  content: {
    padding: 16,
    paddingTop: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Theme.colors.gray[700],
    marginBottom: 8,
    marginLeft: 16,
  },
  separator: {
    height: 24,
  },
});
