import './App.css'
import { Route, Routes } from 'react-router-dom'
import TournamentBracket from './pages/torneoInit'

function App() {

  return (
    <Routes>

      <Route path='/' element={<TournamentBracket />} />
      
    </Routes>
  )
}

export default App
