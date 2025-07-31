/**
 * Utilitários JavaScript para o projeto Domma Electra
 */

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Smooth scroll to element
export const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }
};

// Check if element is in viewport
export const isElementInViewport = el => {
  if (!el) {
    return false;
  }

  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= windowHeight && rect.right <= windowWidth
  );
};

// Format phone number
export const formatPhone = phone => {
  if (!phone) {
    return '';
  }

  const cleaned = phone.replace(/\D/gu, '');
  const match = cleaned.match(/^(?<ddd>\d{2})(?<prefix>\d{4,5})(?<number>\d{4})$/u);

  if (match) {
    return `(${match.groups.ddd}) ${match.groups.prefix}-${match.groups.number}`;
  }

  return phone;
};

// Validate email
export const isValidEmail = email => {
  if (!email) {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
  return emailRegex.test(email);
};

// Capitalize first letter
export const capitalize = str => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Generate unique ID
export const generateId = () => Math.random().toString(36).substr(2, 9);

// Deep clone object
export const deepClone = obj => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  return obj;
};

// Check if device is mobile
export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent);

// Check if device supports touch
export const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Get URL parameter
export const getUrlParameter = name => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

// Set URL parameter
export const setUrlParameter = (name, value) => {
  const url = new URL(window.location);
  url.searchParams.set(name, value);
  window.history.replaceState({}, '', url);
};
