import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
} from "react-native";
import Cabecalho from "../components/header/cabecalho";
import { useState } from "react";
import { ItemCard } from "../components/cards/card-produto";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

export default function FazerProposta() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Faça uma proposta</Text>
        </View>

        <View style={styles.selectedItemSection}>
          <Text style={styles.sectionLabel}>Item selecionado:</Text>

          <View style={styles.imageBox}>
            <Image
              source={{
                uri: "https://cdn.shopify.com/s/files/1/0603/7533/5145/products/11front2xsmall_b526b564-8e95-4054-b3f4-4386cc0aeab7.jpg?v=1649764627",
              }}
              style={styles.image}
            />
          </View>
          <Text style={styles.itemLabel}>Gradient Graphic T-shirt</Text>
        </View>

        <View style={styles.instructionSection}>
          <Text style={styles.instructionTitle}>
            Selecione um ou mais itens para oferecer em troca
          </Text>
          <Text style={styles.instructionText}>
            O ofertante poderá escolher um ou mais dos que você está oferecendo
          </Text>
        </View>

        <View style={styles.itemsList}>
          <ItemCard
            imageSource={{
              uri: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
            title="Camiseta preta M"
            description="Tá novinha. Terminei com a namorada e preciso trocar por outra. Esse é o motivo."
            showCheckbox={true}
            checked={checked}
            onCheckChange={() => setChecked(!checked)}
          />
          <ItemCard
            imageSource={{
              uri: "https://images.pexels.com/photos/6311603/pexels-photo-6311603.jpeg",
            }}
            title="Camiseta preta M"
            description="Tá novinha. Terminei com a namorada e preciso trocar por outra. Esse é o motivo."
            showCheckbox={true}
            checked={checked}
            onCheckChange={() => setChecked(!checked)}
          />
          <ItemCard
            imageSource={{
              uri: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
            }}
            title="Camiseta preta M"
            description="Tá novinha. Terminei com a namorada e preciso trocar por outra. Esse é o motivo."
            showCheckbox={true}
            checked={checked}
            onCheckChange={() => setChecked(!checked)}
          />
        </View>

        <View style={styles.buttonSection}>
          <View style={styles.buttonSpacing}>
            <CustomButton
              title="Quero cadastrar mais itens"
              onPress={() => alert("Cadastrar mais itens")}
              backgroundColor="transparent"
              borderColor="#2A4BA0"
              textColor="#2A4BA0"
            />
          </View>

          <View>
            <CustomButton
              title="Concluir proposta"
              onPress={() => router.push("/screens/proposta-concluida")}
              borderColor="#2A4BA0"
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
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  headerSection: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#000",
    textAlign: "left",
  },
  selectedItemSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 12,
  },
  imageBox: {
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  itemLabel: {
    fontSize: 10,
    fontWeight: "500",
    color: "#000",
  },
  instructionSection: {
    alignItems: "center",
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#808080",
    textAlign: "center",
    lineHeight: 20,
  },
  itemsList: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSection: {
    marginTop: 32,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  buttonSpacing: {
    marginBottom: 12,
  },
});
