import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'modern-normalize';
import App from './components/App';
import ModalProvider from './providers/ModalProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
  <ModalProvider>
    <App />
  </ModalProvider>
</React.StrictMode>);
