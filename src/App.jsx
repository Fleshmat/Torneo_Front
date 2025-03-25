import './styles/style.css'
import './styles/brackets.css'
import { Route, Routes } from 'react-router-dom'
import TournamentBracket from './Pages/TorneoInit'
import { TournamentsList } from './Pages/TournamentsList'
import { TorneoProvider } from './contexts/TorneoContext'
import { TrainerProvider } from './contexts/TrainerProvider'

function App() {

  return (
  <TorneoProvider>
    <TrainerProvider>
    <Routes>
      <Route path='/tournamentkeys' element={<TournamentBracket />} />
      <Route path='/tournaments' element={<TournamentsList />} />
      <Route path='/' element={<TournamentsList />} />
      
    </Routes>
    </TrainerProvider>
  </TorneoProvider>
  )
}

export default App
