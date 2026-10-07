import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/stack-sans-notch';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
