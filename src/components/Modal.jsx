import React from "react";
import { useNavigate } from "react-router-dom";

export const Modal = ({
  isOpen,
  onClose,
  tournament
}) => {


  const navigate = useNavigate();


  return (
    <div
      className={`modal fade ${isOpen ? "show d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: "#f8d7da"}}>
          <div className="modal-header">
            <h5 className="modal-title">{tournament?.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{tournament?.description}</p>
          </div>
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
