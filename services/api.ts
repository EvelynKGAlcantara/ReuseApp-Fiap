import axios from 'axios';
import { getData, removeData } from './storage';
import { router } from 'expo-router';

const api = axios.create({
  baseURL: 'sua-api-base-url', // Substitua pela URL base da sua API
  timeout: 10000,
});

// Interceptor para adicionar token em todas as requisições
api.interceptors.request.use(
  async (config) => {
    const token = await getData('@user_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de autenticação
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await removeData('@user_token');
      router.replace('/login');
    }
    return Promise.reject(error);
  }
);

// API de Produtos
export const ProductsAPI = {
  getHomeProducts: async () => {
    try {
      const response = await api.get('/produtos');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  },

  getCategoryProducts: async (categoryName: string) => {
    try {
      const response = await api.get(`/categorias/${categoryName}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos da categoria:', error);
      throw error;
    }
  },

  getProductDetails: async (productId: string) => {
    try {
      const response = await api.get(`/produtos/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar detalhes do produto:', error);
      throw error;
    }
  },
};

// API de Usuário
export const UserAPI = {
  login: async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  },

  register: async (userData: any) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get('/usuario/perfil');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      throw error;
    }
  },

  getUserProducts: async () => {
    try {
      const response = await api.get('/usuario/produtos');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos do usuário:', error);
      throw error;
    }
  },
};

export default api; 