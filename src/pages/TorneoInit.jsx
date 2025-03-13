import { useState } from "react";


export default function TournamentBracket() {

  const grupos = [
    { origen: [1, 2], destino: 9 },
    { origen: [3, 4], destino: 10 },
    { origen: [5, 6], destino: 11 },
    { origen: [7, 8], destino: 12 },
    { origen: [22, 23], destino: 18 },
    { origen: [24, 25], destino: 19 },
    { origen: [26, 27], destino: 20 },
    { origen: [28, 29], destino: 21 },
    { origen: [9, 10], destino: 13 },
    { origen: [11, 12], destino: 14 },
    { origen: [18, 19], destino: 16 },
    { origen: [20, 21], destino: 17 },
    { origen: [13, 14], destino: 30 },
    { origen: [16, 17], destino: 31 },
    { origen: [30, 31], destino: 15 },

  ];

  const [indiceGrupo, setIndiceGrupo] = useState(0);

  const nextPosition = (event) => {
    if (indiceGrupo >= grupos.length) return; // Se salio

    const { origen, destino } = grupos[indiceGrupo];
    const elemDestino = document.getElementById(destino);

    if (elemDestino) {
      const nuevoDiv = document.createElement("div");
      nuevoDiv.className = "bracket-name";

      console.log("Entra elemenD "+destino)

      const na = Math.random() * 2;
      const g = na > 1 ? 0 : 1
      const elemOrigen = document.getElementById(origen[g])?.firstElementChild;
      let contenido = "";
      if (elemOrigen) {
        contenido += elemOrigen.textContent + " ";
      }


      // Asignar el contenido y agregarlo al destino
      nuevoDiv.textContent = contenido.trim();
      elemDestino.appendChild(nuevoDiv);

    }

    // Pasar al siguiente grupo en la siguiente pulsación
    setIndiceGrupo(prev => prev + 1);
  }

  return (
    <>
      <div className="header">
        <h1>Llaves de torneo Pokemon</h1>
      </div>
      {/* <img src="src\assets\pokemon_championships.png" alt="Torneo pokemon" width={100}/> */}
      <div className="bracket-container">
        {/* Nivel 1 */}
        <div className="bracket-level">
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="1" className="bracket-team winner">
              <div id="hola" className="bracket-name">Fordam</div>
            </div>
            <div id="2" className="bracket-team loser">
              <div className="bracket-name">Heart</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="3" className="bracket-team loser">
              <div className="bracket-name">Kentucky</div>
            </div>
            <div className="bracket-team winner">
              <div id="4" className="bracket-name">Indiana</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="5" className="bracket-team winner">
              <div className="bracket-name">UNI</div>
            </div>
            <div id="6" className="bracket-team loser">
              <div className="bracket-name">Austin</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="7" className="bracket-team winner">
              <div className="bracket-name">Montana</div>
            </div>
            <div id="8" className="bracket-team loser">
              <div className="bracket-name">Diego</div>
            </div>
          </div>
          <div className="bracket-matchup" />
        </div>
        {/* Nivel 2 */}
        <div className="bracket-level">
          <div className="bracket-matchup" />
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="9" className="bracket-team winner">
            </div>
            <div id="10" className="bracket-team loser">
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup" />
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="11" className="bracket-team winner">
            </div>
            <div id="12" className="bracket-team loser">
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup" />
        </div>
        {/* Nivel 3 */}
        <div className="bracket-level">
          <div className="bracket-matchup">
            <div id="13" className="bracket-team">
            </div>
            <div id="14" className="bracket-team">
            </div>
          </div>
        </div>
        {/* Nivel 4 */}
        <div className="bracket-level">
          <div>
            <img src="src\assets\pokemon_championships.png" alt="Torneo pokemon" width={150} />
          </div>
          <div className="bracket-matchup">
            <div id="30" className="bracket-team winner">
            </div>
            <div id="31" className="bracket-team loser">
            </div>
          </div>
          <div className="bracket-matchup">
            <div id="15" className="winner-team winner">
            </div>
          </div>
        </div>
        {/* Nivel 5 */}
        <div className="bracket-level">
          <div className="bracket-matchup">
            <div id="16" className="bracket-team loser">
            </div>
            <div id="17" className="bracket-team winner">
            </div>
          </div>
        </div>
        {/* Nivel 6 */}
        <div className="bracket-level">
          <div className="bracket-matchup" />
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="18" className="bracket-team winner">
            </div>
            <div id="19" className="bracket-team loser">
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup" />
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="20" className="bracket-team loser">
            </div>
            <div id="21" className="bracket-team winner">
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup" />
        </div>
        {/* Nivel 7 */}
        <div className="bracket-level">
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="22" className="bracket-team winner">
              <div className="bracket-name">Sam</div>
            </div>
            <div id="23" className="bracket-team loser">
              <div className="bracket-name">Louisiana</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="24" className="bracket-team loser">
              <div className="bracket-name">James</div>
            </div>
            <div id="25" className="bracket-team winner">
              <div className="bracket-name">Liberty</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="26" className="bracket-team winner">
              <div className="bracket-name">Richmond</div>
            </div>
            <div id="27" className="bracket-team loser">
              <div className="bracket-name">Morgan</div>
            </div>
          </div>
          <div className="bracket-matchup" />
          <div className="bracket-matchup">
            <div id="28" className="bracket-team loser">
              <div className="bracket-name">Montana</div>
            </div>
            <div id="29" className="bracket-team winner">
              <div className="bracket-name">South</div>
            </div>
          </div>
          <div className="bracket-matchup" />
        </div>
      </div>
      <div>
        <button onClick={nextPosition}>Presiona</button>
      </div>
    </>
  );
}
