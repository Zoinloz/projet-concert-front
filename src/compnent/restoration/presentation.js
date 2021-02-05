import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import iconImage from '../../logo/iconImage.png'

import './presentation.css';

function PresentationRestoration() {

    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">Restauration - Présentation</Card.Header>
            <Card.Body>
                <div className="container">
                    <div className="row">
                        <div className="col-sm presentationResto">
                            <Card.Text className="pt-5 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique orci eget eros condimentum, vel pretium ante porttitor. Nullam sodales, lorem a vulputate imperdiet, dolor massa ullamcorper orci, a volutpat nisl turpis eu mi. Ut semper eros vitae turpis posuere malesuada. Fusce vitae enim massa. Suspendisse finibus ex et enim hendrerit, at ullamcorper massa egestas. Aliquam lacinia fringilla dolor, a viverra leo venenatis quis. Pellentesque feugiat diam lorem, nec hendrerit velit volutpat eu. Nulla venenatis vestibulum purus ut scelerisque. Proin arcu ante, dapibus a dolor non, efficitur elementum mauris. Praesent id diam luctus, condimentum nibh sit amet, euismod tortor. Suspendisse maximus pharetra massa ac volutpat. Nulla posuere tincidunt arcu, eget vulputate magna fermentum vel. Etiam cursus risus a lacus dapibus, vitae vestibulum ante tincidunt. Quisque pharetra elit sapien, consectetur euismod diam luctus quis. Duis rutrum erat at laoreet auctor.

                            </Card.Text>
                        </div>
                        <div className="col-sm presentationResto">
                            <img
                                src={iconImage}
                                className="restoImage"
                                alt="React Bootstrap logo" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm presentationResto">
                            <img
                                src={iconImage}
                                className="restoImage"
                                alt="React Bootstrap logo" />
                        </div>
                        <div className="col-sm presentationResto">
                            <Card.Text className="pt-5 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique orci eget eros condimentum, vel pretium ante porttitor. Nullam sodales, lorem a vulputate imperdiet, dolor massa ullamcorper orci, a volutpat nisl turpis eu mi. Ut semper eros vitae turpis posuere malesuada. Fusce vitae enim massa. Suspendisse finibus ex et enim hendrerit, at ullamcorper massa egestas. Aliquam lacinia fringilla dolor, a viverra leo venenatis quis. Pellentesque feugiat diam lorem, nec hendrerit velit volutpat eu. Nulla venenatis vestibulum purus ut scelerisque. Proin arcu ante, dapibus a dolor non, efficitur elementum mauris. Praesent id diam luctus, condimentum nibh sit amet, euismod tortor. Suspendisse maximus pharetra massa ac volutpat. Nulla posuere tincidunt arcu, eget vulputate magna fermentum vel. Etiam cursus risus a lacus dapibus, vitae vestibulum ante tincidunt. Quisque pharetra elit sapien, consectetur euismod diam luctus quis. Duis rutrum erat at laoreet auctor.

                            </Card.Text>
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
                            <Button className="cardRestoration mx-2 p-3">La carte</Button>
                        </div>
                        <div className="col text-center">
                            <Button className="reservationRestorationButton mx-2 p-3">Réserver</Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}


export default PresentationRestoration;