import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { Link, useLocalSearchParams, router } from 'expo-router';

const ConfirmacaoScreen = () => {
  const params = useLocalSearchParams();
  const email = params.email || 'seu-email@example.com';
  
  // Estado para os 6 dígitos do código
  const [codigo, setCodigo] = useState(['', '', '', '', '', '']);
  const [btnAtivo, setBtnAtivo] = useState(false);
  
  // Refs para cada input
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  // Função para lidar com a mudança de texto em cada input
  const handleChangeText = (text: string, index: number) => {
    const newCodigo = [...codigo];
    
    // Garantir que apenas números sejam aceitos
    const numericText = text.replace(/[^0-9]/g, '');
    
    // Atualizar o valor atual
    newCodigo[index] = numericText.slice(0, 1);
    setCodigo(newCodigo);
    
    // Verificar se todos os campos estão preenchidos
    if (newCodigo.every(digit => digit !== '')) {
      setBtnAtivo(true);
    } else {
      setBtnAtivo(false);
    }
    
    // Se houver um dígito e não for o último campo, avançar para o próximo
    if (numericText.length === 1 && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // Função para lidar com a tecla de backspace
  const handleKeyPress = (e: any, index: number) => {
    // Se o campo estiver vazio e pressionar backspace, voltar para o campo anterior
    if (e.nativeEvent.key === 'Backspace' && codigo[index] === '' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  // Verificar se o código está completo
  const codigoCompleto = codigo.every(digito => digito !== '');

  const handleSubmit = () => {
    if (codigoCompleto) {
      router.push('/cadastro-sucesso');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Re<Text style={styles.logoHighlight}>Use</Text></Text>
        </View>
        
        <Text style={styles.title}>Código de{'\n'}Confirmação</Text>
        <Text style={styles.subtitle}>
          Insira o código de confirmação enviado{'\n'}para seu email e conclua seu cadastro
        </Text>

        <View style={styles.codeContainer}>
          {codigo.map((digito, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.codeInput}
              value={digito}
              onChangeText={text => handleChangeText(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <TouchableOpacity 
          style={[styles.button, btnAtivo && styles.buttonActive]} 
          activeOpacity={0.8}
          onPress={() => {
            setBtnAtivo(true);
            handleSubmit();
          }}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.loginLink}>
          <Text style={styles.loginText}>Já possui uma conta? </Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLinkText}>Faça Login</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  logoContainer: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  logo: {
    fontSize: 32,
    fontWeight: '400',
    color: '#2A4BA0',
  },
  logoHighlight: {
    color: '#F9B023',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 24,
    lineHeight: 18,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#D1D1D1',
    borderRadius: 100,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonActive: {
    backgroundColor: '#2A4BA0',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  loginText: {
    color: '#666',
    fontSize: 13,
  },
  loginLinkText: {
    color: '#2A4BA0',
    fontWeight: '500',
    fontSize: 13,
  },
});

export default ConfirmacaoScreen; 