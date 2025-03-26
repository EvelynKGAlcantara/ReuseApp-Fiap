import DeliveryOptionCard from "@/components/DeliveryOption";
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
    </View>
  );
};

export default DeliverySelectionScreen;
