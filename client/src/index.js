import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
/* import reportWebVitals from './reportWebVitals'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Exemple de fonction pour tester l'API (côté client)
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/horoscope');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Appeler fetchData pour tester si nécessaire
// fetchData();



