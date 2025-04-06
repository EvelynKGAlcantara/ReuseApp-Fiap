import React, { useState } from 'react';
import { View } from "react-native";
import { Center } from "./ui/center";
import { Link, LinkText } from "./ui/link";

export function TabsComponent() {
  const [activeLink, setActiveLink] = useState('details');

  const handleLinkPress = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <Center>
      <View
        style={{
          padding: 8,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
      </View>
    </Center>
  );
}
