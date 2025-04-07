import CustomInput from "@/components/CustomInput";
import ImageUpload from "@/components/ImageUpload";
import { removeData } from "@/services/storage";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LocationMap from "../components/LocationMap";
import { LocationBox } from "../components/buttons/botao-localizacao";
import Cabecalho from "../components/header/cabecalho";

export default function MeusDados() {
  const [name, setName] = useState("Maria Alcântara");
  const [email, setEmail] = useState("maria.alcantara@gmail.com");
  const [phone, setPhone] = useState("(11) 99999-9999");
  const [localization, setLocalization] = useState("Local: Uberlândia/MG");

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
                location="Uberlândia/MG"
                onEdit={() => console.log("Editar localização")}
              />
            </View>
          </View>

          <View style={styles.mapSection}>
            <Text style={styles.sectionTitle}>Localização</Text>
            <LocationMap
              address="Rua Central"
              number="100"
              neighborhood="Novo Horizonte"
              city="Uberlândia"
              state="MG"
              remove
            />
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
    display: "flex",
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
  mapSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 12,
  },
  locationContainer: {
    flexDirection: "column",
    gap: 3,
    borderRadius: 12,
    marginBottom: 20,
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
