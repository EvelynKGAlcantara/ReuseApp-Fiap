import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../constants/Theme';

type Category = {
  id: string;
  name: string;
  iconName: string; // Nome do ícone do Ionicons
  color?: string; // Cor opcional para o ícone
};

type CategoryItemProps = {
  category: Category;
  onPress?: (category: Category) => void;
};

const CategoryItem = ({ category, onPress }: CategoryItemProps) => {
  return (
    <TouchableOpacity 
      style={styles.categoryItem} 
      onPress={() => onPress && onPress(category)}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Ionicons 
          name={category.iconName as any} 
          size={28} 
          color={category.color || Theme.colors.gray[800]} 
        />
      </View>
      <Text 
        style={styles.categoryName}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

type CategoryListProps = {
  categories?: Category[];
  title?: string;
  onCategoryPress?: (category: Category) => void;
};

const CategoryList = ({ 
  categories = defaultCategories,
  title = "Categorias",
  onCategoryPress,
}: CategoryListProps) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.categoriesRow}>
        {categories.map((category) => (
          <CategoryItem 
            key={category.id} 
            category={category} 
            onPress={onCategoryPress}
          />
        ))}
      </View>
    </View>
  );
};

// Categorias padrão conforme a imagem
const defaultCategories: Category[] = [
  {
    id: '1',
    name: 'Roupas',
    iconName: 'shirt-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '2',
    name: 'Casa',
    iconName: 'home-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '3',
    name: 'Calçado',
    iconName: 'footsteps-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '4',
    name: 'Acessório',
    iconName: 'watch-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '5',
    name: 'Outros',
    iconName: 'bag-handle-outline',
    color: Theme.colors.primary[600],
  },
];

// Versão alternativa com nomes mais curtos
export const shortNameCategories: Category[] = [
  {
    id: '1',
    name: 'Roupas',
    iconName: 'shirt-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '2',
    name: 'Casa',
    iconName: 'home-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '3',
    name: 'Calçado',
    iconName: 'footsteps-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '4',
    name: 'Acess',
    iconName: 'glasses-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '5',
    name: 'Outros',
    iconName: 'bag-handle-outline',
    color: Theme.colors.primary[600],
  },
];

// Versão com nomes ultracurtos para dispositivos pequenos
export const tinyNameCategories: Category[] = [
  {
    id: '1',
    name: 'Roupa',
    iconName: 'shirt-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '2',
    name: 'Casa',
    iconName: 'home-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '3',
    name: 'Sapato',
    iconName: 'footsteps-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '4',
    name: 'Acess',
    iconName: 'glasses-outline',
    color: Theme.colors.primary[600],
  },
  {
    id: '5',
    name: 'Outros',
    iconName: 'bag-handle-outline',
    color: Theme.colors.primary[600],
  },
];

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.colors.gray[900],
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  categoryItem: {
    alignItems: 'center',
    paddingHorizontal: 2,
    width: '18%', // Reduzindo para dar mais espaço entre os itens
  },
  iconContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: Theme.colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 1,
    ...Platform.select({
      ios: {
        shadowColor: Theme.colors.gray[600],
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
      web: {
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
      },
    }),
  },
  categoryName: {
    fontSize: 10,
    color: Theme.colors.gray[800],
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 4,
    paddingHorizontal: 2,
    minHeight: 24,
    letterSpacing: -0.3,
  },
});

export default CategoryList; 