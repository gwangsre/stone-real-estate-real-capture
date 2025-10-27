// API Configuration - Single source of truth for backend URLs
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://stone-real-estate-real-capture-back.vercel.app';

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  
  // Authentication endpoints
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
    ME: `${API_BASE_URL}/api/v1/auth/me`,
    REFRESH: `${API_BASE_URL}/api/v1/auth/refresh`
  },
  
  // Leads endpoints
  LEADS: {
    BASE: `${API_BASE_URL}/api/v1/leads`,
    PUBLIC: `${API_BASE_URL}/api/v1/leads/public`
  },
  
  // Messages endpoints
  MESSAGES: {
    BASE: `${API_BASE_URL}/api/v1/messages`,
    PUBLIC: `${API_BASE_URL}/api/v1/messages/public`,
    PUBLIC_FIRST: `${API_BASE_URL}/api/v1/messages/public-first`
  },
  
  // Admin endpoints
  ADMIN: {
    BASE: `${API_BASE_URL}/api/v1/admin`
  },
  
  // Form Header endpoints
  FORM_HEADER: {
    PUBLIC: `${API_BASE_URL}/api/v1/form-header`,
    ADMIN: `${API_BASE_URL}/api/v1/form-header`
  },
  
  // Footer endpoints
  FOOTER: {
    PUBLIC: `${API_BASE_URL}/api/v1/footer`,
    ADMIN: `${API_BASE_URL}/api/v1/footer`
  }
};

export default API_CONFIG;