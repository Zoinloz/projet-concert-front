import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import HeaderPageTitleReservation from './../../asset/HeaderPageTitleReservation.js';

function PaymentStepFour() {
    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">
                Paiement
            </Card.Header>
            <Card.Body>
                {/* <Breadcrumb>
                    <Breadcrumb.Item href="/reservationStepOne">1. Réservation</Breadcrumb.Item>
                    <Breadcrumb.Item href="/shoppingCart">
                        2. Panier d'achat
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/contactInformation" >3. Coordonnées</Breadcrumb.Item>
                    <Breadcrumb.Item active>4. Paiement</Breadcrumb.Item>
                    <Breadcrumb.Item>5. Confirmation</Breadcrumb.Item>

                </Breadcrumb> */}
                <HeaderPageTitleReservation />
            </Card.Body>
        </Card>
    );
}


export default PaymentStepFour;