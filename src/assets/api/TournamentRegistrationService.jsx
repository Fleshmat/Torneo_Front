import axios from "axios";

const API_URL = "http://localhost:8080/api/tournament/register";


const TournamentRegistrationService = {
  registerTrainer: async (tournamentId, trainerId) => {
    try {
      const response = await axios.post(`${API_URL}/${tournamentId}`, { trainerId });
      return response.data;
    } catch (error) {
      console.error("Error registering trainer:", error);
      throw error;
    }
  },

  getRegistrationsByTournamentId: async (tournamentId) => {
    try {
      const response = await axios.get(`${API_URL}/${tournamentId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching registrations:", error);
      throw error;
    }
  }
};

export default TournamentRegistrationService;
