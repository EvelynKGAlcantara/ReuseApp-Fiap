import { Heading } from "@/components/ui/heading";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import { Button } from "./ui/button";
import { Text } from "./ui/text";
import { router } from "expo-router";

interface HeaderProps {
  showBackButton?: boolean;
  onBackPress?: () => void;
  title?: string;
  hasNotification?: boolean;
}

export function Header({ 
  showBackButton = true, 
  onBackPress = () => router.back(), 
  title = "ReUse",
  hasNotification = false
}: HeaderProps) {
  const [notification, setNotification] = useState(hasNotification);

  const handleNotificationPress = () => {
    router.push('/notificacoes');
  };

  return (
      <Heading style={{
        width: '100%',
        backgroundColor: '#2A4BA0',
        height: 88,
        paddingTop: 40,
      }}>
        <View style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <View style={{width: '30%', display: 'flex', alignItems: 'center'}}>
            {showBackButton && (
              <Button size="md" variant="link" action="primary" onPress={onBackPress}>
                <Ionicons name="arrow-back-outline" size={18} color="white" />
              </Button>
            )}
          </View>
          <View style={{width: '30%', display: 'flex', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 18}}>{title.substring(0, 2)}<Text style={{color: '#F9B023', fontWeight: 'bold', fontSize: 18}}>{title.substring(2)}</Text></Text>
          </View>
          <View style={{width: '30%', display: 'flex', alignItems: 'center'}}>
            <Button size="md" variant="link" action="primary" onPress={handleNotificationPress}>
              {notification
                ? <MaterialCommunityIcons name="bell-badge-outline" size={18} color="white" />
                : <MaterialCommunityIcons name="bell-outline" size={18} color="white" />
              }
            </Button>
          </View>
        </View>
      </Heading>
  );
}
