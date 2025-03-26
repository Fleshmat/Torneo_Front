import axios from "axios";

const API_URL = "https://tournaments-cwe7cmcagfhzd5dc.eastus2-01.azurewebsites.net/api/tournament/matches";

const BattleService = {
  generateMatchUps: async (tournamentId) => {
    try {
      const response = await axios.post(`${API_URL}/${tournamentId}`);
      return response.data;
    } catch (error) {
      console.error("Error generating matchups:", error);
      throw error;
    }
  },

  getMatchUps: async (tournamentId) => {
    try {
      const response = await axios.get(`${API_URL}/${tournamentId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching matchups:", error);
      throw error;
    }
  }
};

export default BattleService;
