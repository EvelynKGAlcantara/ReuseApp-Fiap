import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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
    setModalVisible(false);
  };

  const removeImage = () => {
    setImage(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.imageContainer}
      >
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <FontAwesome name="camera" size={30} color="#555" />
        )}
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Selecione a imagem</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => pickImage("camera")}
            >
              <FontAwesome name="camera" size={24} color="#F9B023" />
              <Text style={styles.buttonText}>Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => pickImage("gallery")}
            >
              <FontAwesome name="image" size={24} color="#F9B023" />
              <Text style={styles.buttonText}>Galeria</Text>
            </TouchableOpacity>
            {image && (
              <TouchableOpacity
                style={styles.modalButton}
                onPress={removeImage}
              >
                <FontAwesome name="trash" size={24} color="red" />
                <Text style={styles.buttonText}>Remover</Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  modalButton: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: 80,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 12,
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ImageUpload;
