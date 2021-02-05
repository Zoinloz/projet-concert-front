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
    // const [listConcerts, setListConcert] = useState([]);
    const [listConcerts, setListConcert] = useState(null);


    // Pour la radio button des localities
    let [localities, setLocality] = useState([])
    const [localitySalle, setLocalitySalle] = useState({
        salleId: '',
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/salle')
            .then(response => {
                console.log(response.data);
                setLocality(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);

    let [categoryMusic, setcategoryMusic] = useState([])

    const [musiqueC, setMusiqueC] = useState({
        categorieId: '',
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/musicCategories')
            .then(response => {
                console.log(response.data);
                setcategoryMusic(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);

    const onChangeCategorie = (e) => {
        e.persist();
        setMusiqueC({ ...musiqueC, categorieId: e.target.value });
        console.log(e.target.value);
        console.log(musiqueC);
    }


    useEffect(async () => {
        try {
            const concerts = await concertApi.findAll();
            setListConcert(concerts);
            setFilterProgrammation(concerts);
        } catch (error) {
            console.log(error)
        }
    }, [])






    const [filterProgrammation, setFilterProgrammation] = useState([]);


    const [endDate, setEndDate] = useState("");
    const [startDate, setStartDate] = useState("");

    function resetDate(e) {
        e.preventDefault();
        console.log(endDate, startDate);
        setEndDate("");
        setStartDate("");
    }







    const onChangeVille = (e) => {
        e.persist();
        setLocalitySalle({ ...localitySalle, salleId: e.target.value });
        console.log(e.target.value);
        console.log(localitySalle);
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        const filterTemp = listConcerts.filter((item) => {


            if (startDate == "" || endDate == "") {
                if (localitySalle.salleId == 0) {

                    if (item.event.categories.length > 0) {

                        if (musiqueC.categorieId == 0) {
                            console.log(musiqueC.categorieId);
                            return item;
                        }

                        if (item.event.categories[0].id == musiqueC.categorieId) {
                            console.log(musiqueC.categorieId);
                            return item;
                        }
                    }

                }

                if (localitySalle.salleId != null && localitySalle.salleId != 0) {
                    if (item.event.salle.id == localitySalle.salleId) {
                        if (item.event.categories.length > 0) {

                            if (musiqueC.categorieId == 0) {
                                console.log(musiqueC.categorieId);
                                return item;
                            }

                            if (item.event.categories[0].id == musiqueC.categorieId) {
                                console.log(musiqueC.categorieId);
                                return item;
                            }
                        }
                    }
                }
            }

            else if ((item.date) > startDate && (item.date) < endDate) {

                if (localitySalle.salleId == 0) {

                    if (item.event.categories.length > 0) {

                        if (musiqueC.categorieId == 0) {
                            console.log(musiqueC.categorieId);
                            return item;
                        }

                        if (item.event.categories[0].id == musiqueC.categorieId) {
                            console.log(musiqueC.categorieId);
                            return item;
                        }
                    }

                }

                if (localitySalle.salleId != null && localitySalle.salleId != 0) {
                    if (item.event.salle.id == localitySalle.salleId) {
                        console.log(localitySalle);
                        if (item.event.categories.length > 0) {

                            if (musiqueC.categorieId == 0) {
                                console.log(musiqueC.categorieId);
                                return item;
                            }
                            if (item.event.categories[0].id == musiqueC.categorieId) {
                                console.log(musiqueC.categorieId);
                                return item;
                            }
                        }
                    }
                }
            }


        }
        )
        setFilterProgrammation(filterTemp);
        console.log(filterTemp);


    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options)
    }

    const formatTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleTimeString('fr-FR')
    }


    return (
        listConcerts ? (
            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h3" className="titleCard text-center">
                    Programmation
        </Card.Header>

                <Card.Body>
                    <Card className="my-4 shadow rounded">
                        <Card.Body className="mx-auto">
                            <Form name="test" onSubmit={handleSubmit}>
                                <Form.Group
                                    className="form-inline"
                                    controlId="formProgrammationCheckboxPlace"
                                    key="inline-radio"
                                >
                                    <Form.Label className="mr-2">Lieu : </Form.Label>
                                    <Form.Check inline label="Tous" type="radio" defaultChecked value={0} onChange={onChangeVille} name="locality" />
                                    {localities.map(locality => (
                                        //L'attribut key est obligatoire pour le dataBinding
                                        <Form.Check value={locality.id} onChange={onChangeVille} key={locality.id} inline label={locality.city} name="locality" type="radio" />
                                    ))}
                                </Form.Group>


                                <Form.Group
                                    className="form-inline"
                                    controlId="formProgrammationRadioMusicCategory"
                                    key="inline-radio"
                                >
                                    <Form.Label className="mr-2">
                                        Catégorie de musique :{" "}
                                    </Form.Label>

                                    <Form.Check inline label="Toutes" type="radio" onChange={onChangeCategorie} defaultChecked value={0} name="categoryMusic" />
                                    {categoryMusic.map(music => (
                                        <Form.Check
                                            value={music.id} onChange={onChangeCategorie} key={music.id} inline label={music.name}
                                            inline
                                            type="radio"
                                            name="categoryMusic"
                                        />

                                    ))}


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
                    {filterProgrammation.map(concert => (
                        < Card className="my-4 shadow bg-white rounded cardListConcert text-center concert__card" >
                            < Card.Img variant="top" src={salleCannes} />
                            <Card.Body>

                                <Card.Text as="h5">{concert.event.artistName}</Card.Text>
                                <Card.Text>{concert.event.name}</Card.Text>
                                <Card.Text>{formatDate(concert.date)} à  {formatTime(concert.time)} heures</Card.Text>
                                <Card.Text>{(concert.event.categories.length > 0) ? concert.event.categories[0].name : 'Aucune catégorie'}</Card.Text>
                                <Card.Text>{concert.event.salle.city}</Card.Text>
                                <Card.Text>Tarifs de {(Number(concert.priceMax) * (1 - Number(concert.percentage) / 100))}€ à {concert.priceMax}€</Card.Text>
                                <Card.Link href={`/concertPoster/${concert.id}`} className="btn btnRerservationConcertList">Réserver</Card.Link>
                            </Card.Body>
                        </Card>
                    ))}


                </Card.Body>
            </Card >
        ) :
            (
                <p>La page charge</p>
            )
    );
}

