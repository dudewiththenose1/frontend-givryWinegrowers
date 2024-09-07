import React, { useState, useEffect, useRef } from 'react';

import BlogCard from '@/components/public/BlogCard';

import { blogService } from '@/_services';
import Comment from '@/components/public/Comment';
import AddComment from '../../components/public/AddComment';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            blogService.getAllBlogs()
                .then(res => {
                    console.log(res.data);
                    setBlogs(res.data)



                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
    }, [])



    return (
        <div className="blog-page">
            <div className="blog-list">
                {blogs.map(blog => (
                    <div key={blog.id_blog}>
                        <BlogCard blog={blog} />
                        <Comment idBlog={blog.id_blog} />
                        <AddComment idBlog={blog.id_blog}/>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Blog;
