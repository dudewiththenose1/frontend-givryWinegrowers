import React from 'react';
import { Card } from '@nextui-org/react';
const CommentCard = ({ comment }) => {
    return (
        <div className="blog-card">
            <div>
                <Card className="max-w-[300px]">auteur : {comment.id_auteur} </Card>
                <Card className="max-w-[300px]"><p>{comment.contenu}</p> </Card>
            </div>
        </div>
    );
};

export default CommentCard;
