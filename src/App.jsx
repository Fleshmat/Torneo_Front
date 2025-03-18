import './styles/style.css'
import './styles/brackets.css'
import { Route, Routes } from 'react-router-dom'
import TournamentBracket from './pages/TorneoInit'
import { TournamentsList } from './pages/TournamentsList'
import { TorneoProvider } from './contexts/TorneoContext'

function App() {

  return (
  <TorneoProvider>
    <Routes>
      <Route path='/tournamentkeys' element={<TournamentBracket />} />
      <Route path='/tournaments' element={<TournamentsList />} />
    </Routes>
  </TorneoProvider>
  )
}

export default App
