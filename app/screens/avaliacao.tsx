import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ImageUpload from "../../components/ImageUpload";
import { ImageButton } from "../components/buttons/botao-tracejado";
import * as ImagePicker from "expo-image-picker";

const AvaliacaoScreen = () => {
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const maxCharCount = 50;

  const pickImage = async (mode: "camera" | "gallery") => {
    let result;
    if (mode === "camera") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão para acessar a câmera é necessária!");
        return;
      }
      result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    } else {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão para acessar a galeria é necessária!");
        return;
      }
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    }

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRating = (value: number) => {
    setRating(value);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleRating(i)}
          style={styles.starContainer}
        >
          <Ionicons
            name={i <= rating ? "star" : "star-outline"}
            size={32}
            color="#F9B023"
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  const handleSubmit = () => {
    // Lógica para enviar a avaliação
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <Text style={styles.title}>Avaliação</Text>

            <View style={styles.sellerInfo}>
              <Text style={styles.sellerLabel}>Ofertante:</Text>
              <Image
                source={require("../../assets/images/seller-profile.jpg")}
                style={styles.sellerImage}
              />
              <Text style={styles.sellerName}>Miguel da Silva</Text>
              <Text style={styles.sellerLocation}>Uberlândia/MG</Text>
            </View>

            <View style={styles.starsContainer}>{renderStars()}</View>

            <View style={styles.commentContainer}>
              <Text style={styles.commentLabel}>
                Gostaria de deixar um comentário sobre sua experiência com o
                ofertante?
              </Text>
              <TextInput
                style={styles.commentInput}
                placeholder="Escreva aqui seu comentário..."
                multiline
                value={comment}
                onChangeText={setComment}
                maxLength={maxCharCount}
              />
              <Text style={styles.charCount}>
                {maxCharCount - comment.length} caracteres
              </Text>
            </View>

            <View style={styles.imageUploadArea}>
              <ImageButton
                source={require("../../assets/images/image-buttons/image-icon.png")}
                onPress={() => pickImage("gallery")}
              />
              <ImageButton
                source={require("../../assets/images/image-buttons/camera-icon.png")}
                onPress={() => pickImage("camera")}
              />
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.submitButtonText}>Enviar avaliação</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={24} color="#777" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="search-outline" size={24} color="#777" />
          <Text style={styles.tabLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="copy-outline" size={24} color="#777" />
          <Text style={styles.tabLabel}>Publicações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]}>
          <Ionicons name="heart" size={24} color="#2A4BA0" />
          <Text style={styles.tabLabelActive}>Trocas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="menu-outline" size={24} color="#777" />
          <Text style={styles.tabLabel}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  sellerInfo: {
    alignItems: "center",
    marginBottom: 24,
  },
  sellerLabel: {
    fontSize: 14,
    color: "#8B96A0",
    marginBottom: 8,
  },
  sellerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  sellerLocation: {
    fontSize: 14,
    color: "#8B96A0",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  starContainer: {
    paddingHorizontal: 4,
  },
  commentContainer: {
    marginBottom: 24,
  },
  commentLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  commentInput: {
    height: 80,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 4,
  },
  charCount: {
    fontSize: 12,
    color: "#8B96A0",
    textAlign: "right",
  },
  photoSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 32,
  },
  photoContainer: {
    marginHorizontal: 12,
    transform: [{ scale: 0.65 }],
  },
  submitButton: {
    backgroundColor: "#2A4BA0",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  tabItemActive: {
    borderTopWidth: 2,
    borderTopColor: "#2A4BA0",
  },
  tabLabel: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  tabLabelActive: {
    fontSize: 12,
    color: "#2A4BA0",
    marginTop: 2,
    fontWeight: "bold",
  },
  imageUploadArea: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    paddingBottom: 32,
  },
});

export default AvaliacaoScreen;
