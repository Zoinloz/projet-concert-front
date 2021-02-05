import 'bootstrap/dist/css/bootstrap.min.css';
import './parking.css';
import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import iconImage from '../../logo/iconImage.png'

function ParkingPres() {
    return (

        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">Parking - Présentation</Card.Header>
            <Card.Body>
                <div className="container">

                    <div className="row">
                        <div className="col-sm">
                            <img
                                src={iconImage}
                                className="parkingImage"
                                alt="React Bootstrap logo" />
                        </div>
                        <div className="col-sm presentationResto">
                            <Card.Text className="pt-5 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique orci eget eros condimentum, vel pretium ante porttitor. Nullam sodales, lorem a vulputate imperdiet, dolor massa ullamcorper orci, a volutpat nisl turpis eu mi. Ut semper eros vitae turpis posuere malesuada. Fusce vitae enim massa. Suspendisse finibus ex et enim hendrerit, at ullamcorper massa egestas. Aliquam lacinia fringilla dolor, a viverra leo venenatis quis. Pellentesque feugiat diam lorem, nec hendrerit velit volutpat eu. Nulla venenatis vestibulum purus ut scelerisque. Proin arcu ante, dapibus a dolor non, efficitur elementum mauris. Praesent id diam luctus, condimentum nibh sit amet, euismod tortor. Suspendisse maximus pharetra massa ac volutpat. Nulla posuere tincidunt arcu, eget vulputate magna fermentum vel. Etiam cursus risus a lacus dapibus, vitae vestibulum ante tincidunt. Quisque pharetra elit sapien, consectetur euismod diam luctus quis. Duis rutrum erat at laoreet auctor.

                        </Card.Text>
                        </div>

                    </div>

                    <div className="row test">
                        <div className="col-sm">
                            <div >Aix-en-Provence</div>
                            <div >N°, rue,</div>
                            <div >CP, ville</div>
                            <div className="google-map-code">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.9739580005385!2d5.430901651148846!3d43.52373577902359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98d0b5057bd43%3A0x88b7715d87622590!2sYnov%20Aix-en-Provence!5e0!3m2!1sfr!2sfr!4v1611311295912!5m2!1sfr!2sfr" width="250" height="150" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" />
                            </div>
                        </div>

                        <div className="col-sm ">
                            <div >Bourges</div>
                            <div >N°, rue,</div>
                            <div >CP, ville</div>
                            <div className="google-map-code">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4569.1677440105705!2d2.395831206924192!3d47.08253458698334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fa9677b89bb417%3A0xcbfb282ccd5c85be!2s18000%20Bourges!5e0!3m2!1sfr!2sfr!4v1611313495895!5m2!1sfr!2sfr" width="250" height="150" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" />
                            </div>
                        </div>

                        <div className="col-sm ">
                            <div >Cannes</div>
                            <div >N°, rue,</div>
                            <div >CP, ville</div>
                            <div className="google-map-code">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.580215804277!2d7.052867015839526!3d43.61528136289925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2bdd31c62d4f%3A0x84b2932b2575fa3a!2sSOPHIA%20YNOV%20CAMPUS!5e0!3m2!1sfr!2sfr!4v1611313411994!5m2!1sfr!2sfr" width="250" height="150" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" />
                            </div>
                        </div>

                        <div className="col-sm ">
                            <div >Dunkerque</div>
                            <div >N°, rue,</div>
                            <div >CP, ville</div>
                            <div className="google-map-code">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40159.31059190575!2d2.308065264610258!3d51.01694486246299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc8b6dd9ff20b9%3A0x40af13e81646da0!2sDunkerque!5e0!3m2!1sfr!2sfr!4v1611313547824!5m2!1sfr!2sfr" width="250" height="150" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" />
                            </div>
                        </div>

                        <div className="col-sm ">
                            <div >Echirolles</div>
                            <div >N°, rue,</div>
                            <div >CP, ville</div>
                            <div className="google-map-code">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22513.273388476704!2d5.713247797804853!3d45.14337190701536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478a8b3620cb1a37%3A0xdc4accabe478c83f!2s%C3%89chirolles!5e0!3m2!1sfr!2sfr!4v1611313611583!5m2!1sfr!2sfr" width="250" height="150" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" />
                            </div>
                        </div>


                    </div>

                </div>

                {/* <div className="mt-4">
                <Button className="cardRestoration mx-2">La carte</Button>
                <Button className="reservationRestorationButton mx-2">Réserver</Button>
            </div> */}
                <div className="container my-4">
                    <div className="row">

                        <div className="col text-center">
                            <Button className="reservationRestorationButton mx-2 p-3">Réserver</Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ParkingPres;