import React from 'react';
import './ConcertCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function concertCard(){
    return (
    <LazyLoadComponent>
        <Card className="text-center" style={{ width: '15rem' }}>            
            <Card.Img variant="top" src="https://www.photobox.fr/blog/wp-content/uploads/2017/06/scene-de-concert-foule-lumieres.jpg" />   
            <Card.Body>
                <Card.Title className="mb-4" variant="center">Nom de l'artiste</Card.Title>
                <Card.Text className="mb-4">
                    Nom de la tournée<br></br>
                    Date et heure<br></br>
                    Catégorie de musique<br></br>
                    Lieu (ville)<br></br>
                    <br></br>
                    Tarif de ... à ... €
                </Card.Text>
                <Button className="mb-4 button__card" variant="primary">Réserver</Button>
            </Card.Body>
        </Card>
    </LazyLoadComponent>
    );
}

export default concertCard;
