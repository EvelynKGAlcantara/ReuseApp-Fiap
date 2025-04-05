import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import LocationMap from './components/LocationMap';

export default function LocationTestScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <LocationMap
          address="Rua Central"
          number="100"
          neighborhood="Novo Horizonte"
          city="Uberlândia"
          state="MG"
          latitude={-18.912789}
          longitude={-48.275584}
        />
        
        <View style={styles.note}>
          <Text style={styles.noteText}>
            Nota: Para usar este componente em produção, você precisará:
          </Text>
          <Text style={styles.noteItem}>
            1. Obter uma chave de API do Google Maps
          </Text>
          <Text style={styles.noteItem}>
            2. Adicionar a chave à URL da imagem estática
          </Text>
          <Text style={styles.noteItem}>
            3. Configurar as restrições da API no Console do Google Cloud
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  note: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  noteText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  noteItem: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    marginBottom: 4,
  },
}); 