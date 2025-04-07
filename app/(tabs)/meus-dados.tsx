import { StyleSheet, View, SafeAreaView, ScrollView, Text } from "react-native";
import Cabecalho from "../components/header/cabecalho";
import ImageUpload from "@/components/ImageUpload";
import CustomInput from "@/components/CustomInput";
import React, { useState } from "react";
import LocationMap from "../components/LocationMap";
import { LocationBox } from "../components/buttons/botao-localizacao";

export default function MeusDados() {
  const [name, setName] = useState("Maria Alcântara");
  const [email, setEmail] = useState("maria.alcantara@gmail.com");
  const [phone, setPhone] = useState("(11) 99999-9999");
  const [localization, setLocalization] = useState("Local: Uberlândia/MG");

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
});
