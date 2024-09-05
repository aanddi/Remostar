import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AppProviders from '@common/providers';

import them from '@styles/app-them';

import { ConfigProvider } from 'antd';

import App from './App';
import { persistor, store } from './store';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={them}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor} />
          <BrowserRouter>
            <AppProviders>
              <App />
            </AppProviders>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
);
