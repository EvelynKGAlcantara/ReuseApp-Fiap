import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView, Platform, Text, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function PerfilScreen() {
  const handleLogout = () => {
    router.replace('/login');
  };

  // Função para renderizar estrelas de avaliação
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= Math.floor(rating) ? "star" : "star-outline"}
          size={12}
          color="#F9B023"
          style={{ marginRight: 2 }}
        />
      );
    }
    return <View style={styles.starsContainer}>{stars}</View>;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar 
        backgroundColor="#2A4BA0" 
        barStyle="light-content"
        translucent={false}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.back()}
            style={styles.headerButton}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil</Text>
          <TouchableOpacity 
            style={styles.notificationButton}
            activeOpacity={0.7}
          >
            <Ionicons name="notifications-outline" size={20} color="#1B262E" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.perfilInfo}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JD</Text>
              </View>
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

          {/* Seção Para sua casa */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Para sua casa</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.productsRow}
            >
              <TouchableOpacity style={styles.productCard} activeOpacity={0.7}>
                <View style={[styles.productImageContainer, { backgroundColor: "#4CAF50" }]}>
                  <Ionicons name="bed-outline" size={48} color="#FFFFFF" />
                </View>
                <View style={styles.productInfo}>
                  {renderStars(4.5)}
                  <Text style={styles.productTitle}>Sofá 3 Lugares Cinza</Text>
                  <Text style={styles.productLocation}>São Paulo, SP</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.productCard} activeOpacity={0.7}>
                <View style={[styles.productImageContainer, { backgroundColor: "#2196F3" }]}>
                  <Ionicons name="restaurant-outline" size={48} color="#FFFFFF" />
                </View>
                <View style={styles.productInfo}>
                  {renderStars(4.0)}
                  <Text style={styles.productTitle}>Mesa de Jantar</Text>
                  <Text style={styles.productLocation}>Rio de Janeiro, RJ</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Seção Outros */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Outros</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.productsRow}
            >
              <TouchableOpacity style={styles.productCard} activeOpacity={0.7}>
                <View style={[styles.productImageContainer, { backgroundColor: "#9C27B0" }]}>
                  <Ionicons name="briefcase-outline" size={48} color="#FFFFFF" />
                </View>
                <View style={styles.productInfo}>
                  {renderStars(4.0)}
                  <Text style={styles.productTitle}>Bolsa de Couro</Text>
                  <Text style={styles.productLocation}>Rio de Janeiro, RJ</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.productCard} activeOpacity={0.7}>
                <View style={[styles.productImageContainer, { backgroundColor: "#FF9800" }]}>
                  <Ionicons name="footsteps-outline" size={48} color="#FFFFFF" />
                </View>
                <View style={styles.productInfo}>
                  {renderStars(4.5)}
                  <Text style={styles.productTitle}>Tênis Esportivo</Text>
                  <Text style={styles.productLocation}>São Paulo, SP</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Ionicons name="settings-outline" size={24} color="#606D76" />
              <Text style={styles.menuItemText}>Configurações</Text>
              <Ionicons name="chevron-forward" size={20} color="#C5CDD2" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Ionicons name="help-circle-outline" size={24} color="#606D76" />
              <Text style={styles.menuItemText}>Ajuda e Suporte</Text>
              <Ionicons name="chevron-forward" size={20} color="#C5CDD2" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Ionicons name="information-circle-outline" size={24} color="#606D76" />
              <Text style={styles.menuItemText}>Sobre o ReUse</Text>
              <Ionicons name="chevron-forward" size={20} color="#C5CDD2" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout} activeOpacity={0.7}>
              <Ionicons name="log-out-outline" size={24} color="#F44336" />
              <Text style={[styles.menuItemText, styles.logoutText]}>Sair</Text>
              <Ionicons name="chevron-forward" size={20} color="#C5CDD2" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2A4BA0',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2A4BA0',
    ...(Platform.OS === 'android' ? {
      paddingTop: StatusBar.currentHeight || 12,
    } : {}),
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  notificationButton: {
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#F44336',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  perfilInfo: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E7ECF0',
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2A4BA0',
    justifyContent: 'center',
    alignItems: 'center',
    ...(Platform.OS === 'android' ? {
      elevation: 4,
    } : {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    }),
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  nomeUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B262E',
  },
  emailUsuario: {
    fontSize: 14,
    color: '#A9B4BC',
    marginBottom: 20,
  },
  estatisticas: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  estatisticaItem: {
    alignItems: 'center',
  },
  estatisticaNumero: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B262E',
  },
  estatisticaLabel: {
    fontSize: 12,
    color: '#A9B4BC',
  },
  separador: {
    height: 30,
    width: 1,
    backgroundColor: '#E7ECF0',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B262E',
    marginBottom: 16,
  },
  productsRow: {
    paddingRight: 16,
  },
  productCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    ...(Platform.OS === 'android' ? {
      elevation: 2,
    } : {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    }),
  },
  productImageContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    padding: 12,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1B262E',
    marginBottom: 4,
  },
  productLocation: {
    fontSize: 12,
    color: '#A9B4BC',
  },
  menu: {
    backgroundColor: '#FFFFFF',
    marginTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E7ECF0',
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#1B262E',
    flex: 1,
  },
  logoutText: {
    color: '#F44336',
  }
}); 