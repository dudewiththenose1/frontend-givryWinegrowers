import React, { useState } from 'react';
import { commentService, accountService } from '@/_services'; // Assurez-vous que le chemin est correct

const AddComment = ({ idBlog }) => {
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Vérifiez si le commentaire n'est pas vide
        if (!comment) {
            setError('Le commentaire ne peut pas être vide.');
            return;
        }
        let username = await accountService.getUsername();
        let idUser = await accountService.getId(username);
        console.log("idUser", idUser.id_user)
        console.log("idBlog",idBlog)
        // Envoyer le commentaire au serveur
        commentService.newComment(idBlog, comment, idUser.id_user)
            .then(res => {
                setSuccess('Commentaire ajouté avec succès.');
                setComment(''); // Réinitialiser le champ de commentaire
            })
            .catch(err => {
                setError('Erreur lors de l\'ajout du commentaire.');
                console.error(err);
            });
    };

    return (
        <div className="add-comment">
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Ajouter un commentaire"
                    />
                </div>
                <button type="submit">Envoyer</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </div>
    );
};

export default AddComment;
