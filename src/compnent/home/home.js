
import DunkerkeSalle from '../../logo/salle-dunkerque.jpg'
import cannesSalle from '../../logo/salle-cannes.jpg'
import echirollesSalle from '../../logo/salle-echirolles.jpg'
import bourgesSalle from '../../logo/salle-de-concert.jpg'
import banniere from '../../logo/banner-1544x500.png'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import iconImage from '../../logo/iconImage.png'
import axios from "axios";
import React, { useEffect, useState } from 'react';

import './home.css';



const Home = () => {

  let [latestEvents, setLatestEvent] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/event/latest')
      .then(response => {
        console.log(response.data);
        setLatestEvent(response.data);
      }
      )
      .catch((error) => { console.log(error) })
  }, []);


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


      <Card className="w-75 mx-auto my-4 shadow bg-white rounded">
        <Card.Body>


          <h4 className="testText">PROCHAINEMENT DANS NOS SALLES</h4>
          <div className="container justify-content-center">
            <div className="row">

              {latestEvents.map(latest => (
                <div className="col-lg-3 pt-3">
                  <a href={`/concertPoster/${latest.id}`} className="text-decoration-none">
                    <Card className="my-4 shadow bg-white rounded text-center concert__card" inline>
                      <div className="row no-gutters">
                        <div className="col-auto">
                          <Card.Img variant="left" src="https://www.photobox.fr/blog/wp-content/uploads/2017/06/scene-de-concert-foule-lumieres.jpg" style={{ width: "15rem", objectFit: "cover" }} />
                        </div>
                        <div className="col">
                          <div className="card-block px-2">
                            <Card.Body>
                              <Card.Text >
                                {latest.name} <br></br>
                                {latest.artistDescription}
                              </Card.Text>
                              <Button className="mb-4 button__card" variant="primary" href="/programmation">Réserver</Button>
                            </Card.Body>
                          </div>
                        </div>


                      </div>
                    </Card>
                  </a>
                </div>

              ))}

            </div>
          </div>
          <div className="container my-4">
            <div className="row">
              <div className="col text-center">
                <Button className="cardRestoration button__card p-3 mx-2" href="/programmation"> VOIR TOUTE LA PROGRAMMATION </Button>
              </div>

            </div>
          </div>
        </Card.Body >
      </Card >


      <Card className="w-75 mx-auto my-4 shadow bg-white rounded">
        <Card.Body>

          <h4 className="testText">ACTUALITÉS</h4>
          <div className="container justify-content-center">
            <div className="row">

              <div className="col-lg-3 pt-3">


                <Card className="concert__card text-center">
                  <Card.Img variant="top" src="https://www.photobox.fr/blog/wp-content/uploads/2017/06/scene-de-concert-foule-lumieres.jpg" />
                  <Card.Body>
                    <Card.Text >
                      Titre de l'actualité <br></br>
                      Quelques lignes de l'actualité
                </Card.Text>
                    <Button className="mb-4 button__card" variant="primary">En savoir plus</Button>
                  </Card.Body>
                </Card>

              </div>

              <div className="col-lg-3 pt-3">


                <Card className="concert__card text-center">
                  <Card.Img variant="top" src="https://www.photobox.fr/blog/wp-content/uploads/2017/06/scene-de-concert-foule-lumieres.jpg" />
                  <Card.Body>
                    <Card.Text >
                      Titre de l'actualité <br></br>
                      Quelques lignes de l'actualité
                </Card.Text>
                    <Button className="mb-4 button__card" variant="primary">En savoir plus</Button>
                  </Card.Body>
                </Card>

              </div>

              <div className="col-lg-3 pt-3">


                <Card className="concert__card text-center">
                  <Card.Img variant="top" src="https://www.photobox.fr/blog/wp-content/uploads/2017/06/scene-de-concert-foule-lumieres.jpg" />
                  <Card.Body>
                    <Card.Text >
                      Titre de l'actualité <br></br>
                      Quelques lignes de l'actualité
                </Card.Text>
                    <Button className="mb-4 button__card" variant="primary">En savoir plus</Button>
                  </Card.Body>
                </Card>

              </div>

              <div className="col-lg-3 pt-3">


                <Card className="concert__card text-center" >
                  <Card.Img variant="top" src="https://www.photobox.fr/blog/wp-content/uploads/2017/06/scene-de-concert-foule-lumieres.jpg" />
                  <Card.Body>
                    <Card.Text >
                      Titre de l'actualité <br></br>
                      Quelques lignes de l'actualité
                </Card.Text>
                    <Button className="mb-4 button__card" variant="primary" href="/actuality">En savoir plus</Button>
                  </Card.Body>
                </Card>

              </div>

            </div >
          </div >
          <div className="container my-4">
            <div className="row">
              <div className="col text-center">
                <Button className="cardRestoration button__card p-3 mx-2 " href="/actuality">VOIR TOUTES LES ACTUALITÉS</Button>
              </div>

            </div>
          </div>
        </Card.Body >
      </Card >

      <Card className="w-75 mx-auto my-4 shadow bg-white rounded">
        <Card.Body>


          <h4 className="testText">DES SALLES À VOTRE DISPOSITION</h4>
          <div className="container clearfix">
            <div className="row">
              <div className="col-md-6 float-md-end mb-3 ms-md-3">
                <img
                  src={iconImage}
                  className="restoImage"
                  alt="React Bootstrap logo" />
              </div>
              <div className="col-sm presentationResto">
                <Card.Text className="pt-5 text-justify ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique orci eget eros condimentum, vel pretium ante porttitor. Nullam sodales, lorem a vulputate imperdiet, dolor massa ullamcorper orci, a volutpat nisl turpis eu mi. Ut semper eros vitae turpis posuere malesuada. Fusce vitae enim massa. Suspendisse finibus ex et enim hendrerit, at ullamcorper massa egestas. Aliquam lacinia fringilla dolor, a viverra leo venenatis quis. Pellentesque feugiat diam lorem, nec hendrerit velit volutpat eu. Nulla venenatis vestibulum purus ut scelerisque. Proin arcu ante, dapibus a dolor non, efficitur elementum mauris. Praesent id diam luctus, condimentum nibh sit amet, euismod tortor. Suspendisse maximus pharetra massa ac volutpat. Nulla posuere tincidunt arcu, eget vulputate magna fermentum vel. Etiam cursus risus a lacus dapibus, vitae vestibulum ante tincidunt. Quisque pharetra elit sapien, consectetur euismod diam luctus quis. Duis rutrum erat at laoreet auctor.

                            </Card.Text>
              </div>

            </div>
          </div>


          <div className="container my-4">
            <div className="row">
              <div className="col text-center">
                <Button className="cardRestoration button__card p-3" href="/presentationPrivatisation">PRIVATISER</Button>
              </div>

            </div>
          </div>
        </Card.Body >
      </Card >


    </div>



  );
}

export default Home;