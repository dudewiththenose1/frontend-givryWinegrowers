import React, { useEffect, useRef, useState } from 'react';
import './equipes.css';
import { classementService } from '@/_services';



const Evenement = () => {
    const [resultats, setResultats] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            classementService.getResultat()
                .then(res => {
                    // Transforme les données pour les utiliser facilement
                    const transformedData = res.data.map((rencontre) => ({
                        date: rencontre[0],
                        heure: rencontre[1],
                        domicile: rencontre[2],
                        exterieur: rencontre[3],
                        resultat: rencontre[4],
                    }));
                    setResultats(transformedData);
                })
                .catch(err => console.log(err));
        }
        return () => flag.current = true;
    }, []);

    return (
        <div className="resultat-page">
            <h1 className="resultat-title">RÉSULTATS</h1>
            <div className="card-container">
                {resultats.map((resultat, index) => (
                    <div className="game-summary">
                        <div className="info-section">
                            <div className="game-info">
                                <div className="league-info">
                                    <div>Pré-Région</div>
                            </div>
                                <div className="game-time">
                                    <div>{resultat.date}</div>
                                    <div>{resultat.heure}</div>
                                </div>
                            </div>
                            <div className="game-details">
                                <div className="team">
                                    <div>{resultat.domicile}</div>
                                </div>
                                <div className="score">
                                    <div>{resultat.resultat}</div>
                                </div>
                                <div className="team">
                                    <div>{resultat.exterieur}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Evenement;
