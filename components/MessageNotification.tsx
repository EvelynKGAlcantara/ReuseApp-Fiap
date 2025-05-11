import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../constants/Theme';

type MessageNotificationProps = {
  senderName: string;
  messagePreview: string;
  itemName: string;
  timeAgo: string;
  onViewMessage?: () => void;
  senderAvatar?: string;
  iconName?: string;
  iconColor?: string;
};

const MessageNotification = ({
  senderName = "Maria Souza",
  messagePreview = "enviou uma mensagem sobre o item",
  itemName = "Camiseta Azul",
  timeAgo = "11 horas atrás",
  onViewMessage = () => console.log('Ver mensagem'),
  senderAvatar,
  iconName,
  iconColor,
}: MessageNotificationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.messageInfo}>
          <View style={styles.senderRow}>
            {senderAvatar ? (
              <Image 
                source={{ uri: senderAvatar }}
                style={styles.avatarImage}
              />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Ionicons name="person" size={16} color={Theme.colors.primary[500]} />
              </View>
            )}
            <Text numberOfLines={1} style={styles.senderName}>
              {senderName} <Text style={styles.messageText}>{messagePreview}</Text>
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.itemName}>{itemName}</Text>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.viewButton}
          onPress={onViewMessage}
          activeOpacity={0.7}
        >
          <Text style={styles.viewButtonText}>Ver mensagem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.gray[50],
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Theme.colors.gray[100],
    ...Platform.select({
      ios: {
        shadowColor: Theme.colors.gray[900],
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
      web: {
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
      },
    }),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageInfo: {
    flex: 1,
  },
  senderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  avatarImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: Theme.colors.primary[100],
  },
  avatarPlaceholder: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
    backgroundColor: Theme.colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  senderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.colors.gray[900],
    flex: 1,
  },
  messageText: {
    fontWeight: 'normal',
    color: Theme.colors.gray[700],
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.colors.gray[900],
    marginTop: 2,
    marginBottom: 6,
    paddingLeft: 36,
  },
  timeAgo: {
    fontSize: 14,
    color: Theme.colors.gray[600],
    paddingLeft: 36,
  },
  viewButton: {
    backgroundColor: Theme.colors.primary[600],
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
    marginTop: 4,
    ...Platform.select({
      ios: {
        shadowColor: Theme.colors.primary[900],
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
      },
    }),
  },
  viewButtonText: {
    color: Theme.colors.gray[50],
    fontSize: 14,
    fontWeight: '500',
  },
});

export default MessageNotification; 