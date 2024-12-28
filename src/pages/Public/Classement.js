import React, { useEffect, useRef, useState } from 'react';
import { classementService } from '@/_services';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import './classement.css';

const columns = [
    { key: "equipe", label: "EQUIPE" },
    {key: "points", label: "POINTS"},
    { key: "matchesJoues", label: "MATCHES JOUES" },
    { key: "matchesGagnes", label: "MATCHES GAGNES" },
    { key: "matchesPerdus", label: "MATCHES PERDUS" },
    { key: "pointsMarques", label: "POINTS MARQUES" },
    { key: "pointsEncaisses", label: "POINTS ENCAISSES" },
    { key: "diffPoints", label: "DIFFERENCE DE POINTS" },
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
                        points: equipe[1],
                        matchesJoues: equipe[2],
                        matchesGagnes: equipe[3],
                        matchesPerdus: equipe[4],
                        pointsMarques: equipe[5],
                        pointsEncaisses: equipe[6],
                        diffPoints: equipe[7],
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
                        {(column) => <TableColumn className="column-name" key={column.key}>{column.label}</TableColumn>}
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
