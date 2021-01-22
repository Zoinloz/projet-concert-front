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

  const notify = () => toast.success('🦄 Votre message a été envoyé avec succès !', {
    position: "top-right",
    autoClose: 6000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (

    <Card className="w-50 mx-auto my-4 shadow-lg bg-white rounded">
      <Card.Header as="h3">Contactez-nous</Card.Header>
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




    // si on met que cette div dans le return ca s'affiche
    // <div className="content py-5  bg-light">
    //   <div className="container">
    //     <button className="btn btn-secondary btn-lg float-right" onClick={notify}>Send Message</button>
    //     <ToastContainer />
    //   </div>

    // </div>





    // CODE KEVIN
    // <div className="content py-5  bg-light">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6 offset-md-3">
    //         <span className="anchor" id="formContact"></span>
    //         <div className="card card-outline-secondary shadow-lg bg-white rounded">
    //           <div className="card-header">
    //             <h3 className="mb-0">Contactez-nous</h3>
    //           </div>
    //           <div className="card-body">
    //             <form className="form" autoComplete="off">
    //               <fieldset>
    //                 <label htmlFor="name2" className="mb-0">Name</label>
    //                 <div className="row mb-1">
    //                   <div className="col-lg-12">
    //                     <input type="text" name="name2" id="name2" className="form-control" required="" />
    //                   </div>
    //                 </div>
    //                 <label htmlFor="email2" className="mb-0">Email</label>
    //                 <div className="row mb-1">
    //                   <div className="col-lg-12">
    //                     <input type="text" name="email2" id="email2" className="form-control" required="" />
    //                   </div>
    //                 </div>
    //                 <label htmlFor="message2" className="mb-0">Message</label>
    //                 <div className="row mb-1">
    //                   <div className="col-lg-12">
    //                     <textarea rows="6" name="message2" id="message2" className="form-control" required=""></textarea>
    //                   </div>
    //                 </div>
    //                 <button className="btn btn-secondary btn-lg float-right" onClick={notify}>Send Message</button>
    //                 <button onClick={notify}>Notify !</button>
    //                 <ToastContainer />

    //               </fieldset>
    //             </form>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>

    // </div >


  );
}


export default Contact;