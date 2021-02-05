import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import bourgesSalle from '../../logo/salle-de-concert.jpg'

import './concertPoster.css';
import React, { useEffect, useState } from 'react';
import concertApi from '../../services/concertApi';

// function ConcertPoster() {
const ConcertPoster = ({ match }) => {

    const [listConcerts, setListConcert] = useState([]);

    useEffect(async () => {
        try {
            const concerts = await concertApi.findAll();
            setListConcert(concerts);
        } catch (error) {
            console.log(error)
        }
    }, [])

    const [concertInfo, setConcertInfo] = useState(null);


    useEffect(() => {
        concertApi.getConcert(match.params.id).then((concertInfo) => setConcertInfo(concertInfo));
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        console.log(date);
        return date.toLocaleDateString('fr-FR', options)
    }

    const formatTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleTimeString('fr-FR')
    }

    return (

        concertInfo ? (
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
                                <p>Nom de l'artiste / groupe : {concertInfo.event.artistName} </p>
                                <p>Nom de la tournée : {concertInfo.event.name} </p>
                                <p>Date et heure : {formatDate(concertInfo.date)} à {formatTime(concertInfo.time)} heures </p>
                                <p>Lieu : {concertInfo.event.salle.city} </p>
                                <p>Catégorie de musique : {concertInfo.event.categories[0].name} </p>

                            </div>
                        </div>
                    </div>

                </Card.Header>
                <Card.Body>
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-sm">
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
                                        {listConcerts.map(concert => (
                                            //L'attribut key est obligatoire pour le dataBinding
                                            <tr key={concert.id}>
                                                <td>{formatDate(concert.date)}</td>
                                                <td>{concert.event.salle.city}</td>
                                                <td>{formatTime(concert.time)} heures</td>
                                                <td>{formatDate(concert.openingTime)}</td>
                                                <td>{concert.categoryNumber}</td>
                                                <td>{concert.priceMax}</td> {/* voir calcul de tarif */}
                                                <td><Button className="buttonReservationConcert" href="/concertPoster/:id">Réserver</Button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm">
                                <h4>Présentation de l'artiste / Groupe</h4>
                                <p className="text-justify">{concertInfo.artistDescription}
                                </p>
                            </div>
                            <div className="col-sm">
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
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
        ) :
            (<h1 className="text-center">... Patience ... La page arrive ...</h1>)
    );
}


export default ConcertPoster;