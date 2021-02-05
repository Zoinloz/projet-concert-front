import './contact.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


// La notif s'affiche quand on ouvre l'inspecteur mais très rapidement
// Pour les notif revoir : https://fkhadra.github.io/react-toastify/installation

toast.configure();

function Contact() {

  const notify = (event) => {
    event.preventDefault();
    toast.success('🦄 Votre message a été envoyé avec succès !', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (

    <Card className="w-50 mx-auto my-4 shadow-lg bg-white rounded">
      <Card.Header as="h3" className="titleCard">Contactez-nous</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formContactName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formContactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formContactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <Button type="submit" className="buttonContact float-right" onClick={notify}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-symmetry-horizontal" viewBox="0 0 16 16">
              <path d="M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z" />
            </svg> Envoyer
          </Button>
        </Form>
        <ToastContainer />

      </Card.Body>

    </Card>


  );
}


export default Contact;