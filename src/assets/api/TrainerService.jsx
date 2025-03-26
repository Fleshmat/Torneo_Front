import axios from "axios";


const API_URL = "https://tournaments-cwe7cmcagfhzd5dc.eastus2-01.azurewebsites.net/api/trainer";

const TrainerService = {

    getTrainer: async (trainerId) => {
        try {
            const response = await axios.get(`${API_URL}/${trainerId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching trainer:", error);
            throw error;
        }
    },

    createTrainer: async (trainer) => {
        try {
            const response = await axios.post(API_URL, trainer);
            return response;
        } catch (error) {
            console.error("Error creating trainer:", error);
            throw error;
        }
    },



};

export default TrainerService;

