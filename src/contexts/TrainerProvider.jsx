import { createContext, useState } from "react";
import TrainerService from "../assets/api/TrainerService";
import TeamService from "../assets/api/TeamService";
import apiTeams from "../mocks/apiTeamMock";
import apiTrainer from "../mocks/apiTrainerMock";

export const TrainerContext = createContext();

export const TrainerProvider = ({ children }) => {
    const [trainer, setTrainer] = useState({
        id: "",
        team: null,
        name: "",
    });


    const searchTrainer = async (email) => {
        try {
            const { data } = await apiTrainer.get(`/trainer/${email}`);
            setTrainer(data);
            return data;
        } catch (error) {
            console.error("Error fetching trainer:", error);
            return null;
        }
    };

    const fetchingTeam = async(trainerId)=>{
        try {
            const { data } = await apiTeams.get(`/trainer/${trainerId}`);
            if (!data || typeof data.id === "undefined") {
                console.error("No valid team data found");
                return;
            }
            setTrainer((prev) => ({ ...prev, team: data.equipoSeleccionado }));
            console.log("Team fetched successfully", data);
            return data.equipoSeleccionado;
        } catch (error) {
            console.error("Error fetching team:", error);
            return null;
        }
    }


    const createTeam = async(teamId)=>{
        console.log(teamId);
        try {
            const { data } = await TeamService.createTeam(teamId);
            return data;
        } catch (error) {
            console.error("Error creating team:", error);
        }
    }

    

    const createTrainer = async () => {
        try {
            console.log("Creating trainer...");
            
            const { status } = await TrainerService.createTrainer(trainer);
            if (status === 201) {
                console.log("Trainer created successfully");
            }
        } catch (error) {
            console.error("Error creating trainer:", error);
        }
    }


    return (
        <TrainerContext.Provider value={{ trainer, setTrainer, searchTrainer, fetchingTeam, createTrainer, createTeam }}>
            {children}
        </TrainerContext.Provider>
    );
}