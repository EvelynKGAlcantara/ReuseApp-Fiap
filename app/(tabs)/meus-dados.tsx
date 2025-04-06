import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import Cabecalho from "../components/header/cabecalho";
import ImageUpload from "@/components/ImageUpload";
import CustomInput from "@/components/CustomInput";
import React, { useState } from "react";

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

            <CustomInput
              label="Localização"
              size="md"
              value={localization}
              onChangeText={setLocalization}
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
});
