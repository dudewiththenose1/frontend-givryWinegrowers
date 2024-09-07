import React, { useState, useEffect, useRef } from 'react';

import { commentService } from '@/_services';
import CommentCard from './CommentCard';

const Comment = (idBlog) => {
    const [comments, setComments] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            commentService.getComment()
                .then(res => {
                    console.log(res.data);
                    console.log("idBlog",idBlog.idBlog)
                    const filteredComments = res.data.filter(comment => comment.id_blog === idBlog.idBlog);
                    console.log("filter", filteredComments);
                    setComments(filteredComments)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
    }, [idBlog])

    return (
        <div className="comment-page">
            <div className="comment-list">
                {comments.map(comment => (
                    <CommentCard key={comment.id_comm} comment={comment} />
                ))}

            </div>
        </div>
    );
};

export default Comment;
