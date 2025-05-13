import * as Google from "expo-auth-session/providers/google";
import { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import { useAuth } from "@/context/AuthContext";
import * as AuthSession from "expo-auth-session";
import { setData } from "./storage";

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const [error, setError] = useState<string | null>(null);

  const { setUser, setIsLoggedIn } = useAuth();

  const uri = AuthSession.makeRedirectUri();
  const slug = Constants.expoConfig?.slug;
  const owner = Constants.expoConfig?.owner;

  const redirectUri = `${uri}/@${owner}/${slug}`;

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "GOOGLE_CLIENT_ID",
    redirectUri,
    extraParams: {
      prompt: "consent",
    },
  });

  useEffect(() => {
    const handleGoogleResponse = async () => {
      if (response?.type === "success" && response.authentication) {
        const { idToken, accessToken } = response.authentication;

        try {
          const res = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          );

          const userInfo = await res.json();

          const userData = {
            id_token: idToken!,
            email: userInfo.email,
            name: userInfo.name,
            picture: userInfo.picture,
          };

          setUser(userData);
          setIsLoggedIn(true);

          await setData("userData", userData);
          await setData("isLoggedIn", true);
        } catch (err) {
          console.error("Erro ao obter perfil do Google:", err);
          setError("Erro ao obter dados do usuário.");
        }
      } else if (response?.type === "error") {
        setError("Erro na autenticação com o Google");
      }
    };

    handleGoogleResponse();
  }, [response, setUser, setIsLoggedIn]);

  return { error, promptAsync, request };
}
