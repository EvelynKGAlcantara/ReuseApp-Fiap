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
        <Link
          onPress={() => handleLinkPress('details')}
          style={{
            backgroundColor: activeLink === 'details' ? '#2A4BA0' : 'transparent',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 2,
            paddingHorizontal: 16,
            borderColor: 'lightgray',
            borderStyle: 'solid',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderRightWidth: 0.5,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            width: 100
          }}
        >
          <LinkText
            style={{
              textDecorationLine: 'none',
              color: activeLink === 'details' ? 'white' : 'black',
            }}
          >
            Detalhe
          </LinkText>
        </Link>

        <Link
          onPress={() => handleLinkPress('chat')}
          style={{
            backgroundColor: activeLink === 'chat' ? 'blue' : 'transparent',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 2,
            paddingHorizontal: 16,
            borderColor: 'lightgray',
            borderStyle: 'solid',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 0.5,
            width: 100
          }}
        >
          <LinkText
            style={{
              textDecorationLine: 'none',
              color: activeLink === 'chat' ? 'white' : 'black',
            }}
          >
            Chat
          </LinkText>
        </Link>
      </View>
    </Center>
  );
}