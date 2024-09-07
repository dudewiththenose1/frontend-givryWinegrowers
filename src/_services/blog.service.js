import Axios from "./caller.service";

let getAllBlogs = () => {
    return Axios.get('/blog/')
}

let getBlog = (jid) => {
    return Axios.get('/blog/' + jid);
}

let updateBlog = (credentials) => {
    return Axios.put('/blog', {
        id_blog: credentials.id_blog,
        titre: credentials.titre,
        contenu: credentials.contenu
    })
}

let deleteBlog = (jid) => {
    return Axios.delete('/blog/' + jid);
}

let newBlog = (credentials) => {
    
    return Axios.post('/blog', {
        titre: credentials.titre,
        contenu: credentials.contenu
    })
}

export const blogService = {
    getAllBlogs, getBlog, updateBlog, deleteBlog, newBlog
}