import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


interface MessageProps {
  id: string;
  text: string;
  isSender: boolean;
  time: string;
}

export default function PropostaRecebida() {
  const [activeTab, setActiveTab] = useState<'detalhe' | 'chat'>('chat');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      id: '1',
      text: 'Oi! Ela ainda está disponível?',
      isSender: false,
      time: '10:41 pm'
    },
    {
      id: '2',
      text: 'Qual é estado de conservação?',
      isSender: false,
      time: '10:43 pm'
    },
    {
      id: '3',
      text: 'Qual é estado de conservação?',
      isSender: false,
      time: '10:43 pm'
    },
    {
      id: '4',
      text: 'Sim, está disponível! Ele é número 39 e está em bom estado de conservação.',
      isSender: true,
      time: '10:46 pm'
    },
    {
      id: '5',
      text: 'Sem riscos, sola firme e bem cuidado.',
      isSender: true,
      time: '10:48 pm'
    },
    {
      id: '6',
      text: 'Tem como me mandar umas fotos mais detalhadas da sola e da parte de dentro?',
      isSender: false,
      time: '10:51 pm'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: MessageProps = {
        id: Date.now().toString(),
        text: message,
        isSender: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.title}>Proposta recebida</Text>
        
        <View style={styles.proponentInfo}>
          <Image 
            source={require('../assets/images/seller-profile.jpg')} 
            style={styles.proponentImage} 
          />
          <View style={styles.proponentDetails}>
            <Text style={styles.proponentLabel}>Proponente:</Text>
            <Text style={styles.proponentName}>Maria de Alcântara</Text>
            <Text style={styles.proponentLocation}>Uberlândia/MG</Text>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[
              styles.tabButton, 
              activeTab === 'detalhe' && styles.activeTabButton
            ]}
            onPress={() => setActiveTab('detalhe')}
          >
            <Text style={[
              styles.tabButtonText,
              activeTab === 'detalhe' && styles.activeTabButtonText
            ]}>Detalhe</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.tabButton, 
              activeTab === 'chat' && styles.activeTabButton
            ]}
            onPress={() => setActiveTab('chat')}
          >
            <Text style={[
              styles.tabButtonText,
              activeTab === 'chat' && styles.activeTabButtonText
            ]}>Chat</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'detalhe' ? (
          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>Detalhes da proposta</Text>
            {/* Conteúdo dos detalhes aqui */}
          </View>
        ) : (
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.chatContainer}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
          >
            <View style={styles.messagesDate}>
              <Text style={styles.dateText}>Hoje</Text>
            </View>
            
            <ScrollView style={styles.messagesContainer}>
              {messages.map((msg) => (
                <View 
                  key={msg.id} 
                  style={[
                    styles.messageItem,
                    msg.isSender ? styles.senderMessage : styles.receiverMessage
                  ]}
                >
                  <Text style={[
                    styles.messageText,
                    msg.isSender ? styles.senderMessageText : styles.receiverMessageText
                  ]}>
                    {msg.text}
                  </Text>
                  <Text style={[
                    styles.messageTime,
                    msg.isSender && styles.senderMessageTime
                  ]}>
                    {msg.time}
                  </Text>
                </View>
              ))}
            </ScrollView>
            
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Write your message..."
                placeholderTextColor="#8B96A0"
                value={message}
                onChangeText={setMessage}
                multiline
              />
              <TouchableOpacity 
                style={styles.sendButton} 
                onPress={handleSendMessage}
              >
                <Ionicons name="mic" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  proponentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  proponentImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  proponentDetails: {
    flex: 1,
  },
  proponentLabel: {
    fontSize: 12,
    color: '#8B96A0',
  },
  proponentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  proponentLocation: {
    fontSize: 12,
    color: '#8B96A0',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 30,
    backgroundColor: '#F1F1F1',
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 30,
  },
  activeTabButton: {
    backgroundColor: '#2A4BA0',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8B96A0',
  },
  activeTabButtonText: {
    color: '#fff',
  },
  detailContent: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  chatContainer: {
    flex: 1,
  },
  messagesDate: {
    alignItems: 'center',
    marginVertical: 12,
  },
  dateText: {
    fontSize: 12,
    color: '#8B96A0',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  messagesContainer: {
    flex: 1,
  },
  messageItem: {
    maxWidth: '75%',
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#2A4BA0',
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F1F1',
  },
  messageText: {
    fontSize: 14,
    marginBottom: 4,
  },
  senderMessageText: {
    color: '#fff',
  },
  receiverMessageText: {
    color: '#333',
  },
  messageTime: {
    fontSize: 10,
    color: '#8B96A0',
    alignSelf: 'flex-end',
  },
  senderMessageTime: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
    marginTop: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 100,
    color: '#333',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A4BA0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});
