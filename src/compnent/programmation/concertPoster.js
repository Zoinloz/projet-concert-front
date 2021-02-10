import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import bourgesSalle from '../../logo/salle-de-concert.jpg'

import './concertPoster.css';
import React, { useEffect, useState } from 'react';
import concertApi from '../../services/concertApi';

const ConcertPoster = ({ match }) => {

    // Liste des concerts
    const [listConcerts, setListConcert] = useState([]);
    // Axios pour récupérer la liste de tous les concerts
    useEffect(async () => {
        try {
            const concerts = await concertApi.findAll();
            setListConcert(concerts);
        } catch (error) {
            console.log(error)
        }
    }, [])

    const [concertInfo, setConcertInfo] = useState(null);

    let [listChosenSeats] = useState([]);

    const addSeat = (seat, cell) =>
    {
        listChosenSeats.push(seat)
        document.getElementById('seatChosen').innerHTML += "<span id=\"seat"+seat.id+"\">" + seat.letter + '-' + seat.number + ",</span> "
        let cellClone = cell.cloneNode(true);

        cell.parentNode.replaceChild(cellClone, cell);
        cellClone.className += ' seatChosen'
        cellClone.addEventListener('click', function(){clickSeatRemove(seat, cellClone)})
    }

    const clickSeatAdd = (seat, cell) => {
        addSeat(seat, cell)
    }

    const clickSeatRemove = (seat, cell) => {
        removeSeat(seat, cell)
    }

    const removeSeat = (seat, cell) => {
        listChosenSeats = listChosenSeats.filter(function( obj ) {
            return obj.id !== seat.id;
        });
        let cellClone = cell.cloneNode(true);

        document.getElementById("seat"+seat.id).remove()

        cell.parentNode.replaceChild(cellClone, cell);
        cellClone.className = 'seatTd'
        cellClone.addEventListener('click', function () {
            clickSeatAdd(seat, cellClone)
        })
    }

    const validateSeats = () =>
    {
        let listChosenSeatsStr = JSON.stringify(listChosenSeats)
        document.cookie = "listChosenSeats="+listChosenSeatsStr+";path=/;";
        document.cookie = "concertId="+concertInfo.id+";path=/;";
    }

    useEffect(() => {
        concertApi.getConcert(match.params.id).then((concertInfo) => {
            setConcertInfo(concertInfo)
                let table = document.getElementById("seatArray");
                let activeRow = table.insertRow()
                activeRow.className = 'trSeat'
                concertInfo.seats.map((seat, i, array) => {
                    let next = array[i + 1];
                    if(next) {
                        if (seat.letter === next.letter) {
                            let cell = activeRow.insertCell()
                            cell.className = 'seatTd'
                            cell.innerHTML = "<td>" + seat.letter + " - " + seat.number + "</td>"
                            if(seat.tickets.length === 0) {
                                cell.addEventListener('click', function(){clickSeatAdd(seat, cell)})
                            }
                            else{
                                cell.className += ' seatTaken'
                            }
                            return true
                        } else {
                            let cell = activeRow.insertCell()
                            cell.className = 'seatTd'
                            cell.innerHTML = "<td>" + seat.letter + " - " + seat.number + "</td>"
                            if(seat.tickets.length === 0) {
                                cell.addEventListener('click', function(){clickSeatAdd(seat, cell)})
                            }
                            else{
                                cell.className += ' seatTaken'
                            }
                            if(seat.letter === "C"){
                                activeRow = table.insertRow()
                                activeRow.className = 'trSeat'
                                activeRow = table.insertRow()
                                activeRow.className = 'trSeat'
                            }
                            activeRow = table.insertRow()
                            activeRow.className = 'trSeat'
                            return true;
                        }
                    }
                    else{
                        let cell = activeRow.insertCell()
                        cell.className = 'seatTd'
                        cell.innerHTML = "<td>" + seat.letter +  " - " + seat.number + "</td>"
                        if(seat.tickets.length === 0) {
                            cell.addEventListener('click', function(){clickSeatAdd(seat, cell)})
                        }
                        else{
                            cell.className += ' seatTaken'
                        }
                        return true;
                    }
                })
        });
    }, []);

    // FORMATAGE DE DATE
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options)
    }
    // FORMATAGE DE L'HEURE 
    const formatTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleTimeString('fr-FR')
    }

    return (

        concertInfo ? (
            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
                <Card.Header className="titleConcertPage">
                    <div className="container">
                        <h2 className="reservationTitle">Réserver</h2>
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
                            <div className="container my-5 d-flex justify-content-center">
                                <table id="seatArray">
                                </table>

                            </div>
                            <div id="seatChosen">
                                Place choisies :
                            </div>
                            <button onClick={validateSeats}>Validate</button>
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
                                                <td>{concert.priceMax}</td>
                                                <td><Button className="buttonReservationConcert" href={'/concertPoster/' + concert.id}>Réserver</Button></td>
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
