import React, { useEffect, useRef, useState } from 'react';
import { Select, SelectItem, Button,Link } from "@nextui-org/react";

import { useNavigate } from 'react-router-dom'

import { equipeService } from '@/_services';

const Equipe = () => {
    const [selectedEquipe, setSelectedEquipe] = useState("0");
    const [equipes, setEquipes] = useState([]);
    const flag = useRef(false);
    let navigate = useNavigate();
    
    const handleSelectChange = (key) => {
        setSelectedEquipe(key);
    };

    useEffect(() => {
        if (flag.current === false) {
            equipeService.getAllEquipes()
            .then(res => {
                console.log(res.data);
                setEquipes(res.data)
            } )
            .catch(err => console.log(err))
        }
        
        return () => flag.current = true
    }, [])

    const delEquipe = (id_equipe) => {
        equipeService.deleteEquipe(id_equipe)
            .then(res => {
                console.log(res)
                setEquipes((current) => current.filter(equipe => equipe.id_equipe !== id_equipe))
            })
        .catch(err => console.log(err))
    }
    
    const marcel = (equipe) => {
        
        navigate("../edit/" + equipe, { replace: true});
    }
    
    return (
    
        //<button onClick={() => marcel(4)}User 4 <button/>
        
        <div className="Equipe">
            <Select
                isRequired
                label="Equipe"
                placeholder="Selectionner une equipe"
                defaultSelectedKeys={["0"]}
                className="max-w-xs"
                onChange={(e) => handleSelectChange(e.target.value)}
            >
                <SelectItem key="0" textValue="Aucun">
                            Aucun
                </SelectItem>
                {
                    equipes.map(equipe => (
                        <SelectItem key={equipe.id_equipe} textValue={` ${equipe.nom}`}>
                            {equipe.nom} 
                            <Link color="primary" onClick={() => delEquipe(equipe.id_equipe)} size="sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                Supprimer
                            </Link>
                        </SelectItem>
                    ))
            }  
            
                
            </Select>
            <Button className="max-w-xs" aria-label="Envoyer" onPress={() => marcel(selectedEquipe)}>
                Modifier
            </Button>
        </div>
    );
};

export default Equipe;