import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import LocationMap from './components/LocationMap';

const ProductDetailsScreen = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Ionicons
        key={`star-${index}`}
        name={index < Math.floor(rating) ? 'star' : 'star-outline'}
        size={14}
        color="#F9B023"
        style={{ marginRight: 1 }}
      />
    ));
  };

  const renderRatingBar = (percentage: number) => {
    return (
      <View style={styles.ratingBarContainer}>
        <View style={[styles.ratingBar, { width: `${percentage}%` }]} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2A4BA0" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ReUse</Text>
        <TouchableOpacity onPress={handleFavorite} style={styles.headerButton}>
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color="#fff" 
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Product Image Container */}
        <View style={styles.productImageContainer}>
          <Image
            source={require('../assets/images/just-walk.jpg')}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* Product Rating */}
        <View style={styles.ratingContainer}>
          {renderStars(4.5)}
          <Text style={styles.ratingText}>4.5</Text>
        </View>

        {/* Product Title */}
        <Text style={styles.productTitle}>Gradient Graphic T-shirt</Text>
        <Text style={styles.productDescription}>
          Camiseta com estampa gradiente colorida e perfeita para seu estilo.
        </Text>

        {/* Seller Info */}
        <View style={styles.sellerContainer}>
          <Image
            source={require('../assets/images/seller-profile.jpg')}
            style={styles.sellerImage}
          />
          <Text style={styles.sellerName}>Miguel da Silva</Text>
        </View>

        {/* Location Map */}
        <View style={styles.mapSection}>
          <Text style={styles.sectionTitle}>Localização do ofertante</Text>
          <LocationMap
            address="Rua Central"
            number="100"
            neighborhood="Novo Horizonte"
            city="Uberlândia"
            state="MG"
          />
        </View>

        {/* Seller Ratings */}
        <View style={styles.ratingsSection}>
          <Text style={styles.sectionTitle}>Avaliações do Ofertante</Text>
          <View style={styles.overallRating}>
            <Text style={styles.overallRatingNumber}>4,9</Text>
            <View style={styles.starsContainer}>
              {renderStars(4.9)}
            </View>
          </View>

          {/* Rating Bars */}
          <View style={styles.ratingBars}>
            {[90, 75, 50, 25, 10].map((percentage, index) => (
              <View key={`rating-${5-index}`} style={styles.ratingRow}>
                <Text style={styles.ratingNumber}>{5-index}</Text>
                {renderRatingBar(percentage)}
                <Text style={styles.ratingPercentage}>{percentage}%</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity 
          style={styles.messageButton}
          activeOpacity={0.7}
        >
          <Text style={styles.messageButtonText}>Mandar Mensagem</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.offerButton}
          activeOpacity={0.7}
        >
          <Text style={styles.offerButtonText}>Quero trocar (fazer oferta)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2A4BA0',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  productImageContainer: {
    width: '100%',
    height: 320,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  ratingText: {
    marginLeft: 4,
    color: '#F9B023',
    fontSize: 13,
    fontWeight: '600',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 13,
    color: '#666666',
    paddingHorizontal: 16,
    marginBottom: 12,
    lineHeight: 18,
  },
  sellerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sellerImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  sellerName: {
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  mapSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  ratingsSection: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  overallRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  overallRatingNumber: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A1A1A',
    marginRight: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingBars: {
    gap: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ratingNumber: {
    width: 16,
    fontSize: 13,
    color: '#666666',
    textAlign: 'center',
  },
  ratingBarContainer: {
    flex: 1,
    height: 6,
    backgroundColor: '#F0F0F0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  ratingBar: {
    height: '100%',
    backgroundColor: '#F9B023',
  },
  ratingPercentage: {
    width: 32,
    fontSize: 13,
    color: '#666666',
    textAlign: 'right',
  },
  bottomButtons: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    gap: 8,
  },
  messageButton: {
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2A4BA0',
    alignItems: 'center',
  },
  messageButtonText: {
    color: '#2A4BA0',
    fontSize: 15,
    fontWeight: '600',
  },
  offerButton: {
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#2A4BA0',
    alignItems: 'center',
  },
  offerButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ProductDetailsScreen; 