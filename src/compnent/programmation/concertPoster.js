import Card from 'react-bootstrap/Card'

import bourgesSalle from '../../logo/salle-de-concert.jpg'

import './concertPoster.css';

function ConcertPoster() {

    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header className="titleConcertPage">
            <div className="container">
                <div className="row">
                <div className="col-sm mx-auto">
                <img
                className="d-block imageConcert"
                src={bourgesSalle}
                alt="Salle Bourges"
                
            />
            </div>
            <div className="col-sm concertInformations">
               <p>Nom de l'artiste / groupe : </p>
               <p>Nom de la tournée : </p>
               <p>Date et heure : </p>
               <p>Lieu : </p>
               <p>Catégorie de musique : </p>

            </div>
                </div>
            </div>
            
            </Card.Header>
            <Card.Body>
                <div class="container">
                    <div class="row">
                        <div class="col-sm presentationResto">
                            <Card.Text className="pt-5 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique orci eget eros condimentum, vel pretium ante porttitor. Nullam sodales, lorem a vulputate imperdiet, dolor massa ullamcorper orci, a volutpat nisl turpis eu mi. Ut semper eros vitae turpis posuere malesuada. Fusce vitae enim massa. Suspendisse finibus ex et enim hendrerit, at ullamcorper massa egestas. Aliquam lacinia fringilla dolor, a viverra leo venenatis quis. Pellentesque feugiat diam lorem, nec hendrerit velit volutpat eu. Nulla venenatis vestibulum purus ut scelerisque. Proin arcu ante, dapibus a dolor non, efficitur elementum mauris. Praesent id diam luctus, condimentum nibh sit amet, euismod tortor. Suspendisse maximus pharetra massa ac volutpat. Nulla posuere tincidunt arcu, eget vulputate magna fermentum vel. Etiam cursus risus a lacus dapibus, vitae vestibulum ante tincidunt. Quisque pharetra elit sapien, consectetur euismod diam luctus quis. Duis rutrum erat at laoreet auctor.

                            </Card.Text>
                        </div>
                        
                    </div>

                    
                </div>

            </Card.Body>
        </Card>
    );
}


export default ConcertPoster;