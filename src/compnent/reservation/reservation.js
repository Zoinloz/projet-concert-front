import Card from 'react-bootstrap/Card'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './reservation.css';

function ReservationStepOne() {
    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded">
            <Card.Header as="h3" className="titleCard">
                Réservation
            </Card.Header>
            <Card.Body>
                <Breadcrumb>
                    <Breadcrumb.Item href="/reservationStepOne">1. Réservation</Breadcrumb.Item>
                    <Breadcrumb.Item active >2. Panier d'achat</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#" >3. Coordonnées</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">4. Paiement</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">5. Confirmation</Breadcrumb.Item>

                </Breadcrumb>
            </Card.Body>
        </Card>
    );
}


export default ReservationStepOne;