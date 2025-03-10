import { useState } from "react";

const initialTeams = [
  "Equipo 1", "Equipo 2", "Equipo 3", "Equipo 4",
  "Equipo 5", "Equipo 6", "Equipo 7", "Equipo 8",
  "Equipo 9", "Equipo 10", "Equipo 11", "Equipo 12",
  "Equipo 13", "Equipo 14", "Equipo 15", "Equipo 16"
];

export default function TournamentBracket() {
  const [rounds, setRounds] = useState([
    initialTeams,
    Array(8).fill(null),
    Array(4).fill(null),
    Array(2).fill(null),
    Array(1).fill(null)
  ]);

  const advanceTeam = (roundIndex, matchIndex, team) => {
    const newRounds = [...rounds];
    newRounds[roundIndex + 1][Math.floor(matchIndex / 2)] = team;
    setRounds(newRounds);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Torneo Eliminatorio</h1>
      <div className="grid grid-cols-5 gap-4 items-center">
        {/* Lado izquierdo */}
        <div className="flex flex-col justify-between h-full">
          {rounds[0].slice(0, 8).map((team, index) => (
            <div key={index} className="relative flex items-center">
              <div className="w-32 p-2 bg-gray-200 rounded shadow-md text-center">{team || "-"}</div>
              <div className="w-8 h-0.5 bg-black absolute right-0 top-1/2"></div>
            </div>
          ))}
        </div>

        {/* Primera ronda */}
        <div className="flex flex-col justify-around h-full">
          {rounds[1].slice(0, 4).map((team, index) => (
            <div key={index} className="relative flex items-center">
              <div className="w-8 h-0.5 bg-black absolute left-0 top-1/2"></div>
              <div className="w-32 p-2 bg-gray-200 rounded shadow-md text-center">{team || "-"}</div>
              <div className="w-8 h-0.5 bg-black absolute right-0 top-1/2"></div>
            </div>
          ))}
        </div>

        {/* Semifinal izquierda y derecha */}
        <div className="flex flex-col justify-around h-full">
          {rounds[2].slice(0, 2).map((team, index) => (
            <div key={index} className="relative flex items-center">
              <div className="w-8 h-0.5 bg-black absolute left-0 top-1/2"></div>
              <div className="w-32 p-2 bg-gray-200 rounded shadow-md text-center">{team || "-"}</div>
              <div className="w-8 h-0.5 bg-black absolute right-0 top-1/2"></div>
            </div>
          ))}
        </div>

        {/* Final */}
        <div className="flex flex-col justify-center h-full">
          <div className="relative flex items-center">
            <div className="w-8 h-0.5 bg-black absolute left-0 top-1/2"></div>
            <div className="w-32 p-2 bg-yellow-400 rounded shadow-md text-center">{rounds[4][0] || "-"}</div>
            <div className="w-8 h-0.5 bg-black absolute right-0 top-1/2"></div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="flex flex-col justify-between h-full">
          {rounds[0].slice(8).map((team, index) => (
            <div key={index} className="relative flex items-center">
              <div className="w-8 h-0.5 bg-black absolute left-0 top-1/2"></div>
              <div className="w-32 p-2 bg-gray-200 rounded shadow-md text-center">{team || "-"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
