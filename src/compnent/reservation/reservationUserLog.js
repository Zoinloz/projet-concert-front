import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './contactInformations.css'

// IL FAUT PREREMPLIR AVEC LES DONNES DU USER

function UserLoggedReservationStepThree() {
    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">
                Vérifiez vos informations personnelles
            </Card.Header>
            <Card.Body>
                <Breadcrumb>
                    <Breadcrumb.Item href="/reservationStepOne">1. Réservation</Breadcrumb.Item>
                    <Breadcrumb.Item href="/shoppingCart">
                        2. Panier d'achat
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active >3. Coordonnées</Breadcrumb.Item>
                    <Breadcrumb.Item>4. Paiement</Breadcrumb.Item>
                    <Breadcrumb.Item>5. Confirmation</Breadcrumb.Item>
                </Breadcrumb>

                <div className="container">
                    <div className="row">
                        <div className="col-sm shadow p-2 mx-2 mb-5 bg-white rounded">
                            <Form className="w-50 mx-auto">
                                <Form.Group controlId="formRegisterEmail">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
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
                                <Form.Text className="text-muted">
                                    * Champs obligatoires.
                                </Form.Text>
                                <div className="text-center my-4">
                                    <Button type="submit" className="buttonRegisterValidation mb-2 w-50">
                                        Valider
                                </Button>
                                    <Button as="input" type="reset" value="Annuler" className="buttonReservationCancel mb-2 ml-1" />
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}


export default UserLoggedReservationStepThree;