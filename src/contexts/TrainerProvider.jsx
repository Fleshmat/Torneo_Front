import { createContext, useState } from "react";

export const TrainerContext = createContext();

export const TrainerProvider = ({ children }) => {
    const [trainer, setTrainer] = useState({});

    

    return (
        <TrainerContext.Provider value={{ trainer, setTrainer }}>
            {children}
        </TrainerContext.Provider>
    );
}