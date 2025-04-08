import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Cabecalho from "../components/header/cabecalho";

// Defina os tipos das notificações
type TipoNotificacao =
  | "novaMensagem"
  | "propostaAceita"
  | "propostaRecebida"
  | "atualizacaoPedido"
  | "produtoVendido"
  | "avaliacao";

type Notificacao = {
  id: string;
  tipo: TipoNotificacao;
  usuario: string;
  produto: string;
  imagem: string;
  tempo: string;
  lida: boolean;
  avaliacao?: number;
};

export default function NotificacoesScreen() {
  // Dados mockados de notificações
  const notificacoes: Notificacao[] = [
    {
      id: "1",
      tipo: "novaMensagem",
      usuario: "Carlos",
      produto: "Sofá cinza",
      imagem:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tempo: "5 min",
      lida: false,
    },
    {
      id: "2",
      tipo: "propostaAceita",
      usuario: "Mariana",
      produto: "Bolsa de couro",
      imagem:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tempo: "1 hora",
      lida: false,
    },
    {
      id: "3",
      tipo: "avaliacao",
      usuario: "Roberto",
      produto: "Óculos de sol",
      imagem:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      tempo: "3 horas",
      lida: true,
      avaliacao: 5,
    },
    {
      id: "4",
      tipo: "propostaRecebida",
      usuario: "Patrícia",
      produto: "Luminária de mesa",
      imagem:
        "https://images.unsplash.com/photo-1507394293569-51c8c3b8c6c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tempo: "5 horas",
      lida: true,
    },
    {
      id: "5",
      tipo: "produtoVendido",
      usuario: "Lucas",
      produto: "Cadeira de escritório",
      imagem:
        "https://images.unsplash.com/photo-1505657013488-fda9d3940861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tempo: "1 dia",
      lida: true,
    },
  ];

  // Função para renderizar a mensagem baseada no tipo de notificação
  const renderMensagem = (notificacao: Notificacao) => {
    switch (notificacao.tipo) {
      case "novaMensagem":
        return `${notificacao.usuario} enviou uma mensagem sobre "${notificacao.produto}"`;
      case "propostaAceita":
        return `${notificacao.usuario} aceitou sua proposta para "${notificacao.produto}"`;
      case "propostaRecebida":
        return `${notificacao.usuario} fez uma proposta para "${notificacao.produto}"`;
      case "atualizacaoPedido":
        return `Seu pedido de "${notificacao.produto}" foi atualizado`;
      case "produtoVendido":
        return `Seu produto "${notificacao.produto}" foi vendido para ${notificacao.usuario}`;
      case "avaliacao":
        return `${notificacao.usuario} avaliou sua compra "${notificacao.produto}"`;
      default:
        return "";
    }
  };

  // Função para renderizar estrelas de avaliação
  const renderEstrelas = (avaliacao?: number) => {
    if (!avaliacao) return null;

    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <Ionicons
          key={i}
          name={i <= avaliacao ? "star" : "star-outline"}
          size={16}
          color={i <= avaliacao ? "#FFD700" : "#ccc"}
          style={{ marginRight: 3 }}
        />
      );
    }

    return (
      <View style={{ flexDirection: "row", marginTop: 5 }}>{estrelas}</View>
    );
  };

  // Função para renderizar o botão de ação baseado no tipo de notificação
  const renderBotaoAcao = (notificacao: Notificacao) => {
    switch (notificacao.tipo) {
      case "novaMensagem":
        return (
          <TouchableOpacity style={[styles.botaoAcao, styles.botaoMensagem]}>
            <Text style={styles.botaoAcaoTexto}>Ver mensagem</Text>
          </TouchableOpacity>
        );
      case "propostaAceita":
      case "propostaRecebida":
        return (
          <TouchableOpacity style={[styles.botaoAcao, styles.botaoProposta]}>
            <Text style={styles.botaoAcaoTexto}>Ver detalhes</Text>
          </TouchableOpacity>
        );
      case "atualizacaoPedido":
      case "produtoVendido":
        return (
          <TouchableOpacity style={[styles.botaoAcao, styles.botaoPedido]}>
            <Text style={styles.botaoAcaoTexto}>Rastrear</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderTitle}>Notificações</Text>
        <TouchableOpacity
          onPress={() => router.push("/screens/configurar-notificacoes")}
        >
          <Ionicons name="settings-outline" size={24} color="#4A80F0" />
        </TouchableOpacity>
      </View>

      {/* Lista de notificações */}
      <ScrollView style={styles.notificacoesList}>
        {notificacoes.map((notificacao) => (
          <View
            key={notificacao.id}
            style={[
              styles.notificacaoItem,
              !notificacao.lida && styles.notificacaoNaoLida,
            ]}
          >
            <Image
              source={{ uri: notificacao.imagem }}
              style={styles.notificacaoImagem}
            />
            <View style={styles.notificacaoConteudo}>
              <View style={styles.notificacaoHeader}>
                <Text style={styles.notificacaoMensagem}>
                  {renderMensagem(notificacao)}
                </Text>
                {!notificacao.lida && <View style={styles.indicadorNaoLida} />}
              </View>
              {renderEstrelas(notificacao.avaliacao)}
              <View style={styles.notificacaoFooter}>
                <Text style={styles.notificacaoTempo}>
                  {notificacao.tempo} atrás
                </Text>
                {renderBotaoAcao(notificacao)}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#4A80F0",
    paddingVertical: 18,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  subHeaderTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },
  notificacoesList: {
    flex: 1,
    padding: 16,
  },
  notificacaoItem: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  notificacaoNaoLida: {
    backgroundColor: "#ECF3FF",
  },
  notificacaoImagem: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  notificacaoConteudo: {
    flex: 1,
  },
  notificacaoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  notificacaoMensagem: {
    flex: 1,
    fontSize: 14,
    color: "#333333",
    flexWrap: "wrap",
  },
  indicadorNaoLida: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4A80F0",
    marginLeft: 8,
  },
  notificacaoFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  notificacaoTempo: {
    fontSize: 12,
    color: "#999999",
  },
  botaoAcao: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoMensagem: {
    backgroundColor: "#2A4BA0",
  },
  botaoProposta: {
    backgroundColor: "#4CAF50",
  },
  botaoPedido: {
    backgroundColor: "#FF9800",
  },
  botaoAcaoTexto: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "500",
  },
});
