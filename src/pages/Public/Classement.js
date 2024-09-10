import React, { useEffect, useRef, useState } from 'react';
import { classementService } from '@/_services';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import './equipes.css';

const columns = [
    { key: "equipe", label: "Equipe" },
    { key: "matchesJoues", label: "Matches Joués" },
    { key: "matchesGagnes", label: "Matches Gagnés" },
    { key: "matchesPerdus", label: "Matches Perdus" },
    { key: "pointsMarques", label: "Points Marqués" },
    { key: "pointsEncaisses", label: "Points Encaissés" },
    { key: "diffPoints", label: "Différence de Points" },
];

const Classement = () => {
    const [equipes, setEquipes] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            classementService.getClassement()
                .then(res => {
                    
                    const transformedData = res.data.map((equipe) => ({
                        equipe: equipe[0],
                        matchesJoues: equipe[1],
                        matchesGagnes: equipe[2],
                        matchesPerdus: equipe[3],
                        pointsMarques: equipe[4],
                        pointsEncaisses: equipe[5],
                        diffPoints: equipe[6],
                    }));
                    setEquipes(transformedData);
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true;
    }, []);

    return (
        <div className="classement-page">
            <h1 className="classement-title">CLASSEMENT</h1>
            <div className="table-container">
                <Table
                    color="warning"
                    removeWrapper
                    selectionMode="single"
                    defaultSelectedKeys={["2"]} 
                    aria-label="classement">
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={equipes}>
                        {(item) => (
                            <TableRow key={item.equipe}>
                                {(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Classement;
