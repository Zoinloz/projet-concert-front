import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import HeaderPageTitleReservation from './../../asset/HeaderPageTitleReservation.js';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import concertApi from "../../services/concertApi";

function PaymentStepFour() {

    const [concertInfo, setConcertInfo] = useState(null);


    let chosenObtainingMethod = []
    let resaParking = false;
    let resaRestaurant = false;
    let nbPlaceParking = 0;
    let nbPlaceRestaurant = 0;
    let restaurantTime = null;
    if(Cookies.get('chosenObtainingMethod')){
        chosenObtainingMethod = JSON.parse(Cookies.get('chosenObtainingMethod'))
        chosenObtainingMethod = JSON.parse(chosenObtainingMethod.obtainingMethod)
    }

    if(Cookies.get('resaParking')){
        resaParking = Cookies.get('resaParking')
        if(resaParking){
            nbPlaceParking = Cookies.get('nbPlaceParking')
        }
    }

    if(Cookies.get('resaRestaurant')){
        resaRestaurant = Cookies.get('resaRestaurant')
        if(resaRestaurant){
            nbPlaceRestaurant = Cookies.get('nbPlaceRestaurant')
            restaurantTime = Cookies.get('restaurantTime')
        }
    }

    let chosenSeats = [];
    if(Cookies.get('listChosenSeats')) {
        chosenSeats = JSON.parse(Cookies.get('listChosenSeats'))
    }

    let totalPrice = 0;
    let seatId = [];
    chosenSeats.forEach(chosenSeat => {
        totalPrice = totalPrice + chosenSeat.price
        seatId.push(chosenSeat.id)
    })
    totalPrice = totalPrice + chosenObtainingMethod.price

    const paiement = () => {
        let data = {
            obtainingMethodId: chosenObtainingMethod.id,
            seatId: seatId,
            price: totalPrice,
            cancellationInsurance: false,
            qrCodeUrl: "",
            parking: resaParking,
            parkingPlaces: nbPlaceParking,
            restaurantPlaces: nbPlaceRestaurant,
            restaurantTime: "1985-04-12T23:20:50.52Z"
        }
        concertApi.paiement(data).then((response) => {
            console.log(response)
        })
    }

    useEffect(() => {
        concertApi.getConcert(Cookies.get('concertId')).then((concertInfo) => {
            setConcertInfo(concertInfo)
        })
    }, [])
    return (
        concertInfo ? (<Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">
                Paiement
            </Card.Header>
            <Card.Body>
                <Breadcrumb>
                    <Breadcrumb.Item href="/reservationpage">1. Réservation</Breadcrumb.Item>
                    <Breadcrumb.Item href="/shoppingCart">2. Panier d'achat</Breadcrumb.Item>
                    <Breadcrumb.Item href="/contactInformation">3. Coordonnées</Breadcrumb.Item>
                    <Breadcrumb.Item active href="/payment">4. Paiement</Breadcrumb.Item>
                    <Breadcrumb.Item href="/confirmation">5. Confirmation</Breadcrumb.Item>
                </Breadcrumb>

                <div className="container">
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
                                        return (
                                            <tr>
                                                <td>{concertInfo.event.artistName}</td>
                                                <td>{concertInfo.event.salle.city}</td>
                                                <td></td>
                                                <td>Catégorie {chosenSeat.category}</td>
                                                <td>{chosenSeat.price} €</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table >
                        </div>
                    </div>
                    <div className="row">Obtention des billets :
                        {chosenObtainingMethod.name} - {chosenObtainingMethod.price} €
                    </div>
                    {resaParking &&
                    <div className="row">
                        Réservation place parking : {nbPlaceParking} place(s)
                    </div>
                    }
                    {resaRestaurant &&
                    <div className="row">
                        Réservation restaurant : Réservation à {restaurantTime} pour {nbPlaceRestaurant} personnes
                    </div>
                    }
                    <div className="row">
                        Prix total : {totalPrice} €
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-end">
                            <Button className="m-3" variant="outline-secondary" >Annuler</Button>
                            <Button className="m-3" onClick={paiement} variant="outline-secondary" >Valider et Payer</Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
        ) : (<h1 className="text-center">... Patience ... La page arrive ...</h1>)
    );
}


export default PaymentStepFour;
