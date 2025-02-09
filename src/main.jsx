import React from 'react';
// import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import { persistor, store } from './redux/store';
import './index.css'
import App from './components/App'
import { BrowserRouter } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode >
);
