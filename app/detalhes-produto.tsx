import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Header } from '../components/Header';
import LocationMap from './components/LocationMap';

const DetalhesProdutoScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = (rating: number) => {
    return (
      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <Ionicons
            key={`star-${index}`}
            name={index < Math.floor(rating) ? 'star' : index < rating ? 'star-half' : 'star-outline'}
            size={14}
            color="#F9B023"
            style={{ marginRight: 2 }}
          />
        ))}
      </View>
    );
  };

  const renderRatingBar = (percentage: number, starCount: number) => {
    return (
      <View style={styles.ratingRow}>
        <Text style={styles.ratingNumber}>{starCount}</Text>
        <View style={styles.ratingBarContainer}>
          <View style={[styles.ratingBar, { width: `${percentage}%` }]} />
        </View>
        <Text style={styles.ratingPercentage}>{percentage}%</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2A4BA0" />
      
      <View style={styles.headerButtonsContainer}>
        <View style={{ width: 40 }} />
        <TouchableOpacity onPress={handleFavorite} style={styles.heartButton}>
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color="#F00" 
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
          <Text style={styles.ratingText}>4.5/5</Text>
        </View>

        {/* Product Title */}
        <Text style={styles.productTitle}>Gradient Graphic T-shirt</Text>
        <Text style={styles.productDescription}>
          Tá novinha. Terminal com a naminada e preciso trocar por outra. Esse é o motivo.
        </Text>

        {/* Seller Info */}
        <View style={styles.sellerContainer}>
          <Text style={styles.oferenteLabel}>Oferente:</Text>
          <View style={styles.sellerInfo}>
            <Image
              source={require('../assets/images/seller-profile.jpg')}
              style={styles.sellerImage}
            />
            <View>
              <Text style={styles.sellerName}>Miguel da Silva</Text>
              <Text style={styles.sellerLocation}>Uberlândia/MG</Text>
            </View>
          </View>
        </View>

        {/* Location Map */}
        <View style={styles.mapSection}>
          <LocationMap
            address="Rua Central"
            number="100"
            neighborhood="Bairro Novo Horizonte"
            city="Uberlândia"
            state="MG"
          />
        </View>

        {/* Seller Ratings */}
        <View style={styles.ratingsSection}>
          <Text style={styles.sectionTitle}>Avaliações do Ofertante</Text>
          <View style={styles.ratingsSummary}>
            <View style={styles.overallRating}>
              <Text style={styles.overallRatingNumber}>4.9</Text>
              <Text style={styles.ratingOutOf}>de 5</Text>
            </View>
            <View style={styles.starsRatingContainer}>
              {renderStars(4.9)}
            </View>
          </View>

          {/* Rating Bars */}
          <View style={styles.ratingBars}>
            {renderRatingBar(80, 5)}
            {renderRatingBar(12, 4)}
            {renderRatingBar(5, 3)}
            {renderRatingBar(3, 2)}
            {renderRatingBar(0, 1)}
          </View>
          
          <Text style={styles.totalRatings}>47 vendas avaliadas</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  heartButton: {
    width: 40, 
    height: 40, 
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  productImageContainer: {
    width: '100%',
    height: 250,
    backgroundColor: '#F8F9FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  productImage: {
    width: '90%',
    height: '90%',
    backgroundColor: '#F8F9FB',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 0,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingTop: 8,
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 13,
    color: '#666666',
    paddingHorizontal: 16,
    marginBottom: 16,
    lineHeight: 18,
  },
  oferenteLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666666',
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  sellerContainer: {
    marginBottom: 16,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
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
  sellerLocation: {
    fontSize: 12,
    color: '#666666',
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
    paddingBottom: 100,
  },
  ratingsSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  overallRating: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginRight: 16,
  },
  overallRatingNumber: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  ratingOutOf: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
  starsRatingContainer: {
    marginTop: 4,
  },
  ratingBars: {
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingNumber: {
    width: 15,
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginRight: 8,
  },
  ratingBarContainer: {
    flex: 1,
    height: 6,
    backgroundColor: '#EEEEEE',
    borderRadius: 3,
    marginRight: 8,
    overflow: 'hidden',
  },
  ratingBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  ratingPercentage: {
    width: 30,
    fontSize: 12,
    color: '#666666',
    textAlign: 'right',
  },
  totalRatings: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'right',
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    flexDirection: 'column',
    gap: 8,
  },
  messageButton: {
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#2A4BA0',
    alignItems: 'center',
  },
  messageButtonText: {
    color: '#2A4BA0',
    fontSize: 14,
    fontWeight: '600',
  },
  offerButton: {
    backgroundColor: '#2A4BA0',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  offerButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default DetalhesProdutoScreen;
