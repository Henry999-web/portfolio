import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
        <Toaster 
          position="bottom-center" 
          toastOptions={{ 
            style: { 
              background: '#1a1a1a', 
              color: '#fff',
              border: '1px solid #333'
            } 
          }} 
        />
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>,
)
