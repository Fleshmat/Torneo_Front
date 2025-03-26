import axios from "axios";

const API_URL = "https://tournaments-cwe7cmcagfhzd5dc.eastus2-01.azurewebsites.net/api/tournament";

export const tournamentService = {
    async getTournaments() {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    },
    async getTournament(id) {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    },
    async createTournament(tournament) {
        const response = await axios.post(`${API_URL}`, tournament);
        return response.data;
    },
    async updateTournament(tournament) {
        const response = await axios.put(`${API_URL}/${tournament.id}`, tournament);
        return response.data;
    },
    async deleteTournament(id) {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    },
}