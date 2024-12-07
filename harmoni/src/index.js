import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//  I am pankaj

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={1500} />
  </React.StrictMode>
);

reportWebVitals();
