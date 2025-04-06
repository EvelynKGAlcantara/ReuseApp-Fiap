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

export default function FazerProposta() {
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View>
          <Text style={styles.subTitle}>Faça uma proposta</Text>
        </View>

        <View style={styles.selectedItem}>
          <Text style={styles.sectionTitle}>Item selecionado:</Text>
          <View style={styles.imageView}>
            <Image
              source={{
                uri: "https://cdn.shopify.com/s/files/1/0603/7533/5145/products/11front2xsmall_b526b564-8e95-4054-b3f4-4386cc0aeab7.jpg?v=1649764627",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.itemNameSection}>
            <Text style={styles.itemName}>Gradiente Graphic T-Shirt</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>
            Selecione um ou mais itens para oferecer em troca
          </Text>
          <Text style={styles.sectionDescription}>
            O ofertante poderá escolher um ou mais dos que você está oferecendo
          </Text>
        </View>

        <View style={styles.itemsList}>
          <ItemCard
            imageSource={{
              uri: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
            title="Gradient Graphic T-shirt"
            description="Camiseta confortável com gradiente colorido"
            showCheckbox
            checked={checked}
            onCheckChange={() => setChecked(!checked)}
          />

          <ItemCard
            imageSource={{
              uri: "https://osklenbr.vteximg.com.br/arquivos/ids/474914/666820424_camisa_1.jpg?v=638404264055030000",
            }}
            title="Camisa xadrez"
            description="Camiseta confortável com estampa para forró"
            showCheckbox
            checked={checked}
            onCheckChange={() => setChecked(!checked)}
          />

          <ItemCard
            imageSource={{
              uri: "https://drogariasp.vteximg.com.br/arquivos/ids/445679-1000-1000/Escova-Dental-Colgate-Gengiva-Therapy-1-Unidade-727733-4.jpg?v=637517779391400000",
            }}
            title="Escova de dentes elétrica"
            description="Praticamente nova (usada somente 1 vez)"
            showCheckbox
            checked={checked}
            onCheckChange={() => setChecked(!checked)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  content: { padding: 16 },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    paddingBottom: 8,
    textAlign: "center",
    lineHeight: 20,
  },
  sectionDescription: {
    fontSize: 14,
    fontWeight: "400",
    color: "#808080",
    marginBottom: 12,
    textAlign: "center",
    lineHeight: 20,
  },
  itemNameSection: {
    width: "55%",
  },
  itemName: {
    fontSize: 10,
    fontWeight: "600",
    color: "#000",
  },
  selectedItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 24,
  },
  itemsList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  infoSection: {
    display: "flex",
    paddingBottom: 24,
  },
  imageView: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: "relative",
    width: "55%",
  },
});
