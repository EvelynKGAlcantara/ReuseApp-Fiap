// Paleta de cores baseada nas cores de identidade visual fornecidas
const Colors = {
  // Escala de cinzas (do mais escuro para o mais claro)
  gray: {
    900: '#1B262E', // Cinza muito escuro (quase preto)
    800: '#354349', // Cinza escuro
    700: '#606D76', // Cinza médio-escuro
    600: '#A9B4BC', // Cinza médio
    500: '#C5CDD2', // Cinza médio-claro
    100: '#E7ECF0', // Cinza muito claro
    50: '#F8F9FB',  // Branco acinzentado
  },
  
  // Cores primárias - Azuis
  primary: {
    900: '#153075', // Azul muito escuro
    800: '#1D336F', // Azul escuro (interpolado)
    700: '#243D85', // Azul escuro (interpolado)
    600: '#2A4BA0', // Azul médio (principal)
    500: '#3A5DB0', // Azul claro (interpolado)
    400: '#4B70C0', // Azul claro (interpolado)
    300: '#7192D0', // Azul clarissimo (interpolado)
    200: '#97B3E0', // Azul quase branco (interpolado)
    100: '#BDD4F0', // Azul esbranquiçado (interpolado)
  },
  
  // Cores de destaque - Amarelos/Laranja
  accent: {
    700: '#F9B023', // Amarelo/laranja escuro
    600: '#FCBC3A', // Amarelo médio (interpolado)
    500: '#FFC83A', // Amarelo claro
    400: '#FFD460', // Amarelo muito claro (interpolado)
    300: '#FFDF86', // Amarelo clarissimo (interpolado)
  },
  
  // Cores para feedbacks
  feedback: {
    success: '#4CAF50',  // Verde
    error: '#F44336',    // Vermelho
    warning: '#F9B023',  // Amarelo/laranja
    info: '#2A4BA0',     // Azul
  },
};

// Definições de tema que usam as cores acima
const Theme = {
  colors: Colors,
  
  input: {
    background: {
      default: Colors.gray[50],
      filled: Colors.gray[100],
    },
    border: {
      default: Colors.gray[500],
      focused: Colors.primary[600],
      error: Colors.feedback.error,
      success: Colors.feedback.success,
      disabled: Colors.gray[500],
    },
    text: {
      default: Colors.gray[900],
      placeholder: Colors.gray[600],
      disabled: Colors.gray[600],
      label: Colors.gray[700],
      helper: Colors.gray[700],
    },
    icon: {
      default: Colors.gray[700],
      focused: Colors.primary[600],
      error: Colors.feedback.error,
      success: Colors.feedback.success,
      disabled: Colors.gray[600],
    },
  },
  
  button: {
    primary: {
      background: Colors.primary[600],
      text: Colors.gray[50],
      hoverBg: Colors.primary[700],
      pressedBg: Colors.primary[800],
      disabledBg: Colors.gray[500],
      disabledText: Colors.gray[50],
    },
    secondary: {
      background: Colors.gray[100],
      text: Colors.gray[900],
      hoverBg: Colors.gray[500],
      pressedBg: Colors.gray[600],
      disabledBg: Colors.gray[100],
      disabledText: Colors.gray[600],
    },
    accent: {
      background: Colors.accent[500],
      text: Colors.gray[900],
      hoverBg: Colors.accent[600],
      pressedBg: Colors.accent[700],
    },
  },
  
  card: {
    background: Colors.gray[50],
    border: Colors.gray[100],
    shadow: Colors.gray[900] + '20', // 20 = 12% opacidade em hex
    title: Colors.gray[900],
    subtitle: Colors.gray[700],
    text: Colors.gray[800],
  },
  
  typography: {
    heading: {
      color: Colors.gray[900],
      h1: 24,
      h2: 20,
      h3: 18,
      h4: 16,
    },
    body: {
      color: Colors.gray[800],
      large: 16,
      medium: 14,
      small: 12,
    },
    label: {
      color: Colors.gray[700],
      size: 14,
    },
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
};

export default Theme; 