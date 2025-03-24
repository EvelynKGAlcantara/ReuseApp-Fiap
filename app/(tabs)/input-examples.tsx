import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import CustomInput from '../../components/CustomInput';
import FormExample from '../../components/FormExample';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../../constants/Theme';

// Cores do tema
const { colors } = Theme;

export default function InputExamplesScreen() {
  const [showFullForm, setShowFullForm] = useState(false);
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [errorValue, setErrorValue] = useState('valor inválido');
  const [successValue, setSuccessValue] = useState('valor válido');
  const [prefixValue, setPrefixValue] = useState('100');
  const [searchValue, setSearchValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [floatingValue, setFloatingValue] = useState('');
  const [outlineValue, setOutlineValue] = useState('');
  const [filledValue, setFilledValue] = useState('');
  const [underlineValue, setUnderlineValue] = useState('');
  const [unstyledValue, setUnstyledValue] = useState('');
  const [xsValue, setXsValue] = useState('');
  const [smValue, setSmValue] = useState('');
  const [mdValue, setMdValue] = useState('');
  const [lgValue, setLgValue] = useState('');
  const [xlValue, setXlValue] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [requiredValue, setRequiredValue] = useState('');
  const [charCountValue, setCharCountValue] = useState('');
  
  // Demo de diferentes variantes
  const renderVariants = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Variações de Estilos</Text>
        
        <CustomInput
          label="Outline (Padrão)"
          variant="outline"
          placeholder="Estilo com borda"
          value={outlineValue}
          onChangeText={setOutlineValue}
          leftIcon="create-outline"
          elevation
        />
        
        <CustomInput
          label="Filled"
          variant="filled"
          placeholder="Estilo preenchido"
          value={filledValue}
          onChangeText={setFilledValue}
          leftIcon="create-outline"
        />
        
        <CustomInput
          label="Underline"
          variant="underline"
          placeholder="Apenas sublinhado"
          value={underlineValue}
          onChangeText={setUnderlineValue}
          leftIcon="create-outline"
        />
        
        <CustomInput
          label="Floating Label"
          variant="floating"
          placeholder="Label que flutua quando preenchido"
          value={floatingValue}
          onChangeText={setFloatingValue}
          leftIcon="create-outline"
        />
        
        <CustomInput
          label="Unstyled"
          variant="unstyled"
          placeholder="Sem estilo"
          value={unstyledValue}
          onChangeText={setUnstyledValue}
          leftIcon="create-outline"
        />
      </View>
    );
  };
  
  // Demo de diferentes tamanhos
  const renderSizes = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Variações de Tamanho</Text>
        
        <CustomInput
          label="Tamanho XS"
          size="xs"
          placeholder="Extra pequeno"
          value={xsValue}
          onChangeText={setXsValue}
          leftIcon="resize-outline"
        />
        
        <CustomInput
          label="Tamanho SM"
          size="sm"
          placeholder="Pequeno"
          value={smValue}
          onChangeText={setSmValue}
          leftIcon="resize-outline"
        />
        
        <CustomInput
          label="Tamanho MD (Padrão)"
          size="md"
          placeholder="Médio"
          value={mdValue}
          onChangeText={setMdValue}
          leftIcon="resize-outline"
        />
        
        <CustomInput
          label="Tamanho LG"
          size="lg"
          placeholder="Grande"
          value={lgValue}
          onChangeText={setLgValue}
          leftIcon="resize-outline"
        />
        
        <CustomInput
          label="Tamanho XL"
          size="xl"
          placeholder="Extra Grande"
          value={xlValue}
          onChangeText={setXlValue}
          leftIcon="resize-outline"
        />
      </View>
    );
  };
  
  // Demo de diferentes estados
  const renderStates = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estados</Text>
        
        <CustomInput
          label="Estado Normal"
          placeholder="Estado padrão"
          value={basicValue}
          onChangeText={setBasicValue}
          leftIcon="ellipse-outline"
        />
        
        <CustomInput
          label="Estado de Erro"
          state="error"
          value={errorValue}
          onChangeText={setErrorValue}
          errorText="Este campo contém um erro"
          leftIcon="alert-circle-outline"
        />
        
        <CustomInput
          label="Estado de Sucesso"
          state="success"
          value={successValue}
          onChangeText={setSuccessValue}
          successText="Valor válido"
          leftIcon="checkmark-circle-outline"
        />
        
        <CustomInput
          label="Estado Desabilitado"
          placeholder="Não pode ser editado"
          editable={false}
          leftIcon="lock-closed-outline"
        />
      </View>
    );
  };
  
  // Demo de inputs com ícones e prefixos/sufixos
  const renderDecorators = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Decorações</Text>
        
        <CustomInput
          label="Com ícone à esquerda"
          leftIcon="mail-outline"
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={emailValue}
          onChangeText={setEmailValue}
          elevation
        />
        
        <CustomInput
          label="Com senha"
          placeholder="Digite sua senha"
          value={passwordValue}
          onChangeText={setPasswordValue}
          leftIcon="lock-closed-outline"
          rightIcon={passwordVisible ? "eye-off-outline" : "eye-outline"}
          onRightIconPress={() => setPasswordVisible(!passwordVisible)}
          secureTextEntry={!passwordVisible}
        />
        
        <CustomInput
          label="Prefixo e Sufixo"
          prefix="R$"
          suffix=",00"
          keyboardType="numeric"
          value={prefixValue}
          onChangeText={setPrefixValue}
          elevation
        />
        
        <CustomInput
          label="Campo de Busca"
          leftIcon="search-outline"
          rightIcon="close-circle-outline"
          onRightIconPress={() => setSearchValue('')}
          placeholder="Pesquisar..."
          value={searchValue}
          onChangeText={setSearchValue}
          rounded="full"
          elevation
        />
      </View>
    );
  };
  
  // Demo de características especiais
  const renderSpecialFeatures = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Funcionalidades Especiais</Text>
        
        <CustomInput
          label="Campo Obrigatório"
          placeholder="Este campo é obrigatório"
          value={requiredValue}
          onChangeText={setRequiredValue}
          isRequired
          helperText="Você deve preencher este campo"
          elevation
        />
        
        <CustomInput
          label="Contador de Caracteres"
          placeholder="Digite algo aqui"
          value={charCountValue}
          onChangeText={setCharCountValue}
          showCharCount
          maxLength={50}
          helperText="Máximo de 50 caracteres"
          multiline
          numberOfLines={3}
        />
        
        <CustomInput
          label="Texto de Ajuda"
          placeholder="Campo com dica"
          helperText="Esta é uma mensagem de ajuda para o usuário"
          elevation
        />
        
        <View style={styles.rowContainer}>
          <View style={styles.halfColumn}>
            <CustomInput
              label="Arredondado SM"
              placeholder="Rounded SM"
              rounded="sm"
              elevation
            />
          </View>
          <View style={styles.halfColumn}>
            <CustomInput
              label="Arredondado LG"
              placeholder="Rounded LG"
              rounded="lg"
              elevation
            />
          </View>
        </View>
        
        <View style={styles.rowContainer}>
          <View style={styles.halfColumn}>
            <CustomInput
              label="Arredondado Full"
              placeholder="Rounded Full"
              rounded="full"
              elevation
            />
          </View>
          <View style={styles.halfColumn}>
            <CustomInput
              label="Sem Arredondamento"
              placeholder="Rounded None"
              rounded="none"
              elevation
            />
          </View>
        </View>
      </View>
    );
  };
  
  // Novo exemplo de design moderno
  const renderModernExamples = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exemplos Modernos</Text>
        
        <View style={styles.modernForm}>
          <CustomInput
            variant="floating"
            label="Nome completo"
            placeholder="Digite seu nome"
            leftIcon="person-outline"
            elevation
            rounded="lg"
          />
          
          <CustomInput
            variant="floating"
            label="Email"
            placeholder="Digite seu email"
            leftIcon="mail-outline"
            keyboardType="email-address"
            elevation
            rounded="lg"
          />
          
          <CustomInput
            variant="floating"
            label="Telefone"
            placeholder="(99) 99999-9999"
            leftIcon="call-outline"
            keyboardType="phone-pad"
            elevation
            rounded="lg"
          />
          
          <TouchableOpacity style={styles.modernButton}>
            <Text style={styles.modernButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  if (showFullForm) {
    return (
      <View style={styles.container}>
        <FormExample />
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => setShowFullForm(false)}
        >
          <Ionicons name="arrow-back" size={20} color={colors.gray[50]} />
          <Text style={styles.backButtonText}>Voltar para Exemplos</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Demonstração de Inputs</Text>
        <Text style={styles.subtitle}>Exemplos de diferentes tipos e variações de campos de entrada</Text>
        
        <TouchableOpacity
          style={styles.fullFormButton}
          onPress={() => setShowFullForm(true)}
        >
          <Text style={styles.fullFormButtonText}>Ver Formulário Completo</Text>
          <Ionicons name="arrow-forward" size={20} color={colors.gray[50]} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Input Básico</Text>
        <CustomInput
          label="Exemplo Básico"
          placeholder="Digite algo"
          value={basicValue}
          onChangeText={setBasicValue}
          fullWidth
          elevation
        />
      </View>
      
      {renderModernExamples()}
      {renderVariants()}
      {renderSizes()}
      {renderStates()}
      {renderDecorators()}
      {renderSpecialFeatures()}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Todos os componentes acima são altamente personalizáveis e adaptados à identidade visual do aplicativo
        </Text>
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.gray[50],
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.gray[100],
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.colors.primary[700],
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Theme.colors.gray[600],
    marginBottom: 8,
  },
  section: {
    marginBottom: 24,
    backgroundColor: Theme.colors.gray[50],
    padding: 16,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: Theme.colors.gray[800],
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.colors.primary[600],
    marginBottom: 16,
  },
  modernForm: {
    backgroundColor: Theme.colors.gray[50],
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: Theme.colors.gray[800],
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
      },
    }),
  },
  modernButton: {
    backgroundColor: Theme.colors.primary[600],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    ...Platform.select({
      ios: {
        shadowColor: Theme.colors.primary[800],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      },
    }),
  },
  modernButtonText: {
    color: Theme.colors.gray[50],
    fontWeight: 'bold',
    fontSize: 16,
  },
  returnButton: {
    backgroundColor: Theme.colors.gray[100],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Theme.colors.gray[100],
  },
  returnButtonText: {
    color: Theme.colors.gray[800],
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    gap: 12,
  },
  halfColumn: {
    flex: 1,
  },
  fullFormContainer: {
    flex: 1,
    backgroundColor: Theme.colors.gray[50],
    padding: 16,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  footerText: {
    fontSize: 14,
    color: Theme.colors.gray[700],
    textAlign: 'center',
  },
  fullFormButton: {
    backgroundColor: Theme.colors.primary[600],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 8,
    marginBottom: 24,
  },
  fullFormButtonText: {
    color: Theme.colors.gray[50],
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
  backButton: {
    backgroundColor: Theme.colors.primary[600],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    margin: 16,
  },
  backButtonText: {
    color: Theme.colors.gray[50],
    fontWeight: 'bold',
    marginLeft: 8,
  },
}); 