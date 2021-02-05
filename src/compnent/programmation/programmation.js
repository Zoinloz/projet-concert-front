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


    // Pour la checkBox des localities
    let [localities, setLocality] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/salle')
            .then(response => {
                console.log(response.data);
                setLocality(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);


    // Pour la checkBox des catégories de musique
    let [musiqueC, setMusiqueC] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/musiqueCategories')
            .then(response => {
                console.log(response.data);
                setMusiqueC(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);

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

    // const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });
    // res.data.args; // { answer: 42 }
    const [localitySalle, setLocalitySalle] = useState({
        salleId: '',
    });
    const onChangeVille = (e) => {
        e.persist();
        // debugger;
        setLocalitySalle({ ...localitySalle, salleId: e.target.value });
        console.log(e.target.value);
    }
    const salleSearch = {
        salleId: localitySalle.salleId
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // recup les objet et mettre dans un objet search
        axios.get('http://localhost:8000/event/search', /*{ params: { salles: [{ salleSearch } ]} }*/).then((result) => {
            console.log(result);

            // history.push('/admin/ListConcert');
        });

    }

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
        listConcerts ? (
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
                            <Form name="test" onSubmit={handleSubmit}>
                                <Form.Group
                                    className="form-inline"
                                    controlId="formProgrammationCheckboxPlace"
                                    key="inline-checkbox"
                                >
                                    <Form.Label className="mr-2">Lieu : </Form.Label>
                                    <Form.Check inline label="Tous" type="checkbox" defaultChecked />
                                    {localities.map(locality => (
                                        //L'attribut key est obligatoire pour le dataBinding
                                        <Form.Check value={localitySalle.salleId} onChange={onChangeVille} key={locality.id} inline label={locality.city} name={locality.id} type="checkbox" />
                                    ))}
                                    {/* <Form.Check inline label="Tous" type="checkbox" defaultChecked />
                                 <Form.Check inline label="Aix-en-Provence" type="checkbox" />
                                 <Form.Check inline label="Bourges" type="checkbox" />
                                 <Form.Check inline label="Cannes" type="checkbox" />
                                 <Form.Check inline label="Dunkerque" type="checkbox" />
                                 <Form.Check inline label="Echirolles" type="checkbox" /> */}
                                </Form.Group>


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
                                <Card.Text>{formatDate(concert.date)} à  {formatTime(concert.time)} heures</Card.Text>
                                {/* <Card.Text>{concert.event.categories[0].name}</Card.Text> */}
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
    // }
}

