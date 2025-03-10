import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import TorneoInit from './pages/torneoInit'

function App() {

  return (
    <Routes>

      <Route path='/' element={<TorneoInit />} />
      
    </Routes>
  )
}

export default App
