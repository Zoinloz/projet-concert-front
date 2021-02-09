import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import aixSalle from '../../logo/ledome-marseille-concert-musique-spectacle.jpg'
import bourgesSalle from '../../logo/salle-de-concert.jpg'
import echirollesSalle from '../../logo/salle-echirolles.jpg'
import dunkerqueSalle from '../../logo/salle-dunkerque.jpg'
import cannesSalle from '../../logo/salle-cannes.jpg'


import Carousel from 'react-bootstrap/Carousel'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './presentation.css';

function PresentationPrivatisation() {

    const pageUnknow = (event) => {
        event.preventDefault();
        toast.error('La page est en cours de réalisation !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">Privatisation - Présentation</Card.Header>
            <Card.Body>
                <div className="container">
                    <div className="row">

                        <div className="col-sm">
                            <Carousel className="carouselContent">
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-50 mx-auto"
                                        src={aixSalle}
                                        alt="Salle Aix-en-Provence"
                                    />
                                    <Carousel.Caption >
                                        <h3 className="textCardCarousel">Aix en provence</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block w-50 mx-auto"
                                        src={bourgesSalle}
                                        alt="Salle Bourges"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="textCardCarousel">Bourges</h3>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50 mx-auto"
                                        src={cannesSalle}
                                        alt="Salle Cannes"
                                    />
                                    <Carousel.Caption>

                                        <h3 className="textCardCarousel">Cannes</h3>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50 mx-auto"
                                        src={dunkerqueSalle}
                                        alt="Salle Dunkerque"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="textCardCarousel">Dunkerque</h3>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50 mx-auto"
                                        src={echirollesSalle}
                                        alt="Salle Echirolles"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="textCardCarousel">Echirolles</h3>

                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

                            <Card.Text className="pt-5 text-justify">
                                <p>Vous avez toujours rêvé d'organiser des évènements dans l'un de nos lieux mythiques ? Nous vous mettons à
                                disposition l'une de nos salles pour réaliser vos évènements privés ! </p>
                                <p>Pour réserver l'une de nos salles, cliquez sur le bouton ci-dessous et remplissez ce formulaire de pré-réservation.
                                Nous vous rappellerons afin d'échanger sur votre projet.</p>
                            </Card.Text>
                        </div>
                    </div>

                </div>

                <div className="container my-4">
                    <div className="row">
                        <div className="col text-center">
                            <Button className="reservationPrivatisationButton mx-2 p-3" onClick={pageUnknow}>Pré-réserver</Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
            <ToastContainer />

        </Card>
    );
}


export default PresentationPrivatisation;