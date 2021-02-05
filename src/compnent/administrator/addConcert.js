// List concert

import axios from "axios";
import { useEffect, useState } from 'react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import CKEditor from 'ckeditor4-react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import concertApi from '../../services/concertApi';

import './listConcert.css';

const AdminConcertAdd = ({ history }) => {

    const [evenements, setEvenement] = useState({
        name: '', image_thumbnail: '', image_poster: '', artistName: '', parking: '', restaurant: '', songLink: ''
    })
    const [parking, setParking] = useState({
        parking: ''
    });
    const [restaurant, setRestaurant] = useState({
        restaurant: ''
    });
    const [localitySalle, setLocalitySalle] = useState({
        salleId: '',
    });
    const [categorie, setCategorie] = useState({
        categoryNumber: 0
    });

    let [localities, setLocality] = useState([])


    const [dateConcert, setDateConcert] = useState('');
    const [timeConcert, setTimeConcert] = useState('');
    const [openingTimeConcert, setOpeningTimeConcert] = useState('');

    const [concerts, setConcert] = useState({
        time: '', openingTime: '', categoryNumber: '', artistDescription: '', eventId: '', priceMax: '', percentage: ''
    })
    const concertInput = {
        artistDescription: concerts.artistDescription, time: timeConcert, date: dateConcert, openingTime: openingTimeConcert, priceMax: Number(concerts.priceMax), percentage: Number(concerts.percentage), categoryNumber: Number(categorie.categoryNumber)
    }

    const evenementsInput = {
        salle: { id: Number(localitySalle.salleId) }, name: evenements.name, image_thumbnail: evenements.imageT, image_poster: evenements.imageP, artistName: evenements.nameArtiste, parking: Boolean(parking.parking), restaurant: Boolean(restaurant.restaurant),
        concerts: [
            concertInput,
        ]
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/concert_event', evenementsInput).then((result) => {
            console.log(result);
            // history.push('/admin/ListConcert');
        });


    }

    // EVENT
    const onChange = (e) => {
        e.persist();
        // debugger;
        setEvenement({ ...evenements, [e.target.name]: e.target.value });
    }
    // VILLE
    const onChangeVille = (e) => {
        e.persist();
        // debugger;
        setLocalitySalle({ ...localitySalle, salleId: e.target.value });
        console.log(e.target.value);
    }
    // RADIO BUTTON 
    const onChangeParking = (e) => {
        console.log(e.target.value);
        setParking({ ...parking, parking: e.target.value });
    }

    const onChangeRestaurant = (e) => {
        console.log(e.target.value);
        setRestaurant({ ...restaurant, restaurant: e.target.value });
        console.log(e.target.value);
    }

    // CONCERT 
    const onChangeConcert = (e) => {
        // e.persist();
        // debugger;
        setConcert({ ...concerts, [e.target.name]: e.target.value });
    }
    // DATE
    const onChangeDate = (e) => {
        console.log(e.target.value)
        setDateConcert(e.target.value)
    }
    // TIME
    const onChangeTime = (e) => {
        console.log(e.target.value)
        setTimeConcert(e.target.value)
    }
    // OPENING TIME
    const onChangeOpeningTime = (e) => {
        console.log(e.target.value)
        setOpeningTimeConcert(e.target.value)
    }
    // CATEGORY
    const onChangeCategorie = (e) => {
        console.log(e.target.value);
        setCategorie({ ...categorie, categoryNumber: e.target.value });
    }






    useEffect(() => {
        axios.get('http://127.0.0.1:8000/salle')
            .then(response => {
                console.log(response.data);
                setLocality(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);


    return (
        <Card className="mx-auto my-4 shadow-lg bg-white rounded " style={{ width: "90%" }}>
            <Card.Header as="h4" className="titleCard text-center">
                Administration - Ajout d'un concert
      </Card.Header>
            <Form onSubmit={handleSubmit} id="create-concert-form">
                <div className="container">

                    <div className="row">
                        <div className="col-sm presentationResto pt-4 pb-4">
                            <img
                                src={"https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-large-concert-poster-background-material-image_161960.jpg"}
                                className="restoImage"
                                alt="React Bootstrap logo" />
                        </div>
                        <div className="col-sm presentationResto pt-4 text-justify">

                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label htmlFor="nameArtise" className="col-form-label">Nom de l'artiste / groupe :</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" onChange={onChange} name="nameArtiste" value={evenements.nameArtiste} id="nameArtise" className="form-control" aria-describedby="nameArtise" />
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="nameConcert" className="col-form-label ">Nom du concert :</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" onChange={onChange} name="name" value={evenements.name} id="name" className="form-control" aria-describedby="nameConcert" />
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="dateConcert" className="col-form-label ">Date :</label>
                                </div>
                                <div className="col-auto">
                                    <input name="dateConcert" onChange={onChangeDate} value={dateConcert} type="date" id="dateConcert" className="form-control" aria-describedby="dateConcert" />
                                </div>

                            </div>


                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="heureConcert" className="col-form-label ">Heure :</label>
                                </div>
                                <div className="col-auto">
                                    <input name="timeConcert" onChange={onChangeTime} value={timeConcert} type="time" id="heureConcert" className="form-control" aria-describedby="heureConcert" />
                                </div>

                            </div>


                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="heureOConcert" className="col-form-label ">Heure d'ouverture :</label>
                                </div>
                                <div className="col-auto">
                                    <input name="openingTimeConcert" onChange={onChangeOpeningTime} value={openingTimeConcert} type="time" id="heureOConcert" className="form-control" aria-describedby="heureOConcert" />
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="lieuxConcert" className="col-form-label ">Lieu (ville) :</label>
                                </div>
                                <div className="col-auto">
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" name="salleId" value={localitySalle.salleId} onChange={onChangeVille} className="form-control">
                                            {localities.map(locality => (
                                                //L'attribut key est obligatoire pour le dataBinding
                                                <option key={locality.id} value={locality.id}>{locality.city}</option>
                                            ))}


                                        </Form.Control>
                                    </Form.Group>
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="heureOConcert" className="col-form-label ">Catégorie :</label>
                                </div>
                                <div className="col-auto">

                                    {['radio'].map((type) => (
                                        <div key={`custom-inline-${type}`} className="mb-3">
                                            <Form.Check
                                                custom
                                                inline
                                                value={1}
                                                onChange={onChangeCategorie}
                                                label="Catégorie 1"
                                                type={type}
                                                name="categoryNumber"
                                                id={`custom-inline-${type}-1`}
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                value={2}
                                                onChange={onChangeCategorie}
                                                name="categoryNumber"
                                                label="Catégorie 2"
                                                type={type}
                                                id={`custom-inline-${type}-2`}
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                value={3}
                                                onChange={onChangeCategorie}
                                                name="categoryNumber"
                                                label="Catégorie 3"
                                                type={type}
                                                id={`custom-inline-${type}-3`}
                                            />
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="trancheTConcert" className="col-form-label ">Tranches de tarifs :</label>
                                </div>

                            </div>
                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="nameArtise" className="col-form-label">Tarif Max : </label>
                                </div>
                                <div className="col-auto">
                                    <input type="number" onChange={onChangeConcert} name="priceMax" value={concerts.priceMax} id="priceMax" className="form-control" aria-describedby="priceMax" />
                                </div>

                            </div>
                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="nameArtise" className="col-form-label">Pourcentage : </label>
                                </div>
                                <div className="col-auto">
                                    <input type="number" onChange={onChangeConcert} name="percentage" value={concerts.percentage} id="percentage" className="form-control" aria-describedby="percentage" />
                                </div>

                            </div>


                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="trancheTConcert" className="col-form-label ">Catégorie 1 :</label>
                                </div>
                                <div className="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control " aria-describedby="trancheTConcert" value={(Number(concerts.priceMax) * (1 - Number(concerts.percentage) / 100))} />
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="trancheTConcert" className="col-form-label">à</label>
                                </div>
                                <div className="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control" aria-describedby="trancheTConcert" value={Number(concerts.priceMax)} />
                                </div>
                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="trancheTConcert" className="col-form-label ">Catégorie 2 :</label>
                                </div>
                                <div className="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control " aria-describedby="trancheTConcert" value={((Number(concerts.priceMax) - 10) * (1 - Number(concerts.percentage) / 100))} />
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="trancheTConcert" className="col-form-label">à</label>
                                </div>
                                <div className="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control" aria-describedby="trancheTConcert" value={(Number(concerts.priceMax) - 10)} />
                                </div>
                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="trancheTConcert" className="col-form-label ">Catégorie 3 :</label>
                                </div>
                                <div className="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control " aria-describedby="trancheTConcert" value={((Number(concerts.priceMax) - 20) * (1 - Number(concerts.percentage) / 100))} />
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="trancheTConcert" className="col-form-label">à</label>
                                </div>
                                <div className="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control" aria-describedby="trancheTConcert" value={(Number(concerts.priceMax) - 20)} />
                                </div>
                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="heureOConcert" className="col-form-label ">Parking :</label>
                                </div>
                                <div className="col-auto">

                                    {['checkbox'].map((type) => (
                                        <div key={`custom-inline-${type}`} className="mb-3" >
                                            <Form.Check
                                                name="parking"
                                                value={true}
                                                onChange={onChangeParking}
                                                inline
                                                type="radio"
                                                label="OUI"
                                                id="ouiP"
                                            />


                                            <Form.Check
                                                name="parking"
                                                value={false}
                                                onChange={onChangeParking}
                                                inline
                                                type="radio"
                                                label="NON"
                                                id="nonP"
                                            />

                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="heureOConcert" className="col-form-label ">Restaurant :</label>
                                </div>
                                <div className="col-auto">

                                    {['checkbox'].map((type) => (
                                        <div key={`custom-inline-${type}`} className="mb-3">
                                            <Form.Check
                                                name="restaurant"
                                                value={true}
                                                onChange={onChangeRestaurant}
                                                inline
                                                type="radio"
                                                label="OUI"
                                                id="ouiR"

                                            />
                                            <Form.Check
                                                name="restaurant"
                                                value={false}
                                                onChange={onChangeRestaurant}
                                                inline
                                                type="radio"
                                                label="NON"
                                                id="nonR"

                                            />

                                        </div>
                                    ))}
                                </div>

                            </div>


                        </div>

                    </div>





                    <h3>Présentation de l'artiste / groupe</h3>

                    <div className="w-75" >
                        <Form.Group>
                            <Form.Label>Présentation de l'artiste</Form.Label>
                            <Form.Control as="textarea" rows={3} name="artistDescription" onChange={onChangeConcert} value={concerts.artistDescription} />
                        </Form.Group>
                    </div>


                </div>

                <div className="d-flex justify-content-end pt-5 pb-5">

                    <div className="p-2"><Button className="" href="/admin/ListConcert" >ANNULER</Button></div>
                    <div className="p-2"><Button >EFFACER</Button></div>
                    <div className="p-2"><Button type="submit" >CRÉER LE CONCERT</Button></div>
                    <div className="p-2"></div>
                </div>
            </Form>
        </Card >


    );
}

export default AdminConcertAdd;