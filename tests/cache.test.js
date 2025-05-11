const { setCacheData, getCacheData, clearCache } = require('../services/storage');

// Teste de cache
const testCache = async () => {
  try {
    console.log('Iniciando testes de cache...');

    // Teste 1: Armazenar e recuperar dados
    const testData = { id: 1, name: 'Teste Cache' };
    const testKey = '@cache_test';
    
    console.log('\nTeste 1: Armazenar e recuperar dados');
    await setCacheData(testKey, testData);
    const retrievedData = await getCacheData(testKey);
    console.log('Dados armazenados:', testData);
    console.log('Dados recuperados:', retrievedData);
    console.log('Teste 1:', JSON.stringify(testData) === JSON.stringify(retrievedData) ? 'PASSOU' : 'FALHOU');

    // Teste 2: Verificar expiração do cache
    console.log('\nTeste 2: Verificar expiração do cache');
    const shortExpirationData = { id: 2, name: 'Teste Expiração' };
    const shortExpirationKey = '@cache_test_expiration';
    
    // Armazenar com expiração de 2 segundos
    await setCacheData(shortExpirationKey, shortExpirationData, 2000);
    
    // Recuperar imediatamente
    const immediateData = await getCacheData(shortExpirationKey);
    console.log('Dados imediatos:', immediateData);
    
    // Aguardar 3 segundos
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Tentar recuperar após expiração
    const expiredData = await getCacheData(shortExpirationKey);
    console.log('Dados após expiração:', expiredData);
    console.log('Teste 2:', expiredData === null ? 'PASSOU' : 'FALHOU');

    // Teste 3: Limpar cache
    console.log('\nTeste 3: Limpar cache');
    await clearCache();
    const clearedData = await getCacheData(testKey);
    console.log('Dados após limpar cache:', clearedData);
    console.log('Teste 3:', clearedData === null ? 'PASSOU' : 'FALHOU');

    console.log('\nTestes de cache concluídos!');
  } catch (error) {
    console.error('Erro durante os testes:', error);
  }
};

// Executar os testes
testCache(); 