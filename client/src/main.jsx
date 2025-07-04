import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/bootstrap.min.css'
import './styles/main.css'
import './js/bootstrap.bundle.js'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
 


import AOS from 'aos'

 

AOS.init({
  offset: 120,
  duration: 1400,
  once: true,
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
