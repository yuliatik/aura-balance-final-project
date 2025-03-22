import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import './index.css';
import { store } from './redux/store.jsx';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css'; 




createRoot(document.getElementById('root')).render(   

  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  
 
)


