import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../constants/Theme';

type RatingBarProps = {
  percent: number;
  starNumber: number;
};

const RatingBar = ({ percent, starNumber }: RatingBarProps) => {
  return (
    <View style={styles.ratingBarContainer}>
      <Text style={styles.starNumberText}>{starNumber} <Ionicons name="star" size={10} color={Theme.colors.gray[600]} /></Text>
      <View style={styles.barBackground}>
        <View 
          style={[
            styles.barFill,
            { 
              width: `${percent}%`, 
              backgroundColor: starNumber >= 4 
                ? Theme.colors.accent[500] 
                : starNumber >= 3 
                  ? Theme.colors.accent[600] 
                  : Theme.colors.gray[500]
            }
          ]}
        />
      </View>
      <Text style={styles.percentText}>{percent}%</Text>
    </View>
  );
};

type SellerInfo = {
  name: string;
  location: string;
  profileImage?: string;
};

type SellerRatingProps = {
  sellerInfo: SellerInfo;
  rating?: number;
  maxRating?: number;
  totalRatings?: number;
  ratingDistribution?: {
    star5: number;
    star4: number;
    star3: number;
    star2: number;
    star1: number;
  };
  salesEvaluated?: number;
};

const SellerRating = ({
  sellerInfo = {
    name: "Miguel da Silva",
    location: "Uberlândia/MG",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  rating = 4.0,
  maxRating = 5,
  totalRatings = 83,
  ratingDistribution = {
    star5: 75,
    star4: 15,
    star3: 5,
    star2: 3,
    star1: 2,
  },
  salesEvaluated = 47,
}: SellerRatingProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= maxRating; i++) {
      if (i <= fullStars) {
        stars.push(<Ionicons key={i} name="star" size={24} color={Theme.colors.accent[500]} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Ionicons key={i} name="star-half" size={24} color={Theme.colors.accent[500]} />);
      } else {
        stars.push(<Ionicons key={i} name="star-outline" size={24} color={Theme.colors.gray[500]} />);
      }
    }
    
    return (
      <View style={styles.starsContainer}>{stars}</View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Avaliação</Text>
      
      <View style={styles.sellerContainer}>
        <View style={styles.sellerImageContainer}>
          {sellerInfo.profileImage ? (
            <Image 
              source={{ uri: sellerInfo.profileImage }} 
              style={styles.sellerImage} 
            />
          ) : (
            <View style={styles.sellerImagePlaceholder}>
              <Ionicons name="person" size={32} color={Theme.colors.gray[500]} />
            </View>
          )}
        </View>
        
        <View style={styles.sellerInfo}>
          <Text style={styles.sellerLabel}>Ofertante:</Text>
          <Text style={styles.sellerName}>{sellerInfo.name}</Text>
          <Text style={styles.sellerLocation}>{sellerInfo.location}</Text>
        </View>
      </View>
      
      <View style={styles.ratingsContainer}>
        {renderStars()}
      </View>
      
      <View style={styles.distributionContainer}>
        <RatingBar percent={ratingDistribution.star5} starNumber={5} />
        <RatingBar percent={ratingDistribution.star4} starNumber={4} />
        <RatingBar percent={ratingDistribution.star3} starNumber={3} />
        <RatingBar percent={ratingDistribution.star2} starNumber={2} />
        <RatingBar percent={ratingDistribution.star1} starNumber={1} />
      </View>
      
      <Text style={styles.salesText}>{salesEvaluated} vendas avaliadas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.gray[50],
    padding: 20,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: Theme.colors.gray[900],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.colors.gray[900],
    marginBottom: 20,
  },
  sellerContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  sellerImageContainer: {
    marginRight: 16,
  },
  sellerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Theme.colors.gray[100],
  },
  sellerImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Theme.colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  sellerInfo: {
    justifyContent: 'center',
  },
  sellerLabel: {
    fontSize: 14,
    color: Theme.colors.gray[600],
    marginBottom: 4,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: '500',
    color: Theme.colors.primary[600],
    marginBottom: 2,
  },
  sellerLocation: {
    fontSize: 14,
    color: Theme.colors.gray[600],
  },
  ratingsContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  ratingBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  starNumberText: {
    color: Theme.colors.gray[600],
    width: 20,
    marginRight: 8,
    fontSize: 12,
  },
  barBackground: {
    height: 8,
    flex: 1,
    backgroundColor: Theme.colors.gray[100],
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },
  percentText: {
    color: Theme.colors.gray[600],
    marginLeft: 8,
    width: 32,
    fontSize: 12,
    textAlign: 'right',
  },
  distributionContainer: {
    marginBottom: 16,
  },
  salesText: {
    fontSize: 12,
    color: Theme.colors.gray[600],
    textAlign: 'center',
  }
});

export default SellerRating; 