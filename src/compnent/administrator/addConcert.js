// List concert

import axios from "axios";
import { useEffect, useState } from 'react';
import React from 'react';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './listConcert.css';

function AdminConcertAdd() {

    //react Hook useState
    let [concerts, setConcerts] = useState([])
    //react Hook useEffect
    useEffect(() => {
        axios.get('')
            .then(response => {
                console.log(response.data);
                setConcerts(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();

        // try {
        //     await AuthApi.auth(credentials);
        //     setError("");
        //     setIsAuth(true);
        //     history.replace('/')
        // } catch (errorRequest) {
        //     setError('error de login')
        // }


        // console.log(credentials);
    }
    return (
        <Card className="mx-auto my-4 shadow-lg bg-white rounded testCard" style={{ width: "90%" }}>
            <Card.Header as="h4" className="titleCard text-center">
                Administration - Ajout d'un concert
      </Card.Header>
      
            <div class="container">
            <Form>
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
                                <input type="text" id="nameArtise" class="form-control" aria-describedby="nameArtise" />
                            </div>

                        </div>

                        <div class="row g-3 align-items-center pt-3 ">
                            <div class="col-auto">
                                <label for="nameConcert" className="col-form-label ">Nom du concert :</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="nameConcert" class="form-control" aria-describedby="nameConcert" />
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
                                <Form>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" className="form-control">
                                            <option>Aix-en-Provence</option>
                                            <option>Bourges</option>
                                            <option>Cannes</option>
                                            <option>Dunkerque</option>
                                            <option>Echirolles</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </div>

                        </div>

                        <div class="row g-3 align-items-center pt-3 ">
                            <div class="col-auto">
                                <label for="heureOConcert" className="col-form-label ">Catégorie :</label>
                            </div>
                            <div class="col-auto">
                                <Form>

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
                                </Form>
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
                                <Form>

                                    {['checkbox'].map((type) => (
                                        <div key={`custom-inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="OUI"
                                                name="formHorizontalRadios"
                                                id="ouiP"
                                            />
                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="NON"
                                                name="formHorizontalRadios"
                                                id="nonP"
                                            />

                                        </div>
                                    ))}
                                </Form>
                            </div>

                        </div>

                        <div class="row g-3 align-items-center pt-3 ">
                            <div class="col-auto">
                                <label for="heureOConcert" className="col-form-label ">Restaurant :</label>
                            </div>
                            <div class="col-auto">
                                <Form>

                                    {['checkbox'].map((type) => (
                                        <div key={`custom-inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="OUI"
                                                name="formHorizontalRadios"
                                                id="ouiR"
                                            />
                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="NON"
                                                name="formHorizontalRadios"
                                                id="nonR"
                                            />

                                        </div>
                                    ))}
                                </Form>
                            </div>

                        </div>

                    </div>

                </div>
                </Form>
            </div>
            
        </Card>
    );
}

export default AdminConcertAdd;