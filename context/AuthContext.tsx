// context/AuthContext.tsx
import { createContext, useContext, useState } from "react";

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  id_token: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  user: GoogleUser | null;
  setUser: (user: GoogleUser | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<GoogleUser | null>(null);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
