

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
            const response = await axios.post(API_URL, trainer);
            return response.data;
        } catch (error) {
            console.error("Error creating trainer:", error);
            throw error;
        }
    },



};

export default TrainerService;

