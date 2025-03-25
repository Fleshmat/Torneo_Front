import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const apiBattle = axios.create({
    baseURL: "http://api/battles",
});


const mockBattle = new MockAdapter(apiBattle);

const battles= [
    {id: 1,phase: 1,firstParticipant: 1,secondParticipant: 2,winner: 1,battleDuration: "00:10:00"},
    {id: 2,phase: 1,firstParticipant: 3,secondParticipant: 4,winner: 3,battleDuration: "00:12:30"},
    {id: 3,phase: 1,firstParticipant: 5,secondParticipant: 6,winner: 5,battleDuration: "00:11:00"},
    {id: 4,phase: 1,firstParticipant: 7,secondParticipant: 8,winner: 7,battleDuration: "00:13:00"},
    {id: 5,phase: 1,firstParticipant: 9,secondParticipant: 10,winner: 9,battleDuration: "00:14:00"},
    {id: 6,phase: 1,firstParticipant: 11,secondParticipant: 12,winner: 11,battleDuration: "00:15:00"},
    {id: 7,phase: 1,firstParticipant: 13,secondParticipant: 14,winner: 13,battleDuration: "00:16:00"},
    {id: 8,phase: 1,firstParticipant: 15,secondParticipant: 16,winner: 15,battleDuration: "00:17:00"},
    {id: 9,phase: 1,firstParticipant: 1,secondParticipant: 4,winner: 1,battleDuration: "00:10:00"},
    {id: 10,phase: 1,firstParticipant: 5,secondParticipant: 8,winner: 5,battleDuration: "00:11:00"},
    {id: 11,phase: 1,firstParticipant: 9,secondParticipant: 12,winner: 9,battleDuration: "00:12:00"},
    {id: 12,phase: 1,firstParticipant: 13,secondParticipant: 16,winner: 13,battleDuration: "00:13:00"},
    
    {id: 13,phase: 1,firstParticipant: 8,secondParticipant: 11,winner: 8,battleDuration: "00:14:20"},
    {id: 14,phase: 1,firstParticipant: 6,secondParticipant: 9,winner: 6,battleDuration: "00:12:45"},
    {id: 15,phase: 1,firstParticipant: 7,secondParticipant: 10,winner: 10,battleDuration: "00:10:30"},
    {id: 16,phase: 1,firstParticipant: 5,secondParticipant: 12,winner: 5,battleDuration: "00:15:00"},
    {id: 17,phase: 1,firstParticipant: 4,secondParticipant: 13,winner: 4,battleDuration: "00:16:25"},
    {id: 18,phase: 1,firstParticipant: 3,secondParticipant: 14,winner: 3,battleDuration: "00:11:50"},
    {id: 19,phase: 1,firstParticipant: 2,secondParticipant: 15,winner: 2,battleDuration: "00:13:10"},
    {id: 20,phase: 1,firstParticipant: 1,secondParticipant: 16,winner: 1,battleDuration: "00:14:00"},

];

// Obtener todas las batallas



// Actualizar una batalla, segun su ID
mockBattle.onPut(/\/battle\/\d+/).reply((config) => {
    const id = parseInt(config.url.match(/\d+/)[0]);
    const updatedData = JSON.parse(config.data);
    const battleIndex = battles.findIndex(b => b.id === id);
  
    if (battleIndex === -1) {
      return [404, { message: 'Battle not found' }];
    }
  
    battles[battleIndex] = { ...battles[battleIndex], ...updatedData };
    return [200, battles[battleIndex]];
  });


export default apiBattle;
