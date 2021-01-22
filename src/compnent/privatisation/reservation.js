import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

import './reservation.css';

function ReservationPrivatisation() {
    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">Privatisation - Réservation</Card.Header>
            <Card.Body>
                <Card.Text className=" text-justify">
                    <p>Vous avez toujours rêvé d'organiser des évènements dans l'un de nos lieux mythiques ? Nous vous mettons à
                                disposition l'une de nos salles pour réaliser vos évènements privés ! </p>
                    <p>Pour réserver l'une de nos salles, cliquez sur le bouton ci-dessous et remplissez ce formulaire de pré-réservation.
                                Nous vous rappellerons afin d'échanger sur votre projet.</p>
                </Card.Text>

                <Form>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Label className="mr-3">Lieu souhaité* : </Form.Label>
                        <Form.Check
                            // disabled
                            inline
                            type="radio"
                            label="Aix-en-Provence"
                        // id='disabled-default-checkbox'
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="Bourges"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="Cannes"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="Dunkerque"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="Echirolles"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}


export default ReservationPrivatisation;