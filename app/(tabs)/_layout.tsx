import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { FontAwesome } from '@expo/vector-icons';
import Theme from '@/constants/Theme';

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
            position: 'absolute',
            backgroundColor: '#2A4BA0',
            height: 85,
            paddingTop: 5,
            paddingBottom: Platform.OS === 'ios' ? 25 : 5,
            borderTopWidth: 0,
          },
          default: {
            backgroundColor: '#2A4BA0',
            height: 65,
            paddingTop: 5,
            paddingBottom: 5,
            borderTopWidth: 0,
          },
        }),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginBottom: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="busca"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="publicar"
        options={{
          title: "Publicar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="minhas-publicacoes"
        options={{
          title: "Minhas",
          tabBarIcon: ({ color }) => (
            <Ionicons name="documents" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
