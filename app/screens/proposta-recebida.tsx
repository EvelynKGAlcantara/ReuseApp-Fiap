import React, { useState } from "react";
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
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Cabecalho from "../components/header/cabecalho";
import Theme from "@/constants/Theme";
import { ToggleSwitch } from "../components/buttons/toggle-switch";
import { ItemCard } from "../components/cards/card-produto";
import CustomButton from "@/components/CustomButton";

interface MessageProps {
  id: string;
  text: string;
  isSender: boolean;
  time: string;
}

export default function PropostaRecebida() {
  const [selected, setSelected] = useState("Detalhe");
  const [message, setMessage] = useState("");

  const sellerInfo = {
    name: "Miguel da Silva",
    location: "Uberlândia/MG",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  const items = [
    "Gradient Graphic T-shirt",
    "Gradient Graphic T-shirt",
    "Gradient Graphic T-shirt",
  ];

  const [messages, setMessages] = useState<MessageProps[]>([
    {
      id: "1",
      text: "Oi! Ela ainda está disponível?",
      isSender: false,
      time: "10:41 pm",
    },
    {
      id: "2",
      text: "Qual é estado de conservação?",
      isSender: false,
      time: "10:43 pm",
    },
    {
      id: "3",
      text: "Qual é estado de conservação?",
      isSender: false,
      time: "10:43 pm",
    },
    {
      id: "4",
      text: "Sim, está disponível! Ele é número 39 e está em bom estado de conservação.",
      isSender: true,
      time: "10:46 pm",
    },
    {
      id: "5",
      text: "Sem riscos, sola firme e bem cuidado.",
      isSender: true,
      time: "10:48 pm",
    },
    {
      id: "6",
      text: "Tem como me mandar umas fotos mais detalhadas da sola e da parte de dentro?",
      isSender: false,
      time: "10:51 pm",
    },
  ]);

  const returnDetails = () => {
    return (
      <View>
        <Text style={styles.sectionTitle}>Item(s) de interesse</Text>
        <ItemCard
          imageSource={{
            uri: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          ratingComponent={
            <>
              {/* TODO: Trocar por componente criado pela Isabelle */}
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star" size={16} color="gold" />
              <Ionicons name="star-half" size={16} color="gold" />
              <Text style={{ marginLeft: 5 }}>4.5/5</Text>
            </>
          }
          title={"Teste"}
          description="Camiseta confortável com gradiente colorido"
        />
        <Text style={styles.sectionTitle}>
          O que está sendo ofertado em troca?
        </Text>
        {items.map((item, index) => (
          <View key={index} style={styles.itemCard}>
            <ItemCard
              imageSource={{
                uri: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              ratingComponent={
                <>
                  {/* TODO: Trocar por componente criado pela Isabelle */}
                  <Ionicons name="star" size={16} color="gold" />
                  <Ionicons name="star" size={16} color="gold" />
                  <Ionicons name="star" size={16} color="gold" />
                  <Ionicons name="star" size={16} color="gold" />
                  <Ionicons name="star-half" size={16} color="gold" />
                  <Text style={{ marginLeft: 5 }}>4.5/5</Text>
                </>
              }
              title={item}
              description="Camiseta confortável com gradiente colorido"
            />
          </View>
        ))}

        <View style={styles.buttonArea}>
          <View style={styles.buttonStyle}>
            <CustomButton
              title="Recusar"
              onPress={() => router.replace("/(tabs)")}
              backgroundColor="transparent"
              borderColor="#2A4BA0"
              textColor="#2A4BA0"
            />
          </View>

          <View style={styles.buttonStyle}>
            <CustomButton
              title="Aceitar"
              onPress={() => router.push("/screens/forma-de-entrega")}
              backgroundColor="transparent"
              borderColor="#2A4BA0"
              textColor="#2A4BA0"
            />
          </View>

          <View style={styles.buttonStyle}>
            <CustomButton
              title="Conversar pelo chat"
              onPress={() => setSelected("Chat")}
              borderColor="#2A4BA0"
            />
          </View>
        </View>
      </View>
    );
  };

  const returnChat = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.chatContainer}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
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
                msg.isSender ? styles.senderMessage : styles.receiverMessage,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  msg.isSender
                    ? styles.senderMessageText
                    : styles.receiverMessageText,
                ]}
              >
                {msg.text}
              </Text>
              <Text
                style={[
                  styles.messageTime,
                  msg.isSender && styles.senderMessageTime,
                ]}
              >
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
    );
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: MessageProps = {
        id: Date.now().toString(),
        text: message,
        isSender: true,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View>
          <Text style={styles.subTitle}>Proposta recebida</Text>
        </View>

        <View style={styles.sellerContainer}>
          <View style={styles.sellerImageContainer}>
            {sellerInfo.profileImage ? (
              <Image
                source={{ uri: sellerInfo.profileImage }}
                style={styles.sellerImage}
              />
            ) : (
              <View style={styles.sellerImagePlaceholder}>
                <Ionicons
                  name="person"
                  size={32}
                  color={Theme.colors.gray[500]}
                />
              </View>
            )}
          </View>

          <View style={styles.sellerInfo}>
            <Text style={styles.sellerLabel}>Proponente:</Text>
            <Text style={styles.sellerName}>{sellerInfo.name}</Text>
            <Text style={styles.sellerLocation}>{sellerInfo.location}</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.tabSection}>
            <ToggleSwitch
              options={["Detalhe", "Chat"]}
              selectedOption={selected}
              onSelect={setSelected}
            />
          </View>
          {selected === "Detalhe" ? returnDetails() : returnChat()}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  content: { padding: 16 },
  subTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  sellerContainer: {
    flexDirection: "row",
    marginBottom: 24,
  },
  sellerImageContainer: {
    marginRight: 16,
  },
  sellerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Theme.colors.gray[100],
  },
  sellerImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Theme.colors.gray[100],
    justifyContent: "center",
    alignItems: "center",
  },
  sellerInfo: {
    justifyContent: "center",
  },
  sellerLabel: {
    fontSize: 14,
    color: Theme.colors.gray[600],
    marginBottom: 4,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: "500",
    color: Theme.colors.primary[600],
    marginBottom: 2,
  },
  sellerLocation: {
    fontSize: 14,
    color: Theme.colors.gray[600],
  },
  tabSection: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  itemsList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
    width: "100%",
  },
  itemCard: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  proponentInfo: {
    flexDirection: "row",
    alignItems: "center",
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
    color: "#8B96A0",
  },
  proponentName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 2,
  },
  proponentLocation: {
    fontSize: 12,
    color: "#8B96A0",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 16,
    borderRadius: 30,
    backgroundColor: "#F1F1F1",
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 30,
  },
  activeTabButton: {
    backgroundColor: "#2A4BA0",
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8B96A0",
  },
  activeTabButtonText: {
    color: "#fff",
  },
  detailContent: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  chatContainer: {
    flex: 1,
  },
  messagesDate: {
    alignItems: "center",
    marginVertical: 12,
  },
  dateText: {
    fontSize: 12,
    color: "#8B96A0",
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  messagesContainer: {
    flex: 1,
  },
  messageItem: {
    maxWidth: "75%",
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
  },
  senderMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#2A4BA0",
  },
  receiverMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#F1F1F1",
  },
  messageText: {
    fontSize: 14,
    marginBottom: 4,
  },
  senderMessageText: {
    color: "#fff",
  },
  receiverMessageText: {
    color: "#333",
  },
  messageTime: {
    fontSize: 10,
    color: "#8B96A0",
    alignSelf: "flex-end",
  },
  senderMessageTime: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ECECEC",
    marginTop: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 100,
    color: "#333",
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2A4BA0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  buttonArea: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  buttonStyle: {
    paddingBottom: 12,
  },
});
