import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// redux
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/api/apiSlice.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
)







// technologies: 
// React, TS, ReduxToolkit(RTKQ), ShadcnUi, Tailwind, Supabase

// Recuirements: 
// fonts, static icons and images (svg)
