import Axios from "./caller.service";

let getAllEquipes = () => {
    return Axios.get('/equipe/')
}

let getEquipe = (jid) => {
    return Axios.get('/equipe/' + jid);
}

let updateEquipe = (credentials) => {
    console.log("credentials",credentials)
    return Axios.put('/equipe', {
        id_equipe: credentials.id_equipe,
        nom: credentials.nom
    })
}

let deleteEquipe = (jid) => {
    return Axios.delete('/equipe/' + jid);
}

let newEquipe = (credentials) => {
    return Axios.post('/equipe', {
        nom: credentials.nom
    })
}

export const equipeService = {
    getAllEquipes, getEquipe, updateEquipe, deleteEquipe, newEquipe
}