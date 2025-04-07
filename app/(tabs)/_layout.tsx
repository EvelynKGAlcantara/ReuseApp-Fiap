import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const screenOptions = {
  headerShown: false,
};

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#F9B023",
        tabBarInactiveTintColor: "white",
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "#22408C",
            height: 85,
            paddingTop: 5,
            paddingBottom: Platform.OS === "ios" ? 25 : 5,
            borderTopWidth: 0,
          },
          default: {
            backgroundColor: "#22408C",
            height: 65,
            paddingTop: 5,
            paddingBottom: 5,
            borderTopWidth: 0,
          },
        }),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="busca"
        options={{
          title: "Buscar",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="suas-publicacoes"
        options={{
          title: "Publicações",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trocas-propostas"
        options={{
          title: "Trocas",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meus-dados"
        options={{
          title: "Meus dados",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
