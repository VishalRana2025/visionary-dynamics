import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";   // ✅ ADD THIS
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>   {/* ✅ WRAP APP */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);