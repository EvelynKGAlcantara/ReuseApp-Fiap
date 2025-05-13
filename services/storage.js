const AsyncStorage = require('@react-native-async-storage/async-storage');

const isJson = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

const CACHE_EXPIRATION = 1000 * 60 * 30; // 30 minutos

const setData = async (key, value) => {
  try {
    const valueToStore = typeof value === 'object' ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, valueToStore);
    console.log(`Valor armazenado com a chave: ${key}`);
  } catch (e) {
    console.error(`Erro ao armazenar o valor para a chave ${key}: `, e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return isJson(value) ? JSON.parse(value) : value;
    }
    return null;
  } catch (e) {
    console.error(`Erro ao recuperar o valor para a chave ${key}: `, e);
    return null;
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Valor removido com sucesso para a chave: ${key}`);
  } catch (e) {
    console.error(`Erro ao remover o valor para a chave ${key}: `, e);
  }
};

const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Todos os dados foram removidos');
  } catch (e) {
    console.error('Erro ao limpar o AsyncStorage: ', e);
  }
};

const setCacheData = async (key, value, expirationTime = CACHE_EXPIRATION) => {
  try {
    const cacheItem = {
      data: value,
      timestamp: Date.now(),
      expirationTime
    };
    await AsyncStorage.setItem(key, JSON.stringify(cacheItem));
    console.log(`Cache armazenado com a chave: ${key}`);
  } catch (e) {
    console.error(`Erro ao armazenar cache para a chave ${key}: `, e);
  }
};

const getCacheData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const cacheItem = JSON.parse(value);
      const now = Date.now();
      
      if (now - cacheItem.timestamp > cacheItem.expirationTime) {
        await AsyncStorage.removeItem(key);
        return null;
      }
      
      return cacheItem.data;
    }
    return null;
  } catch (e) {
    console.error(`Erro ao recuperar cache para a chave ${key}: `, e);
    return null;
  }
};

const clearCache = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const cacheKeys = keys.filter(key => key.startsWith('@cache_'));
    await AsyncStorage.multiRemove(cacheKeys);
    console.log('Cache limpo com sucesso');
  } catch (e) {
    console.error('Erro ao limpar o cache: ', e);
  }
};

module.exports = {
  setData,
  getData,
  removeData,
  clearAllData,
  setCacheData,
  getCacheData,
  clearCache
};
