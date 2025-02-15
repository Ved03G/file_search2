import { useState } from 'react'
import Home from './components/Home.tsx'
import LandingPage from './components/LandingPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <LandingPage />
    
    </>
  )
}

export default App
