import CustomInput from "@/components/CustomInput";
import ImageUpload from "@/components/ImageUpload";
import { removeData } from "@/services/storage";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LocationBox } from "../components/buttons/botao-localizacao";
import Cabecalho from "../components/header/cabecalho";

const GOOGLE_MAPS_API_KEY = "AIzaSyBFLLWPsj2lsutXtbG_MrDLroV6c5ZPkcA";

export default function MeusDados() {
  const [name, setName] = useState("Maria Alcântara");
  const [email, setEmail] = useState("maria.alcantara@gmail.com");
  const [phone, setPhone] = useState("(11) 99999-9999");
  const [localization, setLocalization] = useState("Local: Uberlândia/MG");
  const [selectedCoords, setSelectedCoords] = useState<null | {
    latitude: number;
    longitude: number;
  }>(null);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await removeData("@user_email");
      await removeData("@user_token");

      router.replace("/login");
    } catch (error) {
      console.error("Erro ao realizar o logout:", error);
    }
  };

  const reverseGeocode = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();

      if (data.status === "OK") {
        const address = data.results[0].formatted_address;
        setLocalization(`Local: ${address}`);
      } else {
        console.warn("Não foi possível obter o endereço:", data.status);
      }
    } catch (error) {
      console.error("Erro ao fazer reverse geocoding:", error);
    }
  };

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedCoords({ latitude, longitude });
    reverseGeocode(latitude, longitude);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.avatarContainer}>
            <ImageUpload />
          </View>

          <View style={styles.inputList}>
            <CustomInput
              label="Nome Completo"
              size="md"
              value={name}
              onChangeText={setName}
            />

            <CustomInput
              label="E-mail"
              size="md"
              value={email}
              onChangeText={setEmail}
            />

            <CustomInput
              label="Telefone de Contato"
              size="md"
              value={phone}
              onChangeText={setPhone}
            />

            <View style={styles.locationContainer}>
              <Text className="text-md">Localização</Text>
              <LocationBox
                location={localization.replace("Local: ", "")}
                onEdit={() => console.log("Editar localização")}
              />
            </View>
          </View>

          <View style={styles.mapSection}>
            <Text style={styles.sectionTitle}>
              Clique no mapa para definir sua localização
            </Text>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: -18.9146, // Uberlândia como ponto inicial
                longitude: -48.2754,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
              onPress={handleMapPress}
            >
              {selectedCoords && (
                <Marker coordinate={selectedCoords} title="Sua localização" />
              )}
            </MapView>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={24} color="white" />
            <Text style={styles.logoutButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 16,
  },
  content: {
    padding: 16,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  inputList: {
    width: "100%",
  },
  locationContainer: {
    flexDirection: "column",
    gap: 3,
    borderRadius: 12,
    marginBottom: 20,
  },
  mapSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 12,
  },
  map: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
