import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './contactInformations.css'
import AuthContext from '../../context/AuthContext';
import AuthApi from '../../services/authApi';
import React, { useContext, useState } from 'react';



// function ContactInformationStepThree({history}) {
const ContactInformationStepThree = ({ history }) => {


    const { setIsAuth } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState("")

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setCredentials({ ...credentials, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await AuthApi.auth(credentials);
            setError("");
            setIsAuth(true);
            history.replace('/informationsUserLogged')
        } catch (errorRequest) {
            setError('error de login')
        }


        console.log(credentials);
    }

    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">
                Coordonnées
            </Card.Header>
            <Card.Body>
                <Breadcrumb>
                    <Breadcrumb.Item href="/reservationpage">1. Réservation</Breadcrumb.Item>
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
                            <h4 className="text-center">Vous avez déja un compte</h4>
                            <h6 className="text-center">Connectez-vous</h6>
                            <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
                                <Form.Group controlId="formReservationEmail">
                                    <Form.Label>Votre adresse e-mail</Form.Label>
                                    <Form.Control value={credentials.username}
                                        onChange={handleChange} type="email" placeholder="Email" name="username"
                                        className={"form-control" + (error && " is-invalid")} />
                                </Form.Group>
                                <Form.Group controlId="formReservationPassword">
                                    <Form.Label>Votre mot de passe</Form.Label>
                                    <Form.Control value={credentials.password}
                                        onChange={handleChange} type="password" placeholder="Password" name="password"
                                        id="password" />                                </Form.Group>
                                <div className="text-center">
                                    <Button type="submit" className="buttonCheckAccount mb-2">
                                        Valider
                                        {/* Quand on valide on se connecte et on est redirigé vers /informationsUserLogged */}
                                    </Button>
                                </div>
                                <Form.Text className="text-muted text-center">
                                    Mot de passe oublié
                                </Form.Text>
                            </Form>
                        </div>
                        <div className="col-sm shadow p-2 mx-2 mb-5 bg-white rounded">
                            <h4 className="text-center">Vous n'avez pas de compte</h4>
                            <h6 className="text-center">Créez votre compte</h6>
                            <p>Créez votre compte et simplifiez vos réservations.</p>
                            <p>Conservez vos données en toute sécurité et évitez de
                            remplir vos informations à chaque commande.</p>
                            <p>Gérez vos alertes e-mails pour vos artistes ou salles
                            préférées.</p>
                            <p>Téléchargez et imprimez vos E-Tickets et factures
                            d'achat directement depuis votre compte.</p>
                            <div className="text-center">
                                <Button href="/register" className="buttonRegister my-4">Créer mon compte</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}


export default ContactInformationStepThree;
