import Axios from "./caller.service";

let getClassement = () => {
    return Axios.get('/classement/');
}

export const classementService = {
    getClassement
}