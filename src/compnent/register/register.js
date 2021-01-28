import './register.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const registration = async (event) => {
    event.preventDefault();
}

function Register() {

    return (
        <div>
            <Card className="w-50 mx-auto my-4 shadow-lg bg-white rounded" inline>
                <Card.Header as="h3" className="titleCard">Inscrivez-vous</Card.Header>
                <Card.Body>
                    <Form className="w-50 mx-auto" onSubmit={registration}>
                        <Form.Group controlId="formRegisterEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterEmailConfirmation">
                            <Form.Label>Confirmation Email*</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterPassword">
                            <Form.Label>Mot de passe*</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                                Votre mot de passe doit comprendre au moins 8 caractères, une lettre
                                majuscule, une lettre minuscule et un chiffre (0-9).
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formRegisterPasswordConfirmation">
                            <Form.Label>Confirmation de mot de passe *</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterCivilite">
                            <Form.Label className="mr-3">Civilité* : </Form.Label>
                            <Form.Check
                                inline
                                type="radio"
                                label="Madame"
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Monsieur"
                            />
                        </Form.Group>
                        <Form.Group controlId="formRegisterName">
                            <Form.Label>Nom*</Form.Label>
                            <Form.Control type="text" placeholder="Nom" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterFirstName">
                            <Form.Label>Prénom*</Form.Label>
                            <Form.Control type="text" placeholder="Prénom" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterVoie">
                            <Form.Label>N° et libellé de la voie*</Form.Label>
                            <Form.Control type="text" placeholder="N°" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterResidence">
                            <Form.Label>Immeuble, Bâtiment, Résidence</Form.Label>
                            <Form.Control type="text" placeholder="Résidence" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterLieuDit">
                            <Form.Label>Lieu-dit, boite postale, etc</Form.Label>
                            <Form.Control type="text" placeholder="..." />
                        </Form.Group>
                        <Form.Group controlId="formRegisterPostcode">
                            <Form.Label>Code postale*</Form.Label>
                            <Form.Control type="text" placeholder="code postale" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterCity">
                            <Form.Label>Ville*</Form.Label>
                            <Form.Control type="text" placeholder="Ville" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterCountry">
                            <Form.Label>Pays*</Form.Label>
                            <Form.Control type="text" placeholder="Pays" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterPhone">
                            <Form.Label>Téléphone*</Form.Label>
                            <Form.Control type="text" placeholder="0000000000" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterBirthday">
                            <Form.Label>Date de naissance*</Form.Label>
                            <Form.Control type="date" name="formRegisterBirthday" />
                        </Form.Group>

                        <Button type="submit" className="buttonRegisterValidation mb-2 w-50">
                            S'inscrire
                        </Button>
                    </Form>

                </Card.Body>

            </Card>
        </div>






    );
}


export default Register;