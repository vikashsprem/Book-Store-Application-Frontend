import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Icon
import '@fortawesome/fontawesome-free/css/all.css';

// apiConfig.js
export const BASE_URL = "http://localhost:8081/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
