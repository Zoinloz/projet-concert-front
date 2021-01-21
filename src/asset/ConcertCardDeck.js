import React from 'react';
import './ConcertCardDeck.css'
import ConcertCard from './ConcertCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

function ConcertCardDeck(){
    return (
        <CardDeck className="w-75 mx-auto">
                <ConcertCard/>
                <ConcertCard/>
                <ConcertCard/>
                <ConcertCard/>
        </CardDeck>   
    );
}

export default ConcertCardDeck;
