import React, { useEffect, useRef, useState } from 'react';
import { Select, SelectItem, Button,Link } from "@nextui-org/react";

import { useNavigate } from 'react-router-dom'

import { joueurService } from '@/_services';

const Joueur = () => {
    const [selectedPlayer, setSelectedPlayer] = useState("0");
    const [joueurs, setJoueurs] = useState([]);
    const flag = useRef(false);
    let navigate = useNavigate();
    
    const handleSelectChange = (key) => {
        setSelectedPlayer(key);
    };

    useEffect(() => {
        if (flag.current === false) {
            joueurService.getAllJoueurs()
            .then(res => {
                console.log(res.data);
                setJoueurs(res.data)
            } )
            .catch(err => console.log(err))
        }
        
        return () => flag.current = true
    }, [])

    const delUser = (id_joueur) => {
        joueurService.deleteJoueur(id_joueur)
            .then(res => {
                console.log(res)
                setJoueurs((current) => current.filter(joueur => joueur.id_joueur !== id_joueur))
            })
        .catch(err => console.log(err))
    }
    
    const marcel = (joueur) => {
        
        navigate("../edit/" + joueur, { replace: true});
    }
    
    return (
    
        //<button onClick={() => marcel(4)}User 4 <button/>
        
        <div className="Joueur">
            <Select
                isRequired
                label="Joueur"
                placeholder="Select a player"
                defaultSelectedKeys={["0"]}
                className="max-w-xs"
                onChange={(e) => handleSelectChange(e.target.value)}
            >
                <SelectItem key="0" textValue="Aucun">
                            Aucun
                </SelectItem>
                {
                    joueurs.map(joueur => (
                        <SelectItem key={joueur.id_joueur} textValue={`${joueur.prenom} ${joueur.nom}`}>
                            {joueur.prenom} {joueur.nom} 
                            <Link color="primary" onClick={() => delUser(joueur.id_joueur)} size="sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
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

export default Joueur;