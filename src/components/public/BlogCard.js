import { Card } from '@nextui-org/react';
import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <div>
                <Card className="max-w-[300px]">{blog.titre}</Card>
                    <Card className="max-w-[300px]">{blog.contenu}</Card>
            </div>
        </div>
    );
};

export default BlogCard;
