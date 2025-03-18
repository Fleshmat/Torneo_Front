import React from "react";
import { useNavigate } from "react-router-dom";
import TournamentRegistrationService from "../assets/api/TournamentRegistrationService";
import { useTorneoContext } from "../contexts/TorneoContext";

export const Modal = ({
  isOpen,
  onClose
}) => {


  const navigate = useNavigate();
//  const participants = TournamentRegistrationService.getRegistrationsByTournamentId(tournament.id);
const {tournamentSelected} = useTorneoContext();
  return (
    <div
      className={`modal fade ${isOpen ? "show d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: "#f8d7da"}}>
          <div className="modal-header">
            <h5 className="modal-title">{tournamentSelected?.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{tournamentSelected?.description}</p>
          </div>
          {/* <div className="participants">
            <h5>Participantes {participants.then.length}/16</h5>
            {participants.map((participant) => (
              <div key={participant.id}>{participant.name}</div>
            ))}
          </div> */}
          <div className="modal-footer">
          <button
              type="button"
              className="btn btn-warning"
              onClick= {() => navigate("/tournamentkeys")}
              style={{backgroundColor: "#8B0000", borderColor: "#8B0000", color: "white"}}
            >
              Ver avances del torneo
            </button>
            

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Get it!
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
};
