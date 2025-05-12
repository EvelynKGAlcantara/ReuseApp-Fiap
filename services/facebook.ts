import * as Facebook from "expo-facebook";
import { useAuth } from "@/context/AuthContext";
import { setData } from "./storage";
import { Platform } from "react-native";

export const useFacebookAuth = () => {
  const { setUser, setIsLoggedIn } = useAuth();

  const facebookAuth = async () => {
    if (Platform.OS === "web") {
      alert("Login com Facebook não é suportado na web.");
      return { success: false, error: "Facebook login não é suportado na web" };
    }

    try {
      await Facebook.initializeAsync({
        appId: "SEU_APP_ID_DO_FACEBOOK",
      });

      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });

      if (result.type === "success" && result.token) {
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${result.token}`
        );

        const userInfo = await response.json();

        const userData = {
          id_token: result.token,
          email: userInfo.email || "",
          name: userInfo.name,
          picture: userInfo.picture?.data?.url || "",
        };

        setUser(userData);
        setIsLoggedIn(true);

        await setData("userData", userData);
        await setData("isLoggedIn", true);

        return { success: true, userData };
      } else {
        return { success: false, error: "Login cancelado ou token inválido" };
      }
    } catch (error) {
      console.error("Erro ao tentar logar no Facebook", error);
      return { success: false, error: "Erro no login com Facebook" };
    }
  };

  return { facebookAuth };
};
