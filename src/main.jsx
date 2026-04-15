import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FMLogisticResearchBoard from './generated.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FMLogisticResearchBoard></FMLogisticResearchBoard>
  </StrictMode>,
)
