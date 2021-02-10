import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import concertApi from "../../services/concertApi";
import Table from "react-bootstrap/Table";
import './shoppingCart.css';
import Button from "react-bootstrap/Button";

function ShoppingCartStepTwo({ history }) {
    const [concertInfo, setConcertInfo] = useState(null);

    const [resaParking, setResaParking] = useState(false)
    const [resaRestaurant, setResaRestaurant] = useState(false)
    const [nbPlaceParking, setNbPlaceParking] = useState(0)
    const [nbPlaceRestaurant, setNbPlaceRestaurant] = useState(0)
    const [restaurantTime, setRestaurantTime] = useState(null)

    let chosenSeats = [];
    if (Cookies.get('listChosenSeats')) {
        chosenSeats = JSON.parse(Cookies.get('listChosenSeats'))
    }

    let chosenObtainingMethod = []
    if (Cookies.get('chosenObtainingMethod')) {
        chosenObtainingMethod = JSON.parse(Cookies.get('chosenObtainingMethod'))
        chosenObtainingMethod = JSON.parse(chosenObtainingMethod.obtainingMethod)
    }

    const initPrice = () => {
        let totalPrice = 0;
        chosenSeats.forEach(chosenSeat => {
            totalPrice = totalPrice + chosenSeat.price
        })
        totalPrice = totalPrice + chosenObtainingMethod.price
        return totalPrice
    }

    const[totalPrice, setTotalPrice] = useState(initPrice)


    // RADIO BUTTON
    const onChangeParking = (e) => {
        if (document.getElementById('parkingCheckBox').checked) {
            setResaParking(true)
        }
        else {
            setResaParking(false)
        }
    }
    // RADIO BUTTON
    const onChangeRestaurant = (e) => {
        if (document.getElementById('restaurantCheckBox').checked) {
            setResaRestaurant(true)
        }
        else {
            setResaRestaurant(false)
        }
    }

    const onChangeParkingPlace = (e) => {
        setNbPlaceParking(e.target.value)
        setTotalPrice(totalPrice + (concertInfo.event.salle.parking.price * e.target.value))
    }

    const onChangeRestaurantPlace = (e) => {
        setNbPlaceRestaurant(e.target.value)
        setTotalPrice(totalPrice + (concertInfo.event.salle.restaurant.price * e.target.value))
    }

    const onChangeRestaurantTime = (e) => {
        setRestaurantTime(e.target.value)
    }

    const saveReservation = () => {
        document.cookie = "resaParking=" + resaParking + ";path=/;";
        document.cookie = "resaRestaurant=" + resaRestaurant + ";path=/;";
        if (resaParking) {
            document.cookie = "nbPlaceParking=" + nbPlaceParking + ";path=/;"
        }
        if (resaRestaurant) {
            document.cookie = "nbPlaceRestaurant=" + nbPlaceRestaurant + ";path=/;";
            document.cookie = "restaurantTime=" + restaurantTime + ";path=/;";
        }

        history.push('/contactInformations')
    }


    useEffect(() => {
        if (Cookies.get('concertId')) {
            let concertId = Cookies.get('concertId')
            concertApi.getConcert(concertId).then((concertInfo) => {
                setConcertInfo(concertInfo)
                let table = document.getElementById("seatArray");
                let activeRow = table.insertRow()
                activeRow.className = 'trSeat'
                concertInfo.seats.map((seat, i, array) => {
                    let next = array[i + 1];
                    if (next) {
                        if (seat.letter === next.letter) {
                            let cell = activeRow.insertCell()
                            cell.className = 'seatTd'
                            cell.id = seat.id
                            cell.innerHTML = "<td>" + seat.letter + " - " + seat.number + "</td>"
                            chosenSeats.forEach(chosenSeat => {
                                if (chosenSeat.id === seat.id) {
                                    cell.className += ' seatPicked';
                                }
                            })
                            return true
                        } else {
                            let cell = activeRow.insertCell()
                            cell.className = 'seatTd'
                            cell.id = seat.id
                            cell.innerHTML = "<td>" + seat.letter + " - " + seat.number + "</td>"
                            if (seat.letter === "C") {
                                activeRow = table.insertRow()
                                activeRow.className = 'trSeat'
                                activeRow = table.insertRow()
                                activeRow.className = 'trSeat'
                            }
                            activeRow = table.insertRow()
                            activeRow.className = 'trSeat'
                            return true;
                        }
                    } else {
                        let cell = activeRow.insertCell()
                        cell.className = 'seatTd'
                        cell.id = seat.id
                        cell.innerHTML = "<td>" + seat.letter + " - " + seat.number + "</td>"
                        return true;
                    }
                })
            })
        }
    }, []);
    return concertInfo ? (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">
                Panier d'achat
            </Card.Header>
            <Card.Body>
                <Breadcrumb>
                    <Breadcrumb.Item href="/reservationStepOne">1. Réservation</Breadcrumb.Item>
                    <Breadcrumb.Item active>2. Panier d'achat</Breadcrumb.Item>
                    <Breadcrumb.Item>3. Coordonnées</Breadcrumb.Item>
                    <Breadcrumb.Item>4. Paiement</Breadcrumb.Item>
                    <Breadcrumb.Item>5. Confirmation</Breadcrumb.Item>
                </Breadcrumb>
                <div className="container my-5 d-flex justify-content-center">
                    <table id="seatArray">
                    </table>
                </div>
                <div id="seatChosen">
                    Place choisies : {chosenSeats.map(chosenSeat => {
                    return (chosenSeat.letter + " - " + chosenSeat.number + " : " + chosenSeat.price + " €, ")
                })}
                </div>
                <div className="row">
                    <div className="col-sm shadow p-2 mx-2 mb-5 bg-white rounded">
                        <Table bordered >
                            <tbody>
                                <th>Artiste/Groupe</th>
                                <th>Lieu</th>
                                <th>Date et heure</th>
                                <th>Catégorie de tarif</th>
                                <th>Tarif</th>
                                {chosenSeats.map(chosenSeat => {
                                    return concertInfo ? (
                                        <tr>
                                            <td>{concertInfo.event.artistName}</td>
                                            <td>{concertInfo.event.salle.city}</td>
                                            <td></td>
                                            <td>Catégorie {chosenSeat.category}</td>
                                            <td>{chosenSeat.price} €</td>
                                        </tr>
                                    ) : (<h4>Chargement</h4>)
                                })}
                            </tbody>
                        </Table >
                        <div>Obtention des billets :
                            {chosenObtainingMethod.name} - {chosenObtainingMethod.price} €
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm shadow p-2 mx-2 mb-5 bg-white rounded">
                        <div>Réservation place Parking : <input id="parkingCheckBox" type="checkbox" onChange={onChangeParking} value="true" name="parkingReservation"/> Cochez pour réserver <input id="nbPlaceParking" value={nbPlaceParking} onChange={onChangeParkingPlace} type="number" min="0" max="5" disabled={!resaParking} name="nbPlaceParking"/> personnes {concertInfo.event.salle.parking.price}€/place</div>
                        <div>Réservation place Restaurant : <input id="restaurantCheckBox" type="checkbox" onChange={onChangeRestaurant} value="true" name="restaurantReservation"/> Cochez pour réserver <input id="nbPlaceRestaurant" value={nbPlaceRestaurant} onChange={onChangeRestaurantPlace} type="number" min="0" max="5" disabled={!resaRestaurant} name="nbPlaceRestaurant"/> personnes {concertInfo.event.salle.restaurant.price}€/personne</div>
                        <input disabled={!resaRestaurant} type="radio" name="restaurantTime" value="19:00" onChange={onChangeRestaurantTime}/>19:00<input disabled={!resaRestaurant} type="radio" name="restaurantTime" value="19:30" onChange={onChangeRestaurantTime}/>19:30<input disabled={!resaRestaurant} type="radio" name="restaurantTime" value="20:00" onChange={onChangeRestaurantTime}/>20:00<input disabled={!resaRestaurant} type="radio" name="restaurantTime" value="20:30" onChange={onChangeRestaurantTime}/>20:30<input disabled={!resaRestaurant} type="radio" name="restaurantTime" value="21:00" onChange={onChangeRestaurantTime}/>21:00<input disabled={!resaRestaurant} type="radio" name="restaurantTime" value="21:30" onChange={onChangeRestaurantTime}/>21:30<input disabled={!resaRestaurant} type="radio" name="restaurantTime" value="22:00" onChange={onChangeRestaurantTime}/>22:00<input disabled={!resaRestaurant} type="radio" value="22:30" name="restaurantTime" onChange={onChangeRestaurantTime}/>22:30
                        <div>
                            Prix total : {totalPrice} €
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-end">
                        <Button className="m-3" variant="outline-secondary">Annuler</Button>
                        <Button className="m-3" onClick={saveReservation} variant="outline-secondary" >Valider</Button>
                    </div>
                </div>
            </Card.Body>

        </Card>
    ) : (<h1 className="text-center">... Patience ... La page arrive ...</h1>)
}


export default ShoppingCartStepTwo;
