import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ImageUpload from "@/components/ImageUpload";

export default function PerfilScreen() {
  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => router.push("/notificacoes")}
        >
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.perfilInfo}>
          <View style={styles.avatarContainer}>
            <ImageUpload />
          </View>
          <Text style={styles.nomeUsuario}>João da Silva</Text>
          <Text style={styles.emailUsuario}>joao.silva@email.com</Text>

          <View style={styles.estatisticas}>
            <View style={styles.estatisticaItem}>
              <Text style={styles.estatisticaNumero}>12</Text>
              <Text style={styles.estatisticaLabel}>Itens</Text>
            </View>
            <View style={styles.separador} />
            <View style={styles.estatisticaItem}>
              <Text style={styles.estatisticaNumero}>3</Text>
              <Text style={styles.estatisticaLabel}>Trocas</Text>
            </View>
            <View style={styles.separador} />
            <View style={styles.estatisticaItem}>
              <Text style={styles.estatisticaNumero}>4.7</Text>
              <Text style={styles.estatisticaLabel}>Avaliação</Text>
            </View>
          </View>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings-outline" size={24} color="#333" />
            <Text style={styles.menuItemText}>Configurações</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="help-circle-outline" size={24} color="#333" />
            <Text style={styles.menuItemText}>Ajuda e Suporte</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#333"
            />
            <Text style={styles.menuItemText}>Sobre o ReUse</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={24} color="#ff3b30" />
            <Text style={[styles.menuItemText, styles.logoutText]}>Sair</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
    color: "#fff",
  },
  notificationButton: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FF3B30",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  perfilInfo: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#2A4BA0",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  nomeUsuario: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  emailUsuario: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  estatisticas: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  estatisticaItem: {
    alignItems: "center",
  },
  estatisticaNumero: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  estatisticaLabel: {
    fontSize: 12,
    color: "#666",
  },
  separador: {
    height: 30,
    width: 1,
    backgroundColor: "#eee",
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
    marginLeft: 16,
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  logoutText: {
    color: "#ff3b30",
  },
});
