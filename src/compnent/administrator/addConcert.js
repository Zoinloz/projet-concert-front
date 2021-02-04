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

// function AdminConcertAdd() {
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


    let [localities, setLocality] = useState([])


    // const [dateConcert, setDateConcert] = useState('');
    // const [concerts, setConcert] = useState({
    //     time: '', openingTime: '', categoryNumber: '', artistDescription: '', eventId: '',
    // })
    const evenementsInput = {
        salleId: localitySalle.salleId, name: evenements.name, image_thumbnail: evenements.imageT, image_poster: evenements.imageP, artistName: evenements.nameArtiste, parking: Boolean(parking.parking), restaurant: Boolean(restaurant.restaurant)
    }
    // const concertInput = {
    //     artistDescription: concerts.artistDescription, eventId: "1", time: "1970-01-01T16:25:12+00:00", date: Date('2021-03-03'), openingTime: "1970-01-01T15:25:12+00:00", priceMax: 150, percentage: 0.8, categoryNumber: "3"
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        concertApi.createEvent(evenementsInput).then((result) => {
            console.log(evenementsInput);
            // console.log(concertInput);

            history.push('/admin/ListConcert');
        });
        // concertApi.createConcert(concerts).then((result) => {
        //     console.log(concertInput);
        //     history.push('/admin/ListConcert');
        // });

    }

    // EVENT
    const onChange = (e) => {
        e.persist();
        // debugger;
        setEvenement({ ...evenements, [e.target.name]: e.target.value });
    }

    const onChangeVille = (e) => {
        e.persist();
        // debugger;
        setLocalitySalle({ ...localitySalle, salleId: e.target.value });
        console.log(e.target.value);
    }

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
    // const onChangeDate = (e) => {
    //     console.log(e.target.value)
    //     setDateConcert(e.target.value)
    // }
    // const onChangeConcert = (e) => {
    //     // e.persist();
    //     // debugger;
    //     // setConcert({ ...concerts, [e.target.name]: e.target.value });
    //     e.editor.getData()
    // }



    useEffect(() => {
        axios.get('http://127.0.0.1:8000/salle')
            .then(response => {
                console.log(response.data);
                setLocality(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);

    // BTN RESET
    const cancelCourse = (e) => {
        e.preventDefault();
    }

    return (
        <Card className="mx-auto my-4 shadow-lg bg-white rounded " style={{ width: "90%" }}>
            <Card.Header as="h4" className="titleCard text-center">
                Administration - Ajout d'un concert
      </Card.Header>
            <Form onSubmit={handleSubmit} id="create-concert-form">
                <div class="container">

                    <div class="row">
                        <div class="col-sm presentationResto pt-4 pb-4">
                            <img
                                src={"https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-large-concert-poster-background-material-image_161960.jpg"}
                                className="restoImage"
                                alt="React Bootstrap logo" />
                        </div>
                        <div class="col-sm presentationResto pt-4 text-justify">

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="nameArtise" class="col-form-label">Nom de l'artiste / groupe :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" onChange={onChange} name="nameArtiste" value={evenements.nameArtiste} id="nameArtise" class="form-control" aria-describedby="nameArtise" />
                                </div>

                            </div>

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="nameConcert" className="col-form-label ">Nom du concert :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" onChange={onChange} name="name" value={evenements.name} id="name" class="form-control" aria-describedby="nameConcert" />
                                </div>

                            </div>

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="dateConcert" className="col-form-label ">Date :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="date" id="dateConcert" class="form-control" aria-describedby="dateConcert" />
                                </div>

                            </div>

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="heureConcert" className="col-form-label ">Heure :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="time" id="heureConcert" class="form-control" aria-describedby="heureConcert" />
                                </div>

                            </div>


                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="heureOConcert" className="col-form-label ">Heure d'ouverture :</label>
                                </div>
                                <div class="col-auto">
                                    <input type="time" id="heureOConcert" class="form-control" aria-describedby="heureOConcert" />
                                </div>

                            </div>

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="lieuxConcert" className="col-form-label ">Lieu (ville) :</label>
                                </div>
                                <div class="col-auto">
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

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="heureOConcert" className="col-form-label ">Catégorie :</label>
                                </div>
                                <div class="col-auto">

                                    {['checkbox'].map((type) => (
                                        <div key={`custom-inline-${type}`} className="mb-3">
                                            <Form.Check
                                                custom
                                                inline
                                                label="Catégorie 1"
                                                type={type}
                                                id={`custom-inline-${type}-1`}
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                label="Catégorie 2"
                                                type={type}
                                                id={`custom-inline-${type}-2`}
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                label="Catégorie 3"
                                                type={type}
                                                id={`custom-inline-${type}-3`}
                                            />
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="trancheTConcert" className="col-form-label ">Tranches de tarifs :</label>
                                </div>




                            </div>

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="trancheTConcert" className="col-form-label ">Catégorie 1 :</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control " aria-describedby="trancheTConcert" />
                                </div>
                                <div class="col-auto">
                                    <label for="trancheTConcert" className="col-form-label">à</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control" aria-describedby="trancheTConcert" />
                                </div>
                            </div>

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="trancheTConcert" className="col-form-label ">Catégorie 2 :</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control " aria-describedby="trancheTConcert" />
                                </div>
                                <div class="col-auto">
                                    <label for="trancheTConcert" className="col-form-label">à</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control" aria-describedby="trancheTConcert" />
                                </div>
                            </div>

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="trancheTConcert" className="col-form-label ">Catégorie 3 :</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control " aria-describedby="trancheTConcert" />
                                </div>
                                <div class="col-auto">
                                    <label for="trancheTConcert" className="col-form-label">à</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="trancheTConcert" className="form-control" aria-describedby="trancheTConcert" />
                                </div>
                            </div>

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="heureOConcert" className="col-form-label ">Parking :</label>
                                </div>
                                <div class="col-auto">

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

                            <div class="row g-3 align-items-center pt-3 ">
                                <div class="col-auto">
                                    <label for="heureOConcert" className="col-form-label ">Restaurant :</label>
                                </div>
                                <div class="col-auto">

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
                        <CKEditor
                            // onChange={onChangeConcert}
                            // name='artistDescription'
                            // value={concerts.artistDescription}

                            data="<p></p>"
                        />
                    </div>


                </div>

                <div className="d-flex justify-content-end pt-5 pb-5">

                    <div class="p-2"><Button className="" href="#" >ANNULER</Button></div>
                    <div class="p-2"><Button onClick={cancelCourse} >EFFACER</Button></div>
                    <div class="p-2"><Button type="submit" >CRÉER LE CONCERT</Button></div>
                    <div class="p-2"></div>
                </div>
            </Form>
        </Card >


    );
}

export default AdminConcertAdd;