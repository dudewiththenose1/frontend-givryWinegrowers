import Axios from "./caller.service"

let login = (credentials) => {
    return Axios.post('/home',credentials)
}



// ATTENTION CE N EST PAS PROTEGE
let saveToken = (token) => {
    localStorage.setItem('token', token)
    
}

let getId = async (pseudo) => {
    try {
        const response = await Axios.get('/user/'+ pseudo );
        console.log("user", response.data);
        return response.data;
    } catch (error) {
        
    }
};

let saveUsername = (username) => {
    localStorage.setItem('username', username)
}

let getUsername = () => {
    return localStorage.getItem('username')
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let getToken = () => {
    return localStorage.getItem('token')
}

export const accountService = {
    login, saveToken, logout, isLogged, getToken, saveUsername, getUsername, getId
}