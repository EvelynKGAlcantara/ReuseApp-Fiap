// context/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserAPI } from '../services/api';
import { getData, setData, removeData } from '../services/storage';

interface AuthContextData {
  user: any;
  signed: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  register: (userData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    try {
      const storedUser = await getData('@user_data');
      const storedToken = await getData('@user_token');

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Erro ao carregar dados do storage:', error);
    } finally {
      setLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const response = await UserAPI.login(email, password);
      const { user: userData, token } = response;

      await setData('@user_data', JSON.stringify(userData));
      await setData('@user_token', token);

      setUser(userData);
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }

  async function signOut() {
    try {
      await removeData('@user_data');
      await removeData('@user_token');
      setUser(null);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      throw error;
    }
  }

  async function register(userData: any) {
    try {
      const response = await UserAPI.register(userData);
      const { user: newUser, token } = response;

      await setData('@user_data', JSON.stringify(newUser));
      await setData('@user_token', token);

      setUser(newUser);
    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signIn,
        signOut,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
