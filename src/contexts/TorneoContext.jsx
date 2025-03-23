import React, { createContext, useState, useEffect, useContext } from 'react';

// Creamos el contexto
const TorneoContext = createContext();
export const useTorneoContext = () => {
  const context = useContext(TorneoContext);
  if (!context) {
    throw new Error("useTorneoContext debe estar dentro del proveedor TorneoProvider");
  }else{
    return context;
  } 
};
// Componente proveedor que envuelve a los componentes hijos
export const TorneoProvider = ({ children }) => {
  const [tournamentSelected, setTournamentSelected] = useState(null);

  useEffect(() => {
    let initialTournamentSelected;
    try {
      initialTournamentSelected = JSON.parse(localStorage.getItem("tournamentSelected"));
    } catch (e) {
      initialTournamentSelected = null;
    }
    setTournamentSelected(initialTournamentSelected);
  }, []);
  return (
    <TorneoContext.Provider value={{ tournamentSelected, setTournamentSelected }}>
      {children}
    </TorneoContext.Provider>
  );
};

