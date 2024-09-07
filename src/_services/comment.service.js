import Axios from "./caller.service";

let getComment = (jid) => {
    return Axios.get('/comment',{id_auteur : jid});
}


let deleteComment = (jid) => {
    return Axios.delete('/comment/' + jid);
}

let newComment = (idBlog, comment, username) => {

    return Axios.post('/comment', {
        id_auteur: username,
        contenu: comment,
        id_blog: idBlog
    })
}

export const commentService = {
    getComment, deleteComment, newComment
}