import React from 'react';
import ReactDOM from 'react-dom/client';  // Change this line
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* Your existing code */}
    <App />
  </React.StrictMode>
);
