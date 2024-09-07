import React, { useEffect, useRef, useState } from 'react';
import { Select, SelectItem, Button, Link } from "@nextui-org/react";

import { useNavigate } from 'react-router-dom'

import { blogService } from '@/_services';

const Blog = () => {
    const [selectedPlayer, setSelectedPlayer] = useState("0");
    const [blogs, setBlogs] = useState([]);
    const flag = useRef(false);
    let navigate = useNavigate();

    const handleSelectChange = (key) => {
        setSelectedPlayer(key);
    };

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

    const delUser = (id_blog) => {
        blogService.deleteBlog(id_blog)
            .then(res => {
                console.log(res)
                setBlogs((current) => current.filter(blog => blog.id_blog !== id_blog))
            })
            .catch(err => console.log(err))
    }

    const marcel = (blog) => {

        navigate("../edit/" + blog, { replace: true });
    }

    return (

        //<button onClick={() => marcel(4)}User 4 <button/>

        <div className="Blog">
            <Select
                isRequired
                label="Blog"
                placeholder="Select a player"
                defaultSelectedKeys={["0"]}
                className="max-w-xs"
                onChange={(e) => handleSelectChange(e.target.value)}
            >
                <SelectItem key="0" textValue="Aucun">
                    Aucun
                </SelectItem>
                {
                    blogs.map(blog => (
                        <SelectItem key={blog.id_blog} textValue={`${blog.titre} `}>
                            {blog.titre} 
                            <Link color="primary" onClick={() => delUser(blog.id_blog)} size="sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                Supprimer
                            </Link>
                        </SelectItem>
                    ))
                }


            </Select>
            <Button className="max-w-xs" aria-label="Envoyer" onPress={() => marcel(selectedPlayer)}>
                Envoyer
            </Button>
        </div>
    );
};

export default Blog;