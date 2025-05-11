import { StyleSheet, SafeAreaView, View } from "react-native";
import Cabecalho from "../components/header/cabecalho";
import { SearchWithFilter } from "../components/buttons/busca-filtragem";

export default function Busca() {
  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />

      <View style={styles.content}>
        <View style={styles.filtercontent}>
          <SearchWithFilter
            onSearchChange={(text) => console.log("Busca:", text)}
            onFilterPress={() => console.log("Filtro pressionado")}
          />
        </View>
      </View>
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
  filtercontent: {
    marginBottom: 30,
  },
});
