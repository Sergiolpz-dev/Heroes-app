import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { HooksApp } from './HooksApp.tsx'

import './index.css'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook.tsx'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithHook.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <TrafficLightWithHook />

  </StrictMode>,
)
