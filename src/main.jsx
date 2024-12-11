import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DeviceRestriction from './js/components/DeviceRestriction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <DeviceRestriction>
    <App />
    </DeviceRestriction>
  </StrictMode>,
)
