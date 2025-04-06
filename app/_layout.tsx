import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Header } from '@/components/Header';
import { TabsComponent } from "@/components/TabsComponent";
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Header />
        <TabsComponent />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="registro" options={{ headerShown: false }} />
          <Stack.Screen name="confirmacao" options={{ headerShown: false }} />
          <Stack.Screen name="cadastro-sucesso" options={{ headerShown: false }} />
          <Stack.Screen name="product-details" options={{ headerShown: false }} />
          <Stack.Screen name="notificacoes" options={{ headerShown: false }} />
          <Stack.Screen name="proposta-recebida" options={{ headerShown: false }} />
          <Stack.Screen name="detalhes-produto" options={{ headerShown: false }} />
          <Stack.Screen name="avaliacao" options={{ headerShown: false }} />
        </Stack>
        <StatusBar barStyle="light-content" backgroundColor="blue" />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
