import CustomButton from "@/components/CustomButton";
import DeliveryOptionCard from "@/components/DeliveryOption";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, FlatList } from "react-native";

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

const DeliverySelectionScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string>("home");

  const handleSelect = (id: string) => {
    setSelectedOption(id);
  };

  const handleEdit = (id: string) => {
    alert(`Editar opção: ${id}`);
  };

  return (
    <View style={{ padding: 16 }}>
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
      />

      <CustomButton
        title="Clique Aqui"
        onPress={() => alert("Botão Pressionado!")}
        icon={<Ionicons name="arrow-forward-outline" size={20} color="#fff" />}
      />

      <CustomButton
        title="Botão Azul"
        onPress={() => alert("Outro botão!")}
        backgroundColor="#1E88E5"
        borderColor="#1565C0"
        textColor="#fff"
        icon={<Ionicons name="arrow-forward-outline" size={20} color="#fff" />}
      />

      <CustomButton
        title="Botão Desativado"
        onPress={() => {}}
        backgroundColor="#CCC"
        textColor="#888"
        disabled
        icon={<Ionicons name="arrow-forward-outline" size={20} color="#fff" />}
      />
    </View>
  );
};

export default DeliverySelectionScreen;
