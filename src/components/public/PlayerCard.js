import React, { useState, useEffect, useRef } from 'react';
import { joueurService } from '@/_services';

import { Image, Card, CardBody } from '@nextui-org/react';

const PlayerCard = ({ joueur }) => {
    const [imageUrl, setImageUrl] = useState();
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            joueurService.getImage(joueur.id_joueur)
            .then(res => {
                
                console.log("image:", res.data) 
                setImageUrl(res.data.nom);
            })
            .catch(err => console.log(err))
        }
        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="player-card">
            <Image width={300} isZoomed src={`http://localhost:8000/images/`+imageUrl} alt={`${joueur.nom} ${joueur.prenom}`} />
                <div className="player-image">
                <Card className="max-w-[300px]"><CardBody><p>{joueur.prenom} {joueur.nom}</p></CardBody> </Card>
                </div>
            
        </div>
    );
};

export default PlayerCard;
