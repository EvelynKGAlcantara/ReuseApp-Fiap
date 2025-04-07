import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Cabecalho from "../components/header/cabecalho";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { ImageButton } from "../components/buttons/botao-tracejado";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";

export default function PublicarItem() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState<string | null>(null);
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
      setImage(result.assets[0].uri);
    }
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
                label="Descrição do Produto"
                size="md"
                placeholder="Descrição (ex.: Tênis All Start número 35, em bom estado de conservação. Sem rasgos ou defeitos, com sola e costuras firmes)"
                value={productDescription}
                onChangeText={setProductDescription}
                style={styles.textBox}
              />

              <View style={{ marginBottom: 16 }}>
                <Text style={styles.label}>Categoria</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                  >
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="Roupas" value="roupas" />
                    <Picker.Item label="Calçados" value="calcados" />
                    <Picker.Item label="Eletrônicos" value="eletronicos" />
                    <Picker.Item label="Livros" value="livros" />
                    {/* Adicione mais categorias aqui */}
                  </Picker>
                </View>
              </View>
              <View style={{ marginBottom: 16 }}>
                <Text style={styles.label}>Estado de conservação</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={state}
                    onValueChange={(itemValue) => setState(itemValue)}
                  >
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="Novo" value="novo" />
                    <Picker.Item label="Usado - Pouco uso" value="pouco_uso" />
                    <Picker.Item label="Usado - Muito uso" value="muito_uso" />
                    <Picker.Item label="Para peças" value="pecas" />
                  </Picker>
                </View>
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
  placeholder: {
    color: "#A9A9A9",
    fontSize: 16,
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
});
