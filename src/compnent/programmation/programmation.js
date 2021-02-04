import "./programmation.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from 'react';
import concertApi from '../../services/concertApi';
import salleCannes from '../../logo/salle-cannes.jpg';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


export default function Programmation() {

    // Pour lister les Cards
    const [listConcerts, setListConcert] = useState([]);

    useEffect(async () => {
        try {
            const concerts = await concertApi.findAll();
            setListConcert(concerts);
        } catch (error) {
            console.log(error)
        }
    }, [])

    // (Number(listConcerts.priceMax) - Number(listConcerts.percentage) * 100)

    const [endDate, setEndDate] = useState("");
    const [startDate, setStartDate] = useState("");

    function resetDate(e) {
        e.preventDefault();
        // Voir les dates qui ont été mise
        console.log(endDate, startDate);
        // clearing the values
        setEndDate("");
        setStartDate("");
    }
    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
            <Card.Header as="h3" className="titleCard text-center">
                Programmation
        </Card.Header>

            <Card.Body>
                <Card className="my-4 shadow rounded">
                    {/* <Card.Header className="searchCard text-center">
                        Trier
                        </Card.Header> */}
                    <Card.Body className="mx-auto">
                        <Form name="test">
                            <Form.Group
                                className="form-inline"
                                controlId="formProgrammationCheckboxPlace"
                                key="inline-checkbox"
                            >
                                <Form.Label className="mr-2">Lieu : </Form.Label>
                                <Form.Check inline label="Tous" type="checkbox" defaultChecked />
                                <Form.Check inline label="Aix-en-Provence" type="checkbox" />
                                <Form.Check inline label="Bourges" type="checkbox" />
                                <Form.Check inline label="Cannes" type="checkbox" />
                                <Form.Check inline label="Dunkerque" type="checkbox" />
                                <Form.Check inline label="Echirolles" type="checkbox" />
                            </Form.Group>

                            {/* <Form.Group controlId="formRegisterPlace">
                                <ButtonGroup aria-label="Lieu">
                                    <Button className="form__button" variant="secondary">Tous</Button>
                                    <Button className="form__button" variant="secondary">Aix-En-Provence</Button>
                                    <Button className="form__button" variant="secondary">Bourges</Button>
                                    <Button className="form__button" variant="secondary">Cannes</Button>
                                    <Button className="form__button" variant="secondary">Dunkerque</Button>
                                    <Button className="form__button" variant="secondary">Echirolles</Button>
                                </ButtonGroup>
                            </Form.Group> */}

                            <Form.Group
                                className="form-inline"
                                controlId="formProgrammationRadioMusicCategory"
                                key="inline-radio"
                            >
                                <Form.Label className="mr-2">
                                    Catégorie de musique :{" "}
                                </Form.Label>
                                <Form.Check
                                    inline
                                    label="Toutes"
                                    type="radio"
                                    name="formHorizontalRadios"
                                    defaultChecked
                                />
                                <Form.Check
                                    inline
                                    label="Pop"
                                    type="radio"
                                    name="formHorizontalRadios"
                                />
                                <Form.Check
                                    inline
                                    label="Rock"
                                    type="radio"
                                    name="formHorizontalRadios"
                                />
                                <Form.Check
                                    inline
                                    label="Electro"
                                    type="radio"
                                    name="formHorizontalRadios"
                                />
                                <Form.Check
                                    inline
                                    label="Rap / Hip-hop"
                                    type="radio"
                                    name="formHorizontalRadios"
                                />
                                <Form.Check
                                    inline
                                    label="Soul / Funk"
                                    type="radio"
                                    name="formHorizontalRadios"
                                />
                                <Form.Check
                                    inline
                                    label="Classique"
                                    type="radio"
                                    name="formHorizontalRadios"
                                />
                                <Form.Check
                                    inline
                                    label="Dub / Reggae"
                                    type="radio"
                                    name="formHorizontalRadios"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicDate" className="form-inline">
                                <Form.Label>Date : </Form.Label>
                                <Form.Text className="mx-2">Du </Form.Text>
                                <Form.Control
                                    type="date"
                                    name="startDate"
                                    className="w-25"
                                    value={startDate}
                                    onChange={e => setStartDate(e.target.value)}
                                />
                                <Form.Text className="mx-2">au</Form.Text>
                                <Form.Control
                                    type="date"
                                    className="w-25"
                                    name="endDate"
                                    value={endDate}
                                    onChange={e => setEndDate(e.target.value)}
                                />
                                <Button
                                    // variant="outline-info"
                                    // type="submit"
                                    className="mx-3 btnReserDate"
                                    onClick={resetDate}
                                >
                                    Réinitialiser les dates
                  </Button>
                            </Form.Group>
                            <Button className="btnSearchConcert" type="submit">
                                Rechercher
                </Button>
                        </Form>
                    </Card.Body>
                </Card>

                {/* Garder une Card seulement et la mettre dans le map (Voir exemple git prof) */}
                {listConcerts.map(concert => (
                    < Card className="my-4 shadow bg-white rounded cardListConcert text-center concert__card" >
                        {/* <Card.Header className="titleProgrammationListCard"></Card.Header> */}
                        < Card.Img variant="top" src={salleCannes} />
                        <Card.Body>

                            <Card.Text as="h5">{concert.event.artistName}</Card.Text>
                            <Card.Text>{concert.event.name}</Card.Text>
                            <Card.Text>{concert.date} à  {concert.time}</Card.Text>
                            <Card.Text>{concert.event.categories[0].name}</Card.Text>
                            <Card.Text>{concert.event.salle.city}</Card.Text>
                            <Card.Text>Tarifs de {(Number(listConcerts.priceMax) - Number(listConcerts.percentage) * 100)} à {concert.priceMax}€</Card.Text>
                            <Card.Link href="/concertPoster" className="btn btnRerservationConcertList">Réserver</Card.Link>
                        </Card.Body>
                    </Card>
                ))}


            </Card.Body>
        </Card >
    );
    // }
}

