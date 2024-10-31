import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import AddApp from './AddApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddApp></AddApp>
  </StrictMode>,
)
