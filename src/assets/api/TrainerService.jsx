import axios from "axios";

const API_URL = "http://localhost:8080/api/trainer";

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
            console.log("trainer", trainer);
            const newTrainer = {
                id: trainer.id,
                team: trainer.team,
                name: `${trainer.first_name} ${trainer.last_name}`,
            }
            console.log("newTrainer", newTrainer);
            console.log(typeof newTrainer.id);
            console.log(typeof newTrainer.team);
            console.log(typeof newTrainer.name);
            const response = await axios.post(API_URL, newTrainer);
            return response;
        } catch (error) {
            console.error("Error creating trainer:", error);
            throw error;
        }
    },



};

export default TrainerService;

