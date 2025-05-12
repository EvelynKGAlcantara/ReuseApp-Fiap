import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Cabecalho from "../components/header/cabecalho";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { ImageButton } from "../components/buttons/botao-tracejado";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import ImageGallery from "../components/Unsplash";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function PublicarItem() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [unsplashQuery, setUnsplashQuery] = useState("");
  const [unsplashCategory, setUnsplashCategory] = useState("");
  const [showUnsplashResults, setShowUnsplashResults] = useState(false);

  const router = useRouter();

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
      setImages((prev) => [...prev, result.assets[0].uri]);
      setShowUnsplashResults(false);
    }
  };

  const handleUnsplashSelect = (url: string) => {
    setImages((prev) => [...prev, url]);
    setShowUnsplashResults(false);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const goBack = () => {
    router.back();
  };

  const goToPublications = () => {
    router.replace("/(tabs)/suas-publicacoes");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Publicar Item</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
          >
            <View style={styles.inputList}>
              <CustomInput
                label="Produto"
                size="md"
                placeholder="Nome do Produto (ex.: Tênis All Star)"
                value={productName}
                onChangeText={setProductName}
              />
              <CustomInput
                label="Valor de Compra (Opcional)"
                size="md"
                placeholder="Valor médio do produto (Ex:R$40,00)"
                value={productName}
                onChangeText={setProductName}
              />
              <CustomInput
                label="Descrição do Produto"
                size="md"
                placeholder="Descrição detalhada"
                value={productDescription}
                onChangeText={setProductDescription}
                style={styles.textBox}
              />

              <View style={{ marginBottom: 16 }}>
                <Text style={styles.label}>Categoria</Text>
                <View style={styles.pickerContainer}>
                  <Picker selectedValue={category} onValueChange={setCategory}>
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="Roupas" value="roupas" />
                    <Picker.Item label="Calçados" value="calcados" />
                    <Picker.Item label="Eletrônicos" value="eletronicos" />
                    <Picker.Item label="Livros" value="livros" />
                  </Picker>
                </View>
              </View>

              <View style={{ marginBottom: 16 }}>
                <Text style={styles.label}>Estado de conservação</Text>
                <View style={styles.pickerContainer}>
                  <Picker selectedValue={state} onValueChange={setState}>
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="Novo" value="novo" />
                    <Picker.Item label="Usado - Pouco uso" value="pouco_uso" />
                    <Picker.Item label="Usado - Muito uso" value="muito_uso" />
                  </Picker>
                </View>
              </View>

              <Text style={styles.label}>
                Faça upload de imagens do produto
              </Text>

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

              <Text style={styles.label}>
                Ou selecione uma imagem do Unsplash:
              </Text>
              <View style={{ marginBottom: 12 }}>
                <Text style={styles.label}>Categoria da imagem</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={unsplashCategory}
                    onValueChange={setUnsplashCategory}
                  >
                    <Picker.Item label="Nenhuma" value="" />
                    <Picker.Item label="Natureza" value="nature" />
                    <Picker.Item label="Tecnologia" value="technology" />
                    <Picker.Item label="Moda" value="fashion" />
                    <Picker.Item label="Animais" value="animals" />
                  </Picker>
                </View>
              </View>
              <View style={styles.searchRow}>
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar imagem (Ex.: Mesa Verde)"
                    placeholderTextColor="#888"
                    value={unsplashQuery}
                    onChangeText={setUnsplashQuery}
                  />
                  <TouchableOpacity
                    onPress={() => setShowUnsplashResults(true)}
                  >
                    <Ionicons name="search" size={24} color="#2A4BA0" />
                  </TouchableOpacity>
                </View>
              </View>

              {images.length > 0 && (
                <>
                  <Text style={styles.label}>Imagens Selecionadas</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {images.map((img, index) => (
                      <View key={index} style={{ marginRight: 10 }}>
                        <Image
                          source={{ uri: img }}
                          style={{ width: 120, height: 120, borderRadius: 10 }}
                        />
                        <TouchableOpacity
                          style={{ position: "absolute", top: 4, right: 4 }}
                          onPress={() => removeImage(index)}
                        >
                          <Feather name="trash-2" size={20} color="red" />
                        </TouchableOpacity>
                      </View>
                    ))}
                  </ScrollView>
                </>
              )}

              {showUnsplashResults && (
                <ImageGallery
                  query={unsplashQuery}
                  category={unsplashCategory}
                  onSelect={handleUnsplashSelect}
                />
              )}

              <Text style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
                Imagens do Unsplash aparecerão com a tag "Imagem Meramente
                Ilustrativa" aos usuários.
              </Text>

              <View style={styles.buttonStyle}>
                <CustomButton
                  title="Cancelar"
                  onPress={goBack}
                  backgroundColor="transparent"
                  borderColor="#2A4BA0"
                  textColor="#2A4BA0"
                />
              </View>

              <View style={styles.buttonStyle}>
                <CustomButton
                  title="Publicar"
                  onPress={goToPublications}
                  borderColor="#2A4BA0"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 16,
    display: "flex",
  },
  content: {
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputList: {
    width: "100%",
  },
  textBox: {
    height: 100,
  },
  buttonStyle: {
    paddingBottom: 12,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  imageUploadArea: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    paddingBottom: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  searchRow: {
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginRight: 8,
  },
});
