import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Cabecalho from "../components/header/cabecalho";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { ImageButton } from "../components/buttons/botao-tracejado";

export default function PublicarItem() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState<string | null>(null);

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

              <CustomInput
                label="Categoria"
                size="md"
                placeholder="Selecione"
                value={category}
                onChangeText={setCategory}
              />

              <CustomInput
                label="Estado de conservação"
                size="md"
                placeholder="Selecione"
                value={state}
                onChangeText={setState}
              />
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
                  onPress={() => alert("Botão Pressionado!")}
                  backgroundColor="transparent"
                  borderColor="#2A4BA0"
                  textColor="#2A4BA0"
                />
              </View>

              <View style={styles.buttonStyle}>
                <CustomButton
                  title="Publicar"
                  onPress={() => alert("Botão Pressionado!")}
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
    backgroundColor: "#f5f5f5",
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
});
