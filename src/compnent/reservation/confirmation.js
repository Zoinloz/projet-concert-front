import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './reservation.css';
import React from "react";
import { useLocation } from "react-router-dom";

function ConfirmationStepFive() {
    const location = useLocation();
    const data = location.state.response
    console.log(data)
    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">
                Confirmation
            </Card.Header>
            <Card.Body>
                <Breadcrumb>
                    <Breadcrumb.Item href="/reservationStepOne">1. Réservation</Breadcrumb.Item>
                    <Breadcrumb.Item href="/shoppingCart">2. Panier d'achat</Breadcrumb.Item>
                    <Breadcrumb.Item href="/contactInformation">3. Coordonnées</Breadcrumb.Item>
                    <Breadcrumb.Item href="/payment">4. Paiement</Breadcrumb.Item>
                    <Breadcrumb.Item active >5. Confirmation</Breadcrumb.Item>
                </Breadcrumb>
                <div className="container">
                    <div className="row">
                        <div className="col-sm shadow p-2 mx-2 mb-5 bg-white rounded">
                            <h4>Merci pour votre achat</h4>
                            <p>La réference de cette réservation est le n°{data[0].reservation.id}</p>
                            {data.map(ticket => {
                                return(
                                    <div>Ticket n°{ticket.id} - Place {ticket.seat.letter}{ticket.seat.number}</div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}


export default ConfirmationStepFive;
