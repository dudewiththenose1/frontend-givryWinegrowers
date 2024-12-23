import Axios from "./caller.service";

let getClassement = () => {
    return Axios.get('/classement');
}

let getResultat = () => {
    return Axios.get('/classement/resultat');
}

let getTest = () => {
    return Axios.get('/classement/test');
}

export const classementService = {
    getClassement,
    getResultat,
    getTest
}