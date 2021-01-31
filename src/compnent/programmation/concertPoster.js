import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import bourgesSalle from '../../logo/salle-de-concert.jpg'

import './concertPoster.css';
import React, { useEffect, useState } from 'react';
import concertApi from '../../services/concertApi';

// function ConcertPoster() {
const ConcertPoster = ({ match }) => {
    const [eventInfo, setEventInfo] = useState({
        artistDescription: "",
        artistName: "",
        name: "",
        concerts: "",
        salle: "",
    });

    const [concertInfo, setConcertInfo] = useState({
        date: "",
        time: "",
        openingTime: "",
        priceMax: ""
    });
    useEffect(() => {
        concertApi.getEvent(match.params.id).then((eventInfo) => setEventInfo(eventInfo));
    }, []);
    useEffect(() => {
        concertApi.getConcert(match.params.id).then((concertInfo) => setConcertInfo(concertInfo));
    }, []);

    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header className="titleConcertPage">
                <div className="container">
                    <div className="row">
                        <div className="col-sm mx-auto">
                            <img
                                className="d-block imageConcert"
                                src={bourgesSalle}
                                alt="Salle Bourges"

                            />
                        </div>
                        <div className="col-sm concertInformations">
                            <p>Nom de l'artiste / groupe : {eventInfo.artistName} </p>
                            <p>Nom de la tournée : {eventInfo.name} </p>
                            <p>Date et heure : {concertInfo.date} à {concertInfo.time} </p>
                            <p>Lieu : </p>
                            <p>Catégorie de musique : </p>

                        </div>
                    </div>
                </div>

            </Card.Header>
            <Card.Body>
                <div class="container">
                    <div class="row mb-4">
                        <div class="col-sm">
                            <Table striped hover rounded>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Lieu</th>
                                        <th>Heure</th>
                                        <th>Ouverture</th>
                                        <th>Catégorie de tarifs</th>
                                        <th>Tarifs</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>dd</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                            <Button className="buttonReservationConcert">Réserver</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                            <Button className="buttonReservationConcert">Réserver</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm">
                            <h4>Présentation de l'artiste / Groupe</h4>
                            <p className="text-justify">{eventInfo.artistDescription}
                            </p>
                        </div>
                        <div class="col-sm">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm">
                            <h3>À NE PAS MANQUER</h3>
                            {/* <Button variant="primary">Prev</Button> */}
                            <Card className="cardOtherConcert">
                                <Card.Img variant="top" src={bourgesSalle}
                                />
                                <Card.Body className="text-center">
                                    <Card.Title>Nom de l'artiste</Card.Title>
                                    <Card.Text>
                                        <p>Nom de la tournée</p>
                                        <p>Date et heure</p>
                                        <p>Lieu</p>
                                        <p>Catégorie de musique</p>
                                        <p>Tarifs</p>
                                    </Card.Text>
                                    <Button variant="primary">Réserver</Button>
                                </Card.Body>
                            </Card>

                            {/* A remplacer par une boucle au moment de mettre des données */}
                            <Card className="cardOtherConcert">
                                <Card.Img variant="top" src={bourgesSalle}
                                />
                                <Card.Body className="text-center">
                                    <Card.Title>Nom de l'artiste</Card.Title>
                                    <Card.Text>
                                        <p>Nom de la tournée</p>
                                        <p>Date et heure</p>
                                        <p>Lieu</p>
                                        <p>Catégorie de musique</p>
                                        <p>Tarifs</p>
                                    </Card.Text>
                                    <Button variant="primary">Réserver</Button>
                                </Card.Body>
                            </Card>
                            <Card className="cardOtherConcert">
                                <Card.Img variant="top" src={bourgesSalle}
                                />
                                <Card.Body className="text-center">
                                    <Card.Title>Nom de l'artiste</Card.Title>
                                    <Card.Text>
                                        <p>Nom de la tournée</p>
                                        <p>Date et heure</p>
                                        <p>Lieu</p>
                                        <p>Catégorie de musique</p>
                                        <p>Tarifs</p>
                                    </Card.Text>
                                    <Button variant="primary">Réserver</Button>
                                </Card.Body>
                            </Card>
                            {/* <Button variant="primary">Next</Button> */}
                            {/* Fin des fausses données à remplacer par une boucle */}

                        </div>

                    </div >
                </div >

            </Card.Body >
        </Card >
    );
}


export default ConcertPoster;