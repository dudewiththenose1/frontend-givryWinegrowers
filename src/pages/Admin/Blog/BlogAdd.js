import React, { useState } from 'react';

import {  useNavigate } from 'react-router-dom';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Link, useDisclosure, Textarea } from "@nextui-org/react";

import { blogService } from '@/_services';


const BlogAdd = () => {
    let navigate = useNavigate();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [credentials, setCredentials] = useState({
        titre: '',
        contenu:'',
    })
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        blogService.newBlog(credentials)
            .then(res => {
                console.log(res)
                navigate("/admin/blog/index")
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="BlogEdit">
            <Button as={Link} onPress={onOpen} color="transparent" variant="flat">
                Ajouter un nouveau blog
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"

            >
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={onSubmit}>
                            <ModalHeader className="flex flex-col gap-1">Ajouter un blog</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    placeholder="Entrer le titre"
                                    variant="bordered"
                                    type="text"
                                    name="titre"
                                    value={credentials.titre}
                                    onChange={onChange}
                                />
                                
                                <Textarea
                                    type="text"
                                    variant='faded'
                                    label="Description"
                                    placeholder="Enter your description"
                                    className="max-w-xs"
                                    name="contenu"
                                    value={credentials.contenu}
                                    onChange={onChange}
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" type="submit" onPress={onClose}>
                                    Créer un blog
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default BlogAdd;