import React, { useState, useEffect, useRef } from 'react';

import PlayerCard from '@/components/public/PlayerCard';

import { Tabs, Tab } from "@nextui-org/react";

import { joueurService,equipeService } from '@/_services';

import './equipes.css';

const Equipe = () => {
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

    const [joueurs, setJoueurs] = useState([]);

    useEffect(() => {
        if (flag.current === false) {
            joueurService.getAllJoueurs()
                .then(res => {
                    console.log(res.data);
                    setJoueurs(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
    }, [])

    return (
        <div className="team-players-page">
            <h1 className="team-title">NOTRE ÉQUIPE</h1> {/* Titre ajouté */}
            <div className="player-list">
                <Tabs
                    size="lg"
                    radius="sm"
                    items={equipes}
                    selectedKey={selectedEquipe}
                    onSelectionChange={(key) => setSelectedEquipe(key)}
                >
                    {(item) => (
                        <Tab key={item.id_equipe} title={item.nom}>
                            <div className="player-cards-container">
                                {joueurs.filter(joueur => joueur.id_equipe === parseInt(item.id_equipe))
                                    .map(joueur => (
                                        <PlayerCard key={joueur.id_joueur} joueur={joueur} />
                                    ))}
                            </div>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
};

export default Equipe;
