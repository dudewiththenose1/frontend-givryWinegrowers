import React, { useEffect, useRef, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Link, useDisclosure,Textarea } from "@nextui-org/react";

import { blogService } from '@/_services';

const BlogEdit = () => {
    let navigate = useNavigate();
    const { bid } = useParams();
    const flag = useRef(false);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [credentials, setCredentials] = useState({
        titre: '',
        contenu: '',
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (flag.current === false) {
            blogService.getBlog(bid)
                .then(res => {
                    console.log(res.data);
                    setCredentials(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        blogService.updateBlog(credentials)
            .then(res => {
                console.log(res)
                navigate("/admin/blog/index")
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="BlogEdit">
            <Button as={Link} onPress={onOpen} color="transparent" variant="flat">
                Modifier les données du blog
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"

            >
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={onSubmit}>
                            <ModalHeader className="flex flex-col gap-1">Modifier</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    placeholder="Entrer le nouveau titre"
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
                                    placeholder="Entrer le nouveau contenu"
                                    className="max-w-xs"
                                    name="contenu"
                                    value={credentials.contenu}
                                    onChange={onChange}
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" type="submit" onPress={onClose}>
                                    Modifier
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default BlogEdit;