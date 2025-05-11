import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SellerRating from "../../components/SellerRating";
import Theme from "../../constants/Theme";

export default function RatingExampleScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Exemplo de Avaliações</Text>

        <SellerRating
          sellerInfo={{
            name: "Miguel da Silva",
            location: "Uberlândia/MG",
            profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
          }}
          rating={4.0}
          maxRating={5}
          totalRatings={83}
          ratingDistribution={{
            star5: 75,
            star4: 15,
            star3: 5,
            star2: 3,
            star1: 2,
          }}
          salesEvaluated={47}
        />

        <View style={styles.separator} />

        <SellerRating
          sellerInfo={{
            name: "Ana Carolina Mendes",
            location: "São Paulo/SP",
            profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
          }}
          rating={4.8}
          maxRating={5}
          totalRatings={125}
          ratingDistribution={{
            star5: 85,
            star4: 10,
            star3: 3,
            star2: 2,
            star1: 0,
          }}
          salesEvaluated={89}
        />

        <View style={styles.separator} />

        <SellerRating
          sellerInfo={{
            name: "João Pereira",
            location: "Rio de Janeiro/RJ",
            profileImage: "https://randomuser.me/api/portraits/men/67.jpg",
          }}
          rating={3.5}
          maxRating={5}
          totalRatings={42}
          ratingDistribution={{
            star5: 35,
            star4: 25,
            star3: 20,
            star2: 15,
            star1: 5,
          }}
          salesEvaluated={28}
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
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Theme.colors.primary[700],
    marginBottom: 20,
    marginTop: 10,
  },
  separator: {
    height: 24,
  },
});
