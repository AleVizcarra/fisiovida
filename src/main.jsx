import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FisiovidaApp } from './FisiovidaApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FisiovidaApp />
    </BrowserRouter>
  </React.StrictMode>,
)
