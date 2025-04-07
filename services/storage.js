import AsyncStorage from '@react-native-async-storage/async-storage';

const isJson = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

export const setData = async (key, value) => {
  try {
    const valueToStore = typeof value === 'object' ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, valueToStore);
    console.log(`Valor armazenado com a chave: ${key}`);
  } catch (e) {
    console.error(`Erro ao armazenar o valor para a chave ${key}: `, e);
  }
};

export const getData = async (key) => {
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

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Valor removido com sucesso para a chave: ${key}`);
  } catch (e) {
    console.error(`Erro ao remover o valor para a chave ${key}: `, e);
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Todos os dados foram removidos');
  } catch (e) {
    console.error('Erro ao limpar o AsyncStorage: ', e);
  }
};
