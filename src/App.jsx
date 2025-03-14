import './styles/style.css'
import './styles/brackets.css'
import { Route, Routes } from 'react-router-dom'
import TournamentBracket from './pages/TorneoInit'
import { TournamentsList } from './pages/TournamentsList'

function App() {

  return (
    <Routes>
      
      <Route path='/tournamentkeys' element={<TournamentBracket />} />
      <Route path='/tournaments' element={<TournamentsList />} />
      
    </Routes>
  )
}

export default App
