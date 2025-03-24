import React, { useContext, useState } from 'react'
import { TrainerContext } from '../contexts/TrainerProvider';
import apiTrainer from '../mocks/apiTrainerMock';

export const TrainersRegisterModal = ({
    isOpen, onClose, onConfirm
}) => {

    const { searchTrainer, fetchingTeam, trainer, createTeam, setTrainer, createTrainer } = useContext(TrainerContext);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSetTrainer = async () => {
        setMessage("");
        try {
            const trainerData = await searchTrainer(email);

            if (trainerData) {
                
                setMessage("Mr. Trainer, we found you! :D");
                setEmail('');
                setTrainer((prev) => ({ ...prev, id: trainerData.id, name: trainerData.name }));
                await fetchingTeam(trainer.id);
                const teamData = await createTeam(trainer.team);
                console.log(teamData);
                debugger;
                if (!teamData) {
                    throw new Error("Failed to create team");
                }
                await createTrainer();
            } else {
                setMessage("Mr. Trainer, we couldn't create your team correctly:(");
            }

        } catch (error) {
            setMessage("Mr. Trainer, we couldn't find you correctly:(");
            console.error("Server failed:(", error);
        }
    }




    return (
        <div className={`modal fade ${isOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Regitro de entrenador al torneo</h5>
                    </div>
                    <div className="modal-body">

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                required
                                onChange={handleInputChange}
                                value={email}
                                placeholder='Mr. Trainer, please enter your email. :3'
                            />
                        </div>
                        {message && (
                            <div
                                className={message.includes("couldn't") ? "alert alert-danger" : "alert alert-success"}
                                role="alert"
                            >
                                {message}
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="button" className="btn btn-danger" onClick={() => {
                            handleSetTrainer();
                            onConfirm;
                        }}>
                            Confirmar
                        </button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}
