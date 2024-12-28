import React, { useState, useEffect, useRef } from 'react';
import { joueurService } from '@/_services';

import { Card, CardFooter, Image} from '@nextui-org/react';

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
        <div className="border-none" >
            <div className="player-image">
                <Card isFooterBlurred className="border-none" radius="lg">

                    <Image width={300} isZoomed src={`/im/${imageUrl}`} alt={`${joueur.nom} ${joueur.prenom}`} />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className=" text-black/80">{`${joueur.nom} ${joueur.prenom}`}</p>
                        <p
                            className="text-tiny text-white bg-black/20"
                        >
                        </p>
                    </CardFooter>
                </Card>
                </div>
            
        </div>
    );
};

export default PlayerCard;
