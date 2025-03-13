import React from "react";

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
        <div className="list-group" key={tournament.id}>
          <a
            href="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
            
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{tournament.name}</h5>
              <small></small>
            </div>
            <p className="mb-1">{tournament.description}</p>
            <small>And some small print.</small>
            <div  style={{}}>
          <button type="button" class="btn btn-info" style={{marginRight:"10px"}}>
            Info
          </button>
          <button type="button" class="btn btn-success" style={{marginRight:"10px"}}>
            Success
          </button>
          <button type="button" class="btn btn-danger" >
            Danger
          </button>

          </div>
          </a>
          
          <hr />
        </div>
      ))}
    </div>
  );
};
