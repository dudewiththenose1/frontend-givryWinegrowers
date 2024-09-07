import React, { useEffect, useRef, useState } from 'react';

import { classementService } from '@/_services';

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

import './equipes.css';

const columns = [
    {
        key: "equipe",
        label: "Equipe",
    },
    {
        key: "matchesJoues",
        label: "Matches Joués",
    },
    {
        key: "matchesGagnes",
        label: "Matches Gagnés",
    },
    {
        key: "matchesPerdus",
        label: "Matches Perdus",
    },
    {
        key: "pointsMarques",
        label: "Points Marqués",
    },
    {
        key: "pointsEncaisses",
        label: "Points Encaissés",
    },
    {
        key: "DiffPoints",
        label: "Différence de Points",
    },
    
];



const Classement = () => {
    const [equipes, setEquipes] = useState([]);
    const flag = useRef(false);

    useEffect(() => {
        if (flag.current === false) {
            classementService.getClassement()
                .then(res => {
                    console.log(res.data);
                    setEquipes(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
    }, [])
    return (
        <div className="classement-page">
            <h1 className="classement-title">CLASSEMENT</h1>
            <div className="table-container">
                <Table
                    color="warning"
                    removeWrapper aria-label="classement">
                    <TableHeader    
                        columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={equipes}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
                </Table>
                </div>
            {/* {equipes.map((equipe,index) => (
                <div key={index}>
                    <div>Equipe: {equipe[0]}</div>
                    <div>Points: {equipe[1]}</div>
                    <div>Matches Joués: {equipe[2]}</div>
                    <div>Matches Gagnés: {equipe[3]}</div>
                    <div>Matches Perdus: {equipe[4]}</div>
                    <div>Points Marqués: {equipe[5]}</div>
                    <div>Points Encaissés: {equipe[6]}</div>
                    <div>Différence de Points: {equipe[7]}</div>
                </div>
            ))} */}
        </div>
    );
};

export default Classement;