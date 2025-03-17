import React, { useState } from "react";
import { Modal } from "../components/Modal";

export const TournamentsList = () => {

  const [isInfoModalOpen, setIsInfoModalOpen] =
    useState(false);

    const openInfoModal = () => setIsInfoModalOpen(true);
    const closeInfoModal = () => setIsInfoModalOpen(false);

  const tournaments = [
    {
      id: 1,
      tournamentState: {
        id: 1,
        name: "Active",
      },    
      name: "Spring Championship",
      description: "Annual spring Pokémon tournament",
      maxParticipantQuantity: 16,
      minParticipantQuantity: 16,
      startDate: "2025-04-01",
      endDate: "2025-04-15",
    },
    {
      id: 2,
      tournamentState: {
        id: 2,
        name: "Completed",
      },   
      name: "Winter Cup",
      description: "Winter Pokémon battle tournament",
      maxParticipantQuantity: 16,
      minParticipantQuantity: 16,
      startDate: "2024-12-01",
      endDate: "2024-12-20",
    },
    {
      id: 3,
      tournamentState: {
        id: 1,
        name: "Active",
      },
      name: "Summer Clash",
      description: "A competitive Pokémon tournament in summer",
      maxParticipantQuantity: 16,
      minParticipantQuantity: 12,
      startDate: "2025-07-10",
      endDate: "2025-07-25",
    },
  ];

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
      {tournaments.map((tournament) => (
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
                  onClick={openInfoModal}
                >
                  Info
                </button>
                <button
                  type="button"
                  className={
                    tournament.tournamentState.name === "Active"
                      ? "btn btn-danger"
                      : "btn btn-secondary"
                  }
                  style={{ marginRight: "10px" }}
                >
                  Estado: {tournament.tournamentState.name}
                </button>
                {tournament.tournamentState.name === "Active" ? (
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleClickRegister(tournament.id)}
                    style={{color: "white"}}
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
            tournament={tournament}
          />
          <br />
          
        </div>
        
      ))}
      
      
    </div>
  );
};
