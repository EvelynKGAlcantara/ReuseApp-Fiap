import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MessageNotification from '../../components/MessageNotification';
import Theme from '../../constants/Theme';

export default function MessageExampleScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notificações</Text>
        <Text style={styles.subtitle}>
          Exemplos de notificações de mensagens com fotos dos remetentes
        </Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <MessageNotification
          senderName="Maria Souza"
          messagePreview="enviou uma mensagem sobre o item"
          itemName="Camiseta Azul Eco-friendly"
          iconName="shirt-outline"
          iconColor={Theme.colors.primary[600]}
          timeAgo="11 horas atrás"
          senderAvatar="https://randomuser.me/api/portraits/women/44.jpg"
          onViewMessage={() => console.log('Visualizar mensagem da Maria')}
        />

        <MessageNotification
          senderName="João Silva"
          messagePreview="tem uma pergunta sobre o item"
          itemName="Calça Jeans Sustentável"
          iconName="pricetags-outline"
          iconColor={Theme.colors.accent[500]}
          timeAgo="2 dias atrás"
          senderAvatar="https://randomuser.me/api/portraits/men/32.jpg"
          onViewMessage={() => console.log('Visualizar mensagem do João')}
        />

        <MessageNotification
          senderName="Ana Oliveira"
          messagePreview="enviou uma avaliação do item"
          itemName="Tênis Ecológico"
          iconName="star-outline"
          iconColor={Theme.colors.accent[600]}
          timeAgo="1 semana atrás"
          senderAvatar="https://randomuser.me/api/portraits/women/68.jpg"
          onViewMessage={() => console.log('Visualizar mensagem da Ana')}
        />

        <MessageNotification
          senderName="Carlos Mendes"
          messagePreview="fez uma proposta para o item"
          itemName="Mochila de Material Reciclado"
          iconName="bag-outline"
          iconColor={Theme.colors.primary[700]}
          timeAgo="2 horas atrás"
          senderAvatar="https://randomuser.me/api/portraits/men/75.jpg"
          onViewMessage={() => console.log('Visualizar mensagem do Carlos')}
        />
        
        <MessageNotification
          senderName="Fernanda Lima"
          messagePreview="tem interesse no seu produto"
          itemName="Garrafa Térmica Eco"
          iconName="water-outline"
          iconColor={Theme.colors.primary[500]}
          timeAgo="Agora mesmo"
          senderAvatar="https://randomuser.me/api/portraits/women/22.jpg"
          onViewMessage={() => console.log('Visualizar mensagem da Fernanda')}
        />
        
        <MessageNotification
          senderName="Ricardo Gomes"
          messagePreview="solicitou mais informações sobre"
          itemName="Kit de Talheres Reutilizáveis"
          iconName="restaurant-outline"
          iconColor={Theme.colors.accent[700]}
          timeAgo="5 horas atrás"
          onViewMessage={() => console.log('Visualizar mensagem do Ricardo')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.gray[50],
  },
  header: {
    backgroundColor: Theme.colors.primary[700],
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: Theme.colors.gray[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Theme.colors.gray[50],
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Theme.colors.gray[100],
    opacity: 0.9,
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
}); 