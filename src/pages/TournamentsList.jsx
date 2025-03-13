import React, { useState } from "react";

export const TournamentsList = () => {
  const tournaments = [
    {
      id: 1,
      tournamentState: {
        id: 1,
        name: "Active",
      },
      eliminationFormat: {
        id: 2,
        name: "Single Elimination",
      },
      name: "Spring Championship",
      description: "Annual spring Pokémon tournament",
      maxParticipantQuantity: 32,
      minParticipantQuantity: 8,
      startDate: "2025-04-01",
      endDate: "2025-04-15",
    },
    {
      id: 2,
      tournamentState: {
        id: 2,
        name: "Completed",
      },
      eliminationFormat: {
        id: 1,
        name: "Double Elimination",
      },
      name: "Winter Cup",
      description: "Winter Pokémon battle tournament",
      maxParticipantQuantity: 64,
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
      eliminationFormat: {
        id: 3,
        name: "Swiss System",
      },
      name: "Summer Clash",
      description: "A competitive Pokémon tournament in summer",
      maxParticipantQuantity: 48,
      minParticipantQuantity: 12,
      startDate: "2025-07-10",
      endDate: "2025-07-25",
    },
  ];


  return (
    <div className="container" style={{ marginTop: "30px", width: "50%" }}>
      {tournaments.map((tournament) => (
        <div key={tournament.id}>
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
              aria-current="true"
              style={{backgroundColor: "purple", borderColor: "purple"}}
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
                  style={{ marginRight: "10px" }}
                >
                  Info
                </button>
                <button
                  type="button"
                  className={tournament.tournamentState.name==="Active" ? "btn btn-success": "btn btn-primary"}
                  style={{ marginRight: "10px" }}
                >
                  Estado: {tournament.tournamentState.name}
                </button>
                <button type="button" className="btn btn-warning">
                  Registrarme
                </button>
              </div>
            </a>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};
