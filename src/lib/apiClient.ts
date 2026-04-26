import axios, { type AxiosInstance } from 'axios';
import { API_BASE_URL } from '../config/api-endpoints';

/** Key used with `localStorage` for Bearer tokens once the backend issues JWTs */
export const AUTH_TOKEN_STORAGE_KEY = 'auth_token';

function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
}

/**
 * Shared Axios instance for REST calls. Import `API_ENDPOINTS` paths from
 * `src/config/api-endpoints.ts` and response types from `src/types/api-responses.ts`.
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getStoredToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function setAuthToken(token: string | null): void {
  if (typeof window === 'undefined') return;
  if (token) {
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
  } else {
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  }
}
