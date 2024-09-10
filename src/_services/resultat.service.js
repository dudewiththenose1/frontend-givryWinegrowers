import Axios from "./caller.service";

let getResultat = () => {
    return Axios.get('/resultat');
}

export const resultatService = {
    getResultat
}