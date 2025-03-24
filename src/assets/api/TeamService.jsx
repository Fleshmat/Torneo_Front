import axios from "axios";

const API_URL = "http://localhost:8080/api/team";

const TeamService = {
    
        getTeam: async (teamId) => {
            try {
                const response = await axios.get(`${API_URL}/${teamId}`);
                return response.data;
            } catch (error) {
                console.error("Error fetching team:", error);
                throw error;
            }
        },
    
        createTeam: async (team) => {

            try {
                const newTeam = {
                    id: team
                }
                console.log(newTeam);
                const response = await axios.post(API_URL, newTeam);
                return response.data;
            } catch (error) {
                console.error("Error creating team:", error);
                throw error;
            }
        },
};

export default TeamService;