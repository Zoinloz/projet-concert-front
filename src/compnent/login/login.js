import './login.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


// Pour l'inscription : 
// Adresse mail
// confirmation e-mail
// mot de passe
// Confirmation mdp
// civilite
// nom
// prenom
// n° et libelle de la voie
// Immeuble batiment, residence
// Lieu dit boite postale etc 
// code postale
// ville
// pays 
// telephone
// date de naissance



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
function Login() {

    return (
        <div>
            <Card className="w-50 mx-auto my-4 shadow-lg bg-white rounded" inline>
                <Card.Header as="h3" className="titleCard">Connectez-vous</Card.Header>
                <Card.Body>
                    <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
                        <Form.Group controlId="formLoginEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formLoginPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div>
                            <Button type="submit" className="buttonLogin mb-2">
                                Se connecter
                        </Button>
                        </div>
                        <Button href="/register" className="buttonRegister">Pas de compte ? <strong>Inscrivez vous !</strong></Button>
                    </Form>

                </Card.Body>

            </Card>
        </div>






    );
}


export default Login;