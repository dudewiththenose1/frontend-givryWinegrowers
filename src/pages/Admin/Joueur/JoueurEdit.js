import React, { useEffect, useRef, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,  Input, Link, useDisclosure, Select, SelectItem } from "@nextui-org/react";

import { joueurService, equipeService } from '@/_services';
import FileUploader from "@/components/admin/FileUploader";

const JoueurEdit = () => {
    let navigate = useNavigate();
    const { jid } = useParams();

    //pour selectionner les equipes
    // eslint-disable-next-line 
    const [selectedEquipe, setSelectedEquipe] = useState("0");
    const [equipes, setEquipes] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            equipeService.getAllEquipes()
                .then(res => {
                    console.log(res.data);
                    setEquipes(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
    }, [])

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [credentials, setCredentials] = useState({
        nom: '',
        prenom: '',
        id_equipe: ''
    })

    const sendImage = async (e, file) => {
        e.preventDefault();
        console.log("file.filename", file.filename)
        const formData = new FormData();
        formData.append('file', file);
        formData.append('id', jid);
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            const result = await joueurService.uploadImage(formData);
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
            joueurService.getJoueur(jid)
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
        console.log("credentials",credentials)
        joueurService.updateJoueur(credentials)
            .then(res => {
                console.log(res)
                navigate("/admin/joueur/index")
            })
            .catch(error => console.log(error))
    }
    
    return (
        <div className="JoueurEdit">
            <Button as={Link} onPress={onOpen} color="transparent" variant="flat">
                Modifier les données du joueur
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
                                <Input
                                    placeholder="Entrer le nouveau prénom"
                                    type="text"
                                    variant="bordered"
                                    name="prenom"
                                    value={credentials.prenom}
                                    onChange={onChange}
                                />

                                <Select
                                    isRequired
                                    label="Equipe"
                                    placeholder="Selectionner une equipe"
                                    defaultSelectedKeys={["0"]}
                                    className="max-w-xs"
                                    selectedKey={credentials.id_equipe.toString()} // Pour assurer la correspondance des types
                                    onSelectionChange={(selectedKeys) => {
                                        const selectedId = Array.from(selectedKeys).pop(); // Extraire l'unique clé sélectionnée
                                        setCredentials({ ...credentials, id_equipe: parseInt(selectedId) }); // Conversion en entier
                                    }}
                                >
                                    <SelectItem key="0" textValue="Aucun">
                                        Aucun
                                    </SelectItem>
                                    {
                                        equipes.map(equipe => (
                                            <SelectItem key={equipe.id_equipe} textValue={` ${equipe.nom}`}>
                                                {equipe.nom}
                                            </SelectItem>
                                        ))
                                    }
                                </Select>
                               
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

export default JoueurEdit;