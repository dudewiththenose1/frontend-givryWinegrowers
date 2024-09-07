import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Link } from "@nextui-org/react";
import { MailIcon } from './MailIcon.js';
import { LockIcon } from './LockIcon.js';
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { accountService } from "@/_services/account.service.js";

export default function Login() {
    let navigate = useNavigate();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://backend-givrywinegrowers.onrender.com/login", credentials)
        .then(res => {
            console.log(res)
                accountService.saveUsername(credentials.username)
                accountService.saveToken(res.data.token)
                if (res.data.admin) {
                    navigate("/admin");
                } else {
                    navigate("/user");  
                }
            })
                
        .catch(error => console.log(error))
    }
    return (
        <>
            <Button as={Link} onPress={onOpen} color="transparent" variant="flat">
                Admin
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                
            >
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={onSubmit}>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="pseudo"
                                    placeholder="Entrer votre pseudo"
                                    variant="bordered"
                                    type="text"
                                    name="username"
                                    value={credentials.username}
                                    onChange={onChange}
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Entrer votre mot de passe"
                                    type="password"
                                    variant="bordered"
                                    name="password"
                                    value={credentials.password}
                                    onChange={onChange}
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" type="submit" onPress={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
