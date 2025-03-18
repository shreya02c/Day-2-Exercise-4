import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Add.jsx'
import Review from './Review';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Review />
   
  </StrictMode>,
)
// import React from 'react';
