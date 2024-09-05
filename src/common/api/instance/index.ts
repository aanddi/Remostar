import axios from 'axios';

import { getAuthTokens } from '@common/utils';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = getAuthTokens();

    if (accessToken) {
      config.headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// interceptors

export default apiInstance;
