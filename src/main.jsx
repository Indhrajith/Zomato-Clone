import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // Contains Navbar and Hero
import AppRoutes from './routes/AppRoutes.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />          {/* Navbar + Hero */}
      <AppRoutes />    {/* Main routes (restaurants, add, edit) */}
    </BrowserRouter>
  </React.StrictMode>
);
