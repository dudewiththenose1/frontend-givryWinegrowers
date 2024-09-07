import React, { useEffect, useRef, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,  Input, Link, useDisclosure } from "@nextui-org/react";

import { equipeService } from '@/_services';
import FileUploader from "@/components/admin/FileUploader";

const EquipeEdit = () => {
    let navigate = useNavigate();
    const { eqid } = useParams();
    const flag = useRef(false);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [credentials, setCredentials] = useState({
        nom: '',
    })

    const sendImage = async (e, file) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('id', eqid);
        console.log("formdata", formData);
        try {
            const result = await equipeService.uploadImage(formData);
            console.log(result.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (flag.current === false) {
            console.log("eqid:",eqid)
            equipeService.getEquipe(eqid)
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
        equipeService.updateEquipe(credentials)
            .then(res => {
                console.log(res)
                navigate("/admin/equipe/index")
            })
            .catch(error => console.log(error))
    }
    
    return (
        <div className="EquipeEdit">
            <Button as={Link} onPress={onOpen} color="transparent" variant="flat">
                Modifier les données de l'équipe
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
                                    placeholder="Entrer le nouveau nom"
                                    variant="bordered"
                                    type="text"
                                    name="nom"
                                    value={credentials.nom}
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
            <FileUploader submit={sendImage} />
        </div>
    );
};

export default EquipeEdit;