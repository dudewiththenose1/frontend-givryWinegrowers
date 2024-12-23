import Axios from "./caller.service";

let getClassement = () => {
    return Axios.get('/classement');
}

let getResultat = () => {
    return Axios.get('/classement/resultat');
}

export const classementService = {
    getClassement,
    getResultat
}