import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import LocationMap from './components/LocationMap';
import CategoryList from '../components/CategoryList';
import SellerRating from '../components/SellerRating';
import { ThemedText } from '../components/ThemedText';
import Theme from '../constants/Theme';

export default function ProfileScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleCategoryPress = (category: any) => {
    console.log('Categoria selecionada:', category.name);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Ionicons
        key={`star-${index}`}
        name={index < Math.floor(rating) ? 'star' : 'star-outline'}
        size={12}
        color="#F9B023"
        style={{ marginRight: 1 }}
      />
    ));
  };

  // Categorias personalizadas para o perfil
  const profileCategories = [
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
      name: 'Calçados',
      iconName: 'footsteps-outline',
      color: Theme.colors.primary[600],
    },
    {
      id: '4',
      name: 'Acessórios',
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

  const sellerInfo = {
    name: "Miguel da Silva",
    location: "Uberlândia/MG",
    profileImage: require('../assets/images/seller-profile.jpg'),
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2A4BA0" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>ReUse</ThemedText>
        <View style={styles.headerButton} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/images/seller-profile.jpg')}
            style={styles.profileImage}
          />
          <ThemedText style={styles.profileName}>Miguel da Silva</ThemedText>
          <ThemedText style={styles.profileStatus}>Membro desde 2023</ThemedText>
        </View>

        {/* Categories */}
        <CategoryList 
          categories={profileCategories}
          title="Categorias"
          onCategoryPress={handleCategoryPress}
        />

        {/* Para sua casa */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Para sua casa</ThemedText>
          <View style={styles.productCard}>
            <Image
              source={require('../assets/images/sofa.png')}
              style={styles.productImage}
              resizeMode="cover"
            />
            <View style={styles.productInfo}>
              {renderStars(4.5)}
              <ThemedText style={styles.productTitle}>Sofá 3 Lugares Cinza</ThemedText>
            </View>
          </View>
        </View>

        {/* Outros */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Outros</ThemedText>
          <View style={styles.productCard}>
            <Image
              source={require('../assets/images/bag.png')}
              style={styles.productImage}
              resizeMode="cover"
            />
            <View style={styles.productInfo}>
              {renderStars(4.5)}
              <ThemedText style={styles.productTitle}>Bolsa de Couro Preta</ThemedText>
            </View>
          </View>
        </View>

        {/* Location */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Localização do ofertante</ThemedText>
          <LocationMap
            address="Rua Central"
            number="100"
            neighborhood="Novo Horizonte"
            city="Uberlândia"
            state="MG"
          />
        </View>

        {/* Ratings usando o componente SellerRating */}
        <SellerRating
          sellerInfo={sellerInfo}
          rating={4.9}
          maxRating={5}
          totalRatings={83}
          ratingDistribution={{
            star5: 90,
            star4: 75,
            star3: 50,
            star2: 25,
            star1: 10,
          }}
          salesEvaluated={47}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.gray[50],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.colors.primary[600],
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  headerButton: {
    padding: 8,
    width: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: Theme.colors.gray[900],
    marginBottom: 4,
  },
  profileStatus: {
    fontSize: 14,
    color: Theme.colors.gray[600],
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Theme.colors.gray[900],
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  section: {
    marginBottom: 24,
  },
  productCard: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: Theme.colors.gray[900],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  productImage: {
    width: '100%',
    height: 200,
    backgroundColor: Theme.colors.gray[100],
  },
  productInfo: {
    padding: 12,
  },
  productTitle: {
    fontSize: 14,
    color: Theme.colors.gray[900],
    marginTop: 4,
  },
}); 