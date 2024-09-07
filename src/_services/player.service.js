import Axios from "./caller.service";

let getAllJoueurs = () => {
    return Axios.get('/joueur/')
}

let getJoueur = (jid) => {
    return Axios.get('/joueur/' + jid);
}

let updateJoueur = (credentials) => {
    console.log("credentials:",credentials)
    return Axios.put('/joueur', {
        id_joueur: credentials.id_joueur,
        nom: credentials.nom,
        prenom: credentials.prenom,
        id_equipe: credentials.id_equipe
    })
}

let deleteJoueur = (jid) => {
    return Axios.delete('/joueur/' + jid);
}

let newJoueur = (credentials) => {
    return Axios.post('/joueur', {
        nom: credentials.nom,
        prenom: credentials.prenom,
        id_equipe: credentials.id_equipe
    })
}

let uploadImage = (data) => {
    console.log("data", data);
    return Axios.post('/image/upload/joueur', data, {
        headers: { "Content-Type": "multipart/form-data" },
    });
}

let getImage = (id) => {
    console.log("id", id);
    return Axios.get('/image/joueur/' + id);
}


export const joueurService = {
    getAllJoueurs, getJoueur, updateJoueur, deleteJoueur, uploadImage, newJoueur, getImage
}