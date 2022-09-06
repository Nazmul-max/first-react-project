import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Slider from './Slider/slider-js';
import Contact from './Contact/contact-js';
import Footer from './Footer/footer-js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Slider />
    <Contact />
    <Footer />
  </React.StrictMode>
);
