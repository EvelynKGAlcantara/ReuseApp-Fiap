import AvatarPicker from "@/components/ImageUpload";
import CustomButton from "@/components/CustomButton";
import DeliveryOptionCard from "@/components/DeliveryOption";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { router } from "expo-router";

const deliveryOptions = [
  {
    id: "home",
    label: "Minha Casa",
    description: "João da Silva, Avenida das Acácias, 789",
    iconName: "home-outline",
  },
  {
    id: "work",
    label: "Trabalho",
    description: "Rua do Escritório, 456",
    iconName: "briefcase-outline",
  },
  {
    id: "other",
    label: "Outro Endereço",
    description: "Adicionar um novo endereço",
    iconName: "location-outline",
  },
];

const shippingOptions = [
  {
    id: "correios",
    title: "Correios",
    price: "Grátis",
    delivery: "Entrega em 7 dias",
  },
  {
    id: "loggi",
    title: "Loggi",
    price: "R$7,90",
    delivery: "Entrega em 12 dias",
  },
  {
    id: "jadlog",
    title: "Jadlog",
    price: "R$17,90",
    delivery: "Entrega em 2 dias",
  },
];

const DeliverySelectionScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string>("home");
  const [selectedShipping, setSelectedShipping] = useState<string>("correios");

  const handleSelect = (id: string) => {
    setSelectedOption(id);
  };

  const handleEdit = (id: string) => {
    alert(`Editar opção: ${id}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <Text style={styles.titulo}>Forma de Entrega</Text>
        <View style={styles.headerRow}>
          <Image
            source={require("../../assets/images/images-telas/Caminhaozinho.png")}
            style={styles.iconInline}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.subtitle}>
              Selecione a melhor {"\n"}forma de envio {"\n"}para seu produto
            </Text>
          </View>
        </View>

        <FlatList
          data={deliveryOptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DeliveryOptionCard
              option={item}
              isSelected={selectedOption === item.id}
              onSelect={handleSelect}
              onEdit={handleEdit}
            />
          )}
          scrollEnabled={false}
        />

        <View style={styles.buttonArea}>
          <CustomButton
            title="Adicionar novo endereço"
            textColor="#000000"
            backgroundColor="#FFFFFF"
            borderColor="#CCCCCC"
            onPress={() => {}}
            icon={<Ionicons name="add" size={25} color="#000" />}
          />
        </View>

        <View style={styles.shippingContainer}>
          {shippingOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.shippingOption,
                selectedShipping === option.id && styles.shippingOptionSelected,
              ]}
              onPress={() => setSelectedShipping(option.id)}
            >
              <Ionicons
                name={
                  selectedShipping === option.id
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                size={20}
                color={selectedShipping === option.id ? "#22408C" : "#888"}
                style={{ marginRight: 12 }}
              />
              <View>
                <Text style={styles.shippingPrice}>
                  {option.price}{" "}
                  <Text style={styles.shippingLabel}>{option.title}</Text>
                </Text>
                <Text style={styles.shippingDelivery}>{option.delivery}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botões finais */}
        <View style={styles.buttonArea}>
          <CustomButton
            title="Cancelar"
            textColor="#22408C"
            backgroundColor="#FFFFFF"
            borderColor="#22408C"
            onPress={() => router.back()}
          />
          <CustomButton
            title="Finalizar negociação"
            onPress={() => router.push("/screens/avaliacao")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  iconInline: {
    width: 180,
    height: 180,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  addText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#000",
  },
  shippingContainer: {
    marginBottom: 24,
    marginTop: 24,
  },
  shippingOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
  },
  shippingOptionSelected: {
    borderColor: "#22408C",
    backgroundColor: "#F0F4FF",
  },
  shippingPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  shippingLabel: {
    fontWeight: "normal",
    color: "#333",
  },
  shippingDelivery: {
    fontSize: 14,
    color: "#666",
  },
  buttonArea: {
    gap: 12,
    marginTop: 14,
  },
});

export default DeliverySelectionScreen;
