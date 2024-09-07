import React from 'react';
//import { w3cwebsocket as W3CWebSocket } from "websocket";

import { Card } from "@nextui-org/react";

import './equipes.css'

//const client = new W3CWebSocket('ws://localhost:8000');

const Evenement = () => {
    
    return (
        <div className="resultat-page">
            <h1 className="resultat-title">RÉSULTAT</h1>
            <div className="card-container">
                <Card className="max-w-[600px]">
                    <p>Givry Winegrowers     95 - 66          Saint Martin Belleroche</p>
                </Card>
            </div>
        </div>
    );
    // onButtonClicked = () => {
    //     client.send('increment')
    // }

    // componentDidMount() {
    //     client.onopen = () => {
    //         client.send('get_increment');
    //     };
    //     client.onmessage = (message) => {
    //         const data = JSON.parse(message.data);
    //         const type = data.type
    //         if (type === 'counter') {
    //             this.setState((prevState) => ({
    //                 counter: prevState.counter + 1
    //             }));
    //         } else {
    //             this.setState((prevState) => ({
    //                 counter: prevState.counter 
    //             }));
    //         }
            
    //     };
    // }

    // componentDidUpdate(prevState) {
    //     if (this.state.counter !== prevState.counter) {
    //         console.log("compteur", this.state.counter);
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <Button onClick={this.onButtonClicked}> 3 Points !!!! </Button>
    //             <p>{this.state.counter}</p>
    //         </div>
    //     );
    // }
}

export default Evenement;
