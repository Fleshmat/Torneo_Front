import React, { useContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { tournamentService } from "../assets/api/TournamentService";
import { useTorneoContext } from "../contexts/TorneoContext";

export const TournamentsList = () => {

  const [tournamentsList, setTournamentsList] = useState([]);
  const {setTournamentSelected} = useTorneoContext();
  const [isInfoModalOpen, setIsInfoModalOpen] =
    useState(false);

  const openInfoModal = (tournamentSelected1) => {
    setTournamentSelected(tournamentSelected1);
    // console.log("Tournament selected", tournamentSelected1);
    setIsInfoModalOpen(true);
  }
  const closeInfoModal = () => setIsInfoModalOpen(false);

  useEffect(() => {
    loadTournaments();
  }, []);

  const loadTournaments = async () => {
    const tournaments = await tournamentService.getTournaments();
    setTournamentsList(tournaments);
  }

  const [alertMessage, setAlertMessage] = useState("");

  const handleClickRegister = (tournamentId) => {
    console.log("Registering to tournament with id", tournamentId);
    setAlertMessage("You have been registered to the tournament: ");
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };



  return (
    <div className="container" style={{ marginTop: "30px", width: "50%" }}>
      <div>
        {alertMessage && (
          <div
            className="alert alert-success"
            role="alert"
          >
            {alertMessage}
          </div>
        )}
      </div>
      {tournamentsList.map((tournament) => (
        <div key={tournament.id}>
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
              aria-current="true"
              style={{ backgroundColor: "purple", borderColor: "purple", opacity: "0.7" }}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{tournament.name}</h5>
                <small></small>
              </div>
              <p className="mb-1">{tournament.description}</p>
              <small>And some small print.</small>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="button"
                  className="btn btn-info"
                  style={{ marginRight: "10px", backgroundColor: "#ee80b7", borderColor: "#ee80b7" }}
                  onClick={() => openInfoModal(tournament)}
                >
                  Info
                </button>
                <button
                  type="button"
                  className={
                    tournament.tournamentState === "En Registro"
                      ? "btn btn-success"
                      : "btn btn-warning"
                  }
                  style={{ marginRight: "10px" }}
                >
                  Estado: {tournament.tournamentState}
                </button>
                {tournament.tournamentState === "En Registro" ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleClickRegister(tournament.id)}
                    style={{ color: "white" }}
                  >
                    Registrarme
                  </button>
                ) : null}
              </div>

            </a>

          </div>
          <Modal
            isOpen={isInfoModalOpen}
            onClose={closeInfoModal}
          />
                
          <br />
        </div>

      ))}


    </div>
  );
};
