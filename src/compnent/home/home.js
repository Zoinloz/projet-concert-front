
import DunkerkeSalle from '../../logo/salle-dunkerque.jpg'
import cannesSalle from '../../logo/salle-cannes.jpg'
import echirollesSalle from '../../logo/salle-echirolles.jpg'
import bourgesSalle from '../../logo/salle-de-concert.jpg'
import banniere from '../../logo/banner-1544x500.png'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import dunkerqueSalle from '../../logo/salle-dunkerque.jpg'
// import cannesSalle from '../../logo/salle-cannes.jpg'
import React from 'react';

import './home.css';

const proprietes = {

}

const Home = () => {
  return (
    <div className="test">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src={banniere}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src={banniere}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src={banniere}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Body>
                <div class="container">
                <h4 className="testText">À NE PAS MANQUER</h4>
                    <div class="row">
                      
                        <div class="col-sm">
                            
                            <Card className="cardOtherConcert">
                                <Card.Img classname="testImg" variant="left" src={bourgesSalle}
                                />
                                <Card.Body className="text-center">
                                    <Card.Title>Nom de l'artiste</Card.Title>
                                    <Card.Text>
                                        <p>Nom de la tournée</p>
                                        <p>Date et heure</p>
                                        <p>Lieu</p>
                                        <p>Catégorie de musique</p>
                                        <p>Tarifs</p>
                                    </Card.Text>
                                    <Button variant="primary">Réserver</Button>
                                </Card.Body>
                            </Card>

                            {/* A remplacer par une boucle au moment de mettre des données */}
                            <Card className="cardOtherConcert">
                                <Card.Img classname="testImg" variant="left" src={bourgesSalle}
                                />
                                <Card.Body className="text-center">
                                    <Card.Title>Nom de l'artiste</Card.Title>
                                    <Card.Text>
                                        <p>Nom de la tournée</p>
                                        <p>Date et heure</p>
                                        <p>Lieu</p>
                                        <p>Catégorie de musique</p>
                                        <p>Tarifs</p>
                                    </Card.Text>
                                    <Button variant="primary">Réserver</Button>
                                </Card.Body>
                            </Card>
                            <Card className="cardOtherConcert">
                                <Card.Img classname="testImg" variant="left" src={bourgesSalle}
                                />
                                <Card.Body className="text-center">
                                    <Card.Title>Nom de l'artiste</Card.Title>
                                    <Card.Text>
                                        <p>Nom de la tournée</p>
                                        <p>Date et heure</p>
                                        <p>Lieu</p>
                                        <p>Catégorie de musique</p>
                                        <p>Tarifs</p>
                                    </Card.Text>
                                    <Button variant="primary">Réserver</Button>
                                </Card.Body>
                            </Card>
                            {/* <Button variant="primary">Next</Button> */}
                            {/* Fin des fausses données à remplacer par une boucle */}

                        </div>

                    </div >
                </div >

            </Card.Body >
        </Card >
    </div>


  );
}

export default Home;