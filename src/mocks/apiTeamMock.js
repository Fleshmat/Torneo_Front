import axios from "axios";
import MockAdapter from "axios-mock-adapter";

//Creamos la instancia de la API fake con axios
const apiTeams = axios.create({
    baseURL: "http://api/teams",
});

//Creamos la instancia para mockear las peticiones
const mockTeams = new MockAdapter(apiTeams);

//Creamos los datos de entrenadores de prueba
const trainerTeams = [
    {id:1, entrenadorId: 1, equipoSeleccionado: 123 },
    {id:2, entrenadorId: 2, equipoSeleccionado: 456 },
    {id:3, entrenadorId: 3, equipoSeleccionado: 789 },
];

//Configuramos el mock para que realice la petición de busqueda al modulo de entrenadores por id del entrenador
mockTeams.onGet(/\/trainer\/\d+/).reply((config) => {
    const trainerId = config.url.split("/").pop();
    const team = trainerTeams.find((team) => team.entrenadorId === Number(trainerId));
    if (team) {
        return [200, team];
    }
    console.error(`No team found for trainerId: ${trainerId}`);
    return [404, { message: "Team not found" }];
});


export default apiTeams;