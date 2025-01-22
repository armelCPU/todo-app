import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ItemsProvider} from "./contexts/ItemsContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </StrictMode>,
)
