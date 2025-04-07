import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Switch,
} from "react-native";
import Cabecalho from "../components/header/cabecalho";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

export default function ConfigurarNotificacoes() {
  const [receivedMessageEnabled, setReceivedMessageEnabled] = useState(false);
  const [changeSolicitationEnabled, setChangeSolicitationEnabled] =
    useState(false);
  const [acceptedProposal, setAcceptedProposal] = useState(false);
  const [proposalDenied, setProposalDenied] = useState(false);
  const [concludedDeal, setConcludedDeal] = useState(false);
  const [notificationSound, setNotificationSound] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho icon="arrow-back" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Configurar Notificações</Text>
        </View>

        <View style={styles.menu}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Mensagens Recebidas</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={receivedMessageEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setReceivedMessageEnabled((previousState) => !previousState)
              }
              value={receivedMessageEnabled}
            />
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Solicitação de Trocas</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={changeSolicitationEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setChangeSolicitationEnabled((previousState) => !previousState)
              }
              value={changeSolicitationEnabled}
            />
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Proposta Aceita</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={acceptedProposal ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setAcceptedProposal((previousState) => !previousState)
              }
              value={acceptedProposal}
            />
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Proposta Negada</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={proposalDenied ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setProposalDenied((previousState) => !previousState)
              }
              value={proposalDenied}
            />
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Negociação Concluída</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={concludedDeal ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setConcludedDeal((previousState) => !previousState)
              }
              value={concludedDeal}
            />
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Som de Notificação</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={notificationSound ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setNotificationSound((previousState) => !previousState)
              }
              value={notificationSound}
            />
          </View>

          <View style={styles.buttonArea}>
            <View style={styles.buttonStyle}>
              <CustomButton
                title="Cancelar"
                onPress={() => alert("Botão Pressionado!")}
                backgroundColor="transparent"
                borderColor="#2A4BA0"
                textColor="#2A4BA0"
              />
            </View>

            <View style={styles.buttonStyle}>
              <CustomButton
                title="Publicar"
                onPress={() => alert("Botão Pressionado!")}
                borderColor="#2A4BA0"
              />
            </View>
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
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  menu: {
    backgroundColor: "white",
    marginTop: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    flex: 1,
  },
  buttonStyle: {
    paddingBottom: 12,
  },
  buttonArea: {
    paddingTop: 32,
  },
});
