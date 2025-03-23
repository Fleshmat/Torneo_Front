import React, { useContext, useState } from 'react'
import { TrainerContext } from '../contexts/TrainerProvider';
import api from '../mocks/apiTrainerMock';

export const TrainersRegisterModal = ({
    isOpen, onClose, onConfirm
}) => {

    const { setTrainer } = useContext(TrainerContext);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleInputChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleSetTrainer = async () => {
        try {
            const response = await api.get(`/trainer/${email}`);
            if (response.status === 200) {
                setTrainer(response.data);
                setMessage("Mr. Trainer, we found you correctly and you have been registered:3");
                console.log("Mr. Trainer, we found you correctly:3");
                setEmail("");
            } else {
                setMessage("Mr. Trainer, we couldn't find you correctly:3");
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
                                className={ message.includes("couldn't")?"alert alert-danger" : "alert alert-success"}
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
