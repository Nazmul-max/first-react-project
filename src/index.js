import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MainNav from './MainNav/MainNav';
import './Scss/Main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainNav />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
