import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WhatsAppProvider } from './context/WhatsAppContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WhatsAppProvider>
      <App />
    </WhatsAppProvider>
  </React.StrictMode>,
);
