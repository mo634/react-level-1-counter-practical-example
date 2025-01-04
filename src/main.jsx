// create root to link v-dom with real dom 

import { createRoot } from 'react-dom/client'

import App from "./App.jsx"

createRoot(document.getElementById('root')).render(<App />)