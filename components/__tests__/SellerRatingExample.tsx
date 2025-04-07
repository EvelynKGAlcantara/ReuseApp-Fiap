import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import SellerRating from '../SellerRating';

const SellerRatingExample = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-4">
        <Text className="text-xl font-bold mb-4">Exemplo de Avaliação</Text>
        <SellerRating 
          rating={4.9}
          maxRating={5}
          totalRatings={83}
          ratingDistribution={{
            star5: 80,
            star4: 12,
            star3: 5,
            star2: 3,
            star1: 0,
          }}
          salesEvaluated={47}
        />
      </View>
    </ScrollView>
  );
};

export default SellerRatingExample; 