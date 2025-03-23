import axios from "axios";
import MockAdapter from "axios-mock-adapter";


//Creamos la instancia de la API fake con axios
const api = axios.create({
    baseURL: "http://api/trainers",
});

//Creamos la instracia para mockear las peticiones
const mockTrainer = new MockAdapter(api);

const trainers = [
    {id:1,birth_date:"1990-01-01",email:"ash.ketchum@example.com",first_name:"Ash",last_name:"Ketchum"},
    {id:3,birth_date:"1992-08-22",email:"brock.rock@example.com",first_name:"Brock",last_name:"Rock"},
    {id:4,birth_date:"1995-03-10",email:"gary.oak@example.com",first_name:"Gary",last_name:"Oak"},
    {id:2,birth_date:"1985-05-15",email:"misty.water@example.com",first_name:"Misty",last_name:"Water"},
    {id:5,birth_date:"1993-07-19",email:"may.maple@example.com",first_name:"May",last_name:"Maple"},
    {id:6,birth_date:"1991-11-25",email:"dawn.berlitz@example.com",first_name:"Dawn",last_name:"Berlitz"},
    {id:7,birth_date:"1994-04-30",email:"serena.yvonne@example.com",first_name:"Serena",last_name:"Yvonne"},
    {id:8,birth_date:"1988-09-12",email:"cynthia.shirona@example.com",first_name:"Cynthia",last_name:"Shirona"},
    {id:9,birth_date:"1996-02-14",email:"lillie.ahlberg@example.com",first_name:"Lillie",last_name:"Ahlberg"},
    {id:10,birth_date:"1997-06-05",email:"gladion.ahlberg@example.com",first_name:"Gladion",last_name:"Ahlberg"},
    {id:11,birth_date:"1998-12-20",email:"hau.makani@example.com",first_name:"Hau",last_name:"Makani"},
    {id:12,birth_date:"1999-10-08",email:"leon.champion@example.com",first_name:"Leon",last_name:"Champion"},
    {id:13,birth_date:"2000-03-03",email:"gloria.scott@example.com",first_name:"Gloria",last_name:"Scott"},
    {id:14,birth_date:"2001-07-17",email:"hop.timothy@example.com",first_name:"Hop",last_name:"Timothy"},
    {id:15,birth_date:"2002-05-22",email:"marnie.rose@example.com",first_name:"Marnie",last_name:"Rose"}
];


//Configuramos el mock para que realice la petición de busqueda por email
mockTrainer.onGet(/\/trainer\/\w+/).reply((config) => {
    const email = config.url.split("/").pop();
    const trainer = trainers.find((trainer) => trainer.email === email);
    if (trainer) {
        return [200, trainer];
    }
    return [404, { message: "Trainer not found" }];
});
    

export default api;


