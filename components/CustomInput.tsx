import React, { useEffect } from 'react';
import { View, Text, TextInput, TextInputProps, ViewStyle, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../constants/Theme';

// Cores do tema
const {
  input: {
    background,
    border,
    text,
    icon
  }
} = Theme;

// Tipos de variações
export type InputVariant = 'outline' | 'filled' | 'underline' | 'unstyled' | 'floating';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type InputState = 'normal' | 'focused' | 'error' | 'disabled' | 'success';

export interface CustomInputProps extends TextInputProps {
  // Propriedades de personalização
  variant?: InputVariant;
  size?: InputSize;
  state?: InputState;
  label?: string;
  helperText?: string;
  errorText?: string;
  successText?: string;
  leftIcon?: string;
  rightIcon?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  prefix?: string;
  suffix?: string;
  isRequired?: boolean;
  showCharCount?: boolean;
  maxLength?: number;
  containerStyle?: ViewStyle;
  fullWidth?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  elevation?: boolean;
}

const CustomInput = ({
  variant = 'outline',
  size = 'md',
  state = 'normal',
  label,
  helperText,
  errorText,
  successText,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  prefix,
  suffix,
  isRequired = false,
  showCharCount = false,
  maxLength,
  containerStyle,
  fullWidth = false,
  placeholder,
  value = '',
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  editable = true,
  rounded = 'md',
  elevation = false,
  ...rest
}: CustomInputProps) => {

  // Estados para animações e foco
  const [isFocused, setIsFocused] = React.useState(false);
  const animatedLabelValue = React.useRef(new Animated.Value(value ? 1 : 0)).current;
  const animatedBorderValue = React.useRef(new Animated.Value(0)).current;
  
  // Determina o estado atual com base nas props e no estado interno
  const currentState = !editable ? 'disabled' : (state === 'normal' && isFocused) ? 'focused' : state;

  // Efeito para animar o label quando o valor muda
  useEffect(() => {
    Animated.timing(animatedLabelValue, {
      toValue: (isFocused || value) ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    
    Animated.timing(animatedBorderValue, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value, animatedLabelValue, animatedBorderValue]);

  // Classes Tailwind para variantes
  const getVariantClasses = () => {
    switch (variant) {
      case 'filled':
        return `bg-[${background.filled}] border-transparent`;
      case 'underline':
        return 'border-b border-t-0 border-l-0 border-r-0 rounded-none bg-transparent';
      case 'unstyled':
        return 'border-0 bg-transparent';
      case 'floating':
        return `bg-[${background.default}] border-[${border.default}] pt-6`;
      case 'outline':
      default:
        return `bg-[${background.default}] border-[${border.default}]`;
    }
  };

  // Classes Tailwind para tamanhos
  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'py-1 px-2 text-xs';
      case 'sm':
        return 'py-1.5 px-3 text-sm';
      case 'lg':
        return 'py-3 px-4 text-base';
      case 'xl':
        return 'py-4 px-5 text-lg';
      case 'md':
      default:
        return 'py-2 px-3 text-base';
    }
  };

  // Obtém a cor da borda com base no estado atual
  const getBorderColor = () => {
    switch (currentState) {
      case 'focused':
        return border.focused;
      case 'error':
        return border.error;
      case 'success':
        return border.success;
      case 'disabled':
        return border.disabled;
      case 'normal':
      default:
        return border.default;
    }
  };

  // Obtém a cor do texto com base no estado atual
  const getTextColor = () => {
    if (currentState === 'disabled') {
      return text.disabled;
    }
    return text.default;
  };

  // Classes para arredondamento
  const getRoundedClasses = () => {
    switch (rounded) {
      case 'none':
        return 'rounded-none';
      case 'sm':
        return 'rounded-sm';
      case 'lg':
        return 'rounded-lg';
      case 'full':
        return 'rounded-full';
      case 'md':
      default:
        return 'rounded-md';
    }
  };

  // Função para renderizar o texto de ajuda/erro/sucesso
  const renderHelperText = () => {
    if (errorText && currentState === 'error') {
      return (
        <View className="flex-row items-center mt-1.5">
          <Ionicons name="alert-circle" size={14} color={border.error} className="mr-1" />
          <Text style={{color: border.error}} className="text-xs">{errorText}</Text>
        </View>
      );
    }
    if (successText && currentState === 'success') {
      return (
        <View className="flex-row items-center mt-1.5">
          <Ionicons name="checkmark-circle" size={14} color={border.success} className="mr-1" />
          <Text style={{color: border.success}} className="text-xs">{successText}</Text>
        </View>
      );
    }
    if (helperText) {
      return <Text style={{color: text.helper}} className="text-xs mt-1.5">{helperText}</Text>;
    }
    return null;
  };

  // Renderiza o contador de caracteres
  const renderCharCount = () => {
    if (showCharCount && maxLength) {
      const isApproachingLimit = value.length > (maxLength * 0.8);
      const isAtLimit = value.length === maxLength;
      
      let countColor = text.helper;
      if (isAtLimit) {
        countColor = border.error;
      } else if (isApproachingLimit) {
        countColor = Theme.colors.feedback.warning;
      }
      
      return (
        <Text 
          style={{color: countColor}}
          className={`text-xs mt-1.5 text-right ${
            isAtLimit ? 'font-bold' : ''
          }`}
        >
          {value.length}/{maxLength}
        </Text>
      );
    }
    return null;
  };

  // Obtém a cor do ícone com base no estado atual
  const getIconColor = () => {
    switch (currentState) {
      case 'disabled':
        return icon.disabled;
      case 'error':
        return icon.error;
      case 'success':
        return icon.success;
      case 'focused':
        return icon.focused;
      case 'normal':
      default:
        return icon.default;
    }
  };

  // Renderiza um ícone que pode ser clicável ou não
  const renderIcon = (iconName: string, position: 'left' | 'right', onPress?: () => void) => {
    const iconSize = size === 'xs' || size === 'sm' ? 16 : size === 'lg' || size === 'xl' ? 24 : 20;
    const iconColor = getIconColor();
    
    const paddingClass = position === 'left' ? 'pl-2.5' : 'pr-2.5';
    
    if (onPress) {
      return (
        <TouchableOpacity 
          className={`${paddingClass} h-full justify-center`}
          onPress={onPress}
          disabled={!editable}
          accessibilityRole="button"
          accessibilityLabel={`${position === 'left' ? 'Esquerda' : 'Direita'} ícone`}
        >
          <Ionicons 
            name={iconName as any}
            size={iconSize}
            color={iconColor}
          />
        </TouchableOpacity>
      );
    }
    
    return (
      <View className={`${paddingClass} h-full justify-center`}>
        <Ionicons 
          name={iconName as any}
          size={iconSize}
          color={iconColor}
        />
      </View>
    );
  };

  // Estilo para label flutuante
  const floatingLabelStyle = {
    top: animatedLabelValue.interpolate({
      inputRange: [0, 1],
      outputRange: [variant === 'floating' ? 16 : 0, 4],
    }),
    fontSize: animatedLabelValue.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
    color: animatedLabelValue.interpolate({
      inputRange: [0, 1],
      outputRange: [text.placeholder, isFocused ? border.focused : text.label],
    }),
  };

  return (
    <View 
      className={`${fullWidth ? 'w-full' : ''} mb-4`} 
      style={containerStyle}
    >
      {/* Label (apenas para variantes não-floating) */}
      {label && variant !== 'floating' && (
        <View className="flex-row items-center mb-1.5">
          <Text style={{color: text.label}} className="font-medium text-sm">{label}</Text>
          {isRequired && <Text style={{color: border.error}} className="ml-0.5">*</Text>}
        </View>
      )}

      {/* Input Container */}
      <View 
        style={{borderColor: getBorderColor()}}
        className={`
          relative flex-row items-center border overflow-hidden
          ${getVariantClasses()} ${getRoundedClasses()}
          ${elevation ? 'shadow-sm' : ''}
        `}
      >
        {/* Label Flutuante (para variante floating) */}
        {label && variant === 'floating' && (
          <Animated.Text 
            style={[floatingLabelStyle, { position: 'absolute', left: leftIcon ? 36 : 12 }]}
            className="font-medium px-0.5 z-10 bg-white"
          >
            {label}{isRequired ? <Text style={{color: border.error}}>*</Text> : ''}
          </Animated.Text>
        )}
      
        {/* Left Icon */}
        {leftIcon && renderIcon(leftIcon, 'left', onLeftIconPress)}
        
        {/* Prefix */}
        {prefix && (
          <Text 
            style={{color: currentState === 'disabled' ? text.disabled : text.label}}
            className="pl-2.5 font-medium"
          >
            {prefix}
          </Text>
        )}
        
        {/* TextInput */}
        <TextInput
          style={{color: getTextColor()}}
          className={`flex-1 ${getSizeClasses()}`}
          placeholder={variant === 'floating' && isFocused ? placeholder : variant === 'floating' ? '' : placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          editable={editable}
          maxLength={maxLength}
          placeholderTextColor={text.placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        
        {/* Suffix */}
        {suffix && (
          <Text 
            style={{color: currentState === 'disabled' ? text.disabled : text.label}}
            className="pr-2.5 font-medium"
          >
            {suffix}
          </Text>
        )}
        
        {/* Right Icon */}
        {rightIcon && renderIcon(rightIcon, 'right', onRightIconPress)}

        {/* Animated Border (para efeito visual quando focado) */}
        {variant !== 'unstyled' && (
          <Animated.View 
            style={{
              width: animatedBorderValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
              backgroundColor: border.focused
            }}
            className="absolute bottom-0 left-0 h-0.5"
          />
        )}
      </View>
      
      {/* Helper/Error/Success Text and Char Count */}
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          {renderHelperText()}
        </View>
        
        <View>
          {renderCharCount()}
        </View>
      </View>
    </View>
  );
};

export default CustomInput; 