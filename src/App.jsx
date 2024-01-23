import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, ThemeProvider, Typography } from '@mui/material'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{minHeight:"100vh",width:'100vw',overflowY:'hidden', backgroundColor:"#003140", fontFamily:"'Roboto', sans-serif"}}>
        <Home/>
      </div>
    
  )
}

export default App
