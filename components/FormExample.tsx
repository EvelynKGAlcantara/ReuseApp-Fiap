import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomInput from './CustomInput';
import Theme from '../constants/Theme';

// Paleta de cores do tema
const { colors } = Theme;

const FormExample = () => {
  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    birthdate: '',
    address: '',
    password: '',
    confirmPassword: '',
    bio: ''
  });
  
  // Estado para controle de visibilidade da senha
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  // Estado para controle de erros
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Função para atualizar o estado do formulário
  const handleChange = (field: string, value: string) => {
    // Limpa o erro ao editar
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[field];
        return newErrors;
      });
    }
    
    // Formata CPF e telefone enquanto digita
    if (field === 'cpf') {
      value = formatCPF(value);
    } else if (field === 'phone') {
      value = formatPhone(value);
    } else if (field === 'birthdate') {
      value = formatDate(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Função para formatar CPF
  const formatCPF = (value: string) => {
    value = value.replace(/\D/g, '');
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    
    if (value.length > 9) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
      return value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
    } else if (value.length > 3) {
      return value.replace(/(\d{3})(\d{3})/, '$1.$2');
    }
    
    return value;
  };

  // Função para formatar telefone
  const formatPhone = (value: string) => {
    value = value.replace(/\D/g, '');
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    
    if (value.length > 6) {
      return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      return value.replace(/(\d{2})(\d+)/, '($1) $2');
    }
    
    return value;
  };

  // Função para formatar data
  const formatDate = (value: string) => {
    value = value.replace(/\D/g, '');
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    
    if (value.length > 4) {
      return value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    } else if (value.length > 2) {
      return value.replace(/(\d{2})(\d+)/, '$1/$2');
    }
    
    return value;
  };

  // Função para validar formulário
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Validações básicas
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.email) newErrors.email = 'E-mail é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail inválido';
    
    if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';
    else if (formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = 'Telefone inválido';
    
    if (!formData.cpf) newErrors.cpf = 'CPF é obrigatório';
    else if (formData.cpf.replace(/\D/g, '').length !== 11) newErrors.cpf = 'CPF inválido';
    
    if (!formData.birthdate) newErrors.birthdate = 'Data de nascimento é obrigatória';
    else if (formData.birthdate.replace(/\D/g, '').length !== 8) newErrors.birthdate = 'Data inválida';
    
    if (!formData.address) newErrors.address = 'Endereço é obrigatório';
    
    if (!formData.password) newErrors.password = 'Senha é obrigatória';
    else if (formData.password.length < 8) newErrors.password = 'Senha deve ter no mínimo 8 caracteres';
    
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Senhas não coincidem';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função para submeter o formulário
  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Sucesso!', 'Formulário enviado com sucesso!', [
        { text: 'OK', onPress: () => resetForm() }
      ]);
    } else {
      Alert.alert('Erro!', 'Por favor, corrija os erros no formulário.');
    }
  };

  // Função para resetar o formulário
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      cpf: '',
      birthdate: '',
      address: '',
      password: '',
      confirmPassword: '',
      bio: ''
    });
    setErrors({});
  };

  return (
    <ScrollView 
      style={{backgroundColor: colors.gray[50]}}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Formulário de Cadastro</Text>
        <Text style={styles.subtitle}>Preencha os dados abaixo para se cadastrar</Text>
        
        {/* Seção de dados pessoais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="person" size={16} color={colors.primary[600]} /> 
            Dados Pessoais
          </Text>
          
          <CustomInput
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            value={formData.name}
            onChangeText={(value) => handleChange('name', value)}
            leftIcon="person-outline"
            variant="floating"
            isRequired
            autoCapitalize="words"
            state={errors.name ? 'error' : 'normal'}
            errorText={errors.name}
            fullWidth
            elevation
          />
          
          <CustomInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
            leftIcon="mail-outline"
            variant="floating"
            isRequired
            keyboardType="email-address"
            autoCapitalize="none"
            state={errors.email ? 'error' : 'normal'}
            errorText={errors.email}
            fullWidth
            elevation
          />
          
          <View style={styles.row}>
            <View style={styles.halfColumn}>
              <CustomInput
                label="Telefone"
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChangeText={(value) => handleChange('phone', value)}
                leftIcon="call-outline"
                variant="floating"
                isRequired
                keyboardType="phone-pad"
                state={errors.phone ? 'error' : 'normal'}
                errorText={errors.phone}
                fullWidth
                elevation
              />
            </View>
            
            <View style={styles.halfColumn}>
              <CustomInput
                label="CPF"
                placeholder="000.000.000-00"
                value={formData.cpf}
                onChangeText={(value) => handleChange('cpf', value)}
                leftIcon="card-outline"
                variant="floating"
                isRequired
                keyboardType="numeric"
                state={errors.cpf ? 'error' : 'normal'}
                errorText={errors.cpf}
                fullWidth
                elevation
              />
            </View>
          </View>
          
          <CustomInput
            label="Data de Nascimento"
            placeholder="DD/MM/AAAA"
            value={formData.birthdate}
            onChangeText={(value) => handleChange('birthdate', value)}
            leftIcon="calendar-outline"
            variant="floating"
            isRequired
            keyboardType="numeric"
            state={errors.birthdate ? 'error' : 'normal'}
            errorText={errors.birthdate}
            fullWidth
            elevation
          />
        </View>
        
        {/* Seção de endereço */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="location" size={16} color={colors.primary[600]} /> 
            Endereço
          </Text>
          
          <CustomInput
            label="Endereço Completo"
            placeholder="Rua, número, bairro, cidade, estado"
            value={formData.address}
            onChangeText={(value) => handleChange('address', value)}
            leftIcon="location-outline"
            variant="floating"
            isRequired
            state={errors.address ? 'error' : 'normal'}
            errorText={errors.address}
            fullWidth
            elevation
          />
        </View>
        
        {/* Seção de segurança */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="lock-closed" size={16} color={colors.primary[600]} /> 
            Segurança
          </Text>
          
          <CustomInput
            label="Senha"
            placeholder="Digite sua senha"
            value={formData.password}
            onChangeText={(value) => handleChange('password', value)}
            leftIcon="lock-closed-outline"
            rightIcon={passwordVisible ? "eye-off-outline" : "eye-outline"}
            onRightIconPress={() => setPasswordVisible(!passwordVisible)}
            variant="floating"
            isRequired
            secureTextEntry={!passwordVisible}
            state={errors.password ? 'error' : 'normal'}
            errorText={errors.password}
            fullWidth
            elevation
          />
          
          <CustomInput
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChangeText={(value) => handleChange('confirmPassword', value)}
            leftIcon="lock-closed-outline"
            rightIcon={confirmPasswordVisible ? "eye-off-outline" : "eye-outline"}
            onRightIconPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            variant="floating"
            isRequired
            secureTextEntry={!confirmPasswordVisible}
            state={errors.confirmPassword ? 'error' : 'normal'}
            errorText={errors.confirmPassword}
            fullWidth
            elevation
          />
        </View>
        
        {/* Seção de informações adicionais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="information-circle" size={16} color={colors.primary[600]} /> 
            Informações Adicionais
          </Text>
          
          <CustomInput
            label="Biografia"
            placeholder="Conte um pouco sobre você"
            value={formData.bio}
            onChangeText={(value) => handleChange('bio', value)}
            variant="floating"
            multiline
            showCharCount
            maxLength={200}
            numberOfLines={4}
            fullWidth
            elevation
            containerStyle={styles.textareaContainer}
          />
        </View>
        
        {/* Botões de ação */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]} 
            onPress={resetForm}
          >
            <Ionicons name="close-circle-outline" size={20} color={colors.gray[700]} />
            <Text style={styles.cancelButtonText}>Limpar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.submitButton]} 
            onPress={handleSubmit}
          >
            <Ionicons name="checkmark-circle-outline" size={20} color={colors.gray[50]} />
            <Text style={styles.submitButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  formContainer: {
    backgroundColor: colors.gray[50],
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: colors.gray[900],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary[700],
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray[700],
    textAlign: 'center',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary[600],
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfColumn: {
    width: '48%',
  },
  textareaContainer: {
    height: 120,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '48%',
  },
  submitButton: {
    backgroundColor: colors.primary[600],
  },
  submitButtonText: {
    color: colors.gray[50],
    fontWeight: 'bold',
    marginLeft: 8,
  },
  cancelButton: {
    backgroundColor: colors.gray[100],
  },
  cancelButtonText: {
    color: colors.gray[700],
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default FormExample; 