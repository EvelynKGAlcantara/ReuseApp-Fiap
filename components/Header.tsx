import { Heading } from "@/components/ui/heading";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar, View } from "react-native";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

export function Header() {
  const [notification, setNotification] = useState(false);

  return (
      <Heading style={{
        width: '100%',
        backgroundColor: 'blue',
        height: 88,
        paddingTop: 40,
      }}>
        <StatusBar barStyle="light-content" backgroundColor="blue" />
        <View style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <View style={{width: '30%', display: 'flex', alignItems: 'center'}}>
            <Button size="md" variant="link" action="primary">
              <Ionicons name="arrow-back-outline" size={18} color="white" />
            </Button>
          </View>
          <View style={{width: '30%', display: 'flex', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 18}}>Re<Text style={{color: 'yellow', fontWeight: 'bold', fontSize: 18}}>Use</Text></Text>
          </View>
          <View style={{width: '30%', display: 'flex', alignItems: 'center'}}>
            <Button size="md" variant="link" action="primary">
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
