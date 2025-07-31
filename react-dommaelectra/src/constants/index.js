/**
 * Constantes da aplicação
 */

// Breakpoints para responsividade
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1200,
};

// Tempos de animação
export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 800,
};

// Z-index layers
export const Z_INDEX = {
  DROPDOWN: 1000,
  MODAL: 2000,
  TOOLTIP: 3000,
  NOTIFICATION: 4000,
};

// Cores do tema
export const COLORS = {
  PRIMARY: '#667eea',
  SECONDARY: '#764ba2',
  SUCCESS: '#28a745',
  WARNING: '#ffc107',
  ERROR: '#dc3545',
  INFO: '#17a2b8',
  LIGHT: '#f8f9fa',
  DARK: '#343a40',
  WHITE: '#ffffff',
  BLACK: '#000000',
};

// Gradientes
export const GRADIENTS = {
  PRIMARY: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  SECONDARY: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  SUCCESS: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
  WARNING: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
  ERROR: 'linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)',
};

// Configurações de animação
export const ANIMATION_CONFIG = {
  THRESHOLD: 0.2,
  ROOT_MARGIN: '0px 0px -50px 0px',
  ANIMATION_CLASS: 'animate',
};

// Configurações de scroll
export const SCROLL_CONFIG = {
  BEHAVIOR: 'smooth',
  BLOCK: 'start',
  INLINE: 'nearest',
};

// Mensagens de erro
export const ERROR_MESSAGES = {
  SERVICE_NOT_FOUND: 'Serviço não encontrado',
  ELEMENT_NOT_FOUND: 'Elemento não encontrado',
  INVALID_EMAIL: 'Email inválido',
  REQUIRED_FIELD: 'Campo obrigatório',
};

// Mensagens de sucesso
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Formulário enviado com sucesso!',
  DATA_SAVED: 'Dados salvos com sucesso!',
  OPERATION_COMPLETED: 'Operação concluída com sucesso!',
};

// Configurações de API
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://api.dommaelectra.com',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Configurações de localStorage
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  LANGUAGE: 'language',
  SESSION: 'session',
};

// Configurações de acessibilidade
export const ACCESSIBILITY = {
  FOCUS_VISIBLE: true,
  REDUCED_MOTION: 'prefers-reduced-motion',
  HIGH_CONTRAST: 'prefers-contrast',
};

// Configurações de performance
export const PERFORMANCE = {
  DEBOUNCE_DELAY: 300,
  THROTTLE_DELAY: 100,
  LAZY_LOAD_OFFSET: 100,
};

// Configurações de SEO
export const SEO = {
  SITE_NAME: 'Domma Electra',
  SITE_DESCRIPTION: 'Automação residencial personalizada com tecnologia de ponta',
  SITE_URL: 'https://dommaelectra.com',
  DEFAULT_IMAGE: '/logo.webp',
};

// Configurações de contato
export const CONTACT = {
  PHONE: '+55 (11) 99999-9999',
  EMAIL: 'contato@dommaelectra.com',
  WHATSAPP: '+5511999999999',
  ADDRESS: 'São Paulo, SP - Brasil',
};

// Configurações de redes sociais
export const SOCIAL_MEDIA = {
  FACEBOOK: 'https://facebook.com/dommaelectra',
  INSTAGRAM: 'https://instagram.com/dommaelectra',
  LINKEDIN: 'https://linkedin.com/company/dommaelectra',
  YOUTUBE: 'https://youtube.com/dommaelectra',
};
