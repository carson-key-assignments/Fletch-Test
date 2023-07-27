// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
// App JSX
import App from './App.jsx';
// Tailwind
import './tailwind.css'
// Helpers
import reportWebVitals from './helpers/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
