import React, { useEffect, useRef, useState } from 'react';
import { Card, Divider } from "@nextui-org/react";
import './equipes.css';
import { resultatService } from '@/_services/resultat.service';

const Evenement = () => {
    const [rencontres, setRencontres] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            resultatService.getResultat()
                .then(res => {
                    // Transforme les données pour les utiliser facilement
                    const transformedData = res.data.map((rencontre) => ({
                        date: rencontre[0],
                        heure: rencontre[1],
                        domicile: rencontre[2],
                        exterieur: rencontre[3],
                        resultat: rencontre[4],
                    }));
                    setRencontres(transformedData);
                })
                .catch(err => console.log(err));
        }
        return () => flag.current = true;
    }, []);

    return (
        <div className="resultat-page">
            <h1 className="resultat-title">RÉSULTATS</h1>
            <div className="card-container">
                {rencontres.map((rencontre, index) => (
                    <Card key={index} className="max-w-[800px] my-4 rencontre-card">
                        <div className="flex  items-center space-x-6">
                            <p> {rencontre.domicile}</p>
                            <Divider orientation="vertical" />
                            <p> {rencontre.resultat}</p>
                            <p> {rencontre.date}</p>
                            <p>{rencontre.heure}</p>
                            <Divider orientation="vertical" />
                            <p> {rencontre.exterieur}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Evenement;
