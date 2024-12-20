import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Asegúrate de que el import esté apuntando a 'App.jsx'
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
