import React from 'react';
import './ConcertCardDeck.css'
import ConcertCard from './ConcertCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

function ConcertCardDeck(){
    return (
        <div>
            <div className="container justify-content-center concert__cardDeck">
                <div className="row">
                   <div className="col-lg-3">
                    <ConcertCard/>
                    </div>
                <div className="col-lg-3">
                    <ConcertCard/>
                </div>
                <div className="col-lg-3">
                    <ConcertCard/>
                </div>
                <div className="col-lg-3">
                    <ConcertCard/>
                </div> 
                </div>
                
            </div>

            {/* <CardDeck className="mx-auto mt-5">
                <ConcertCard/>
                <ConcertCard/>
                <ConcertCard/>
                <ConcertCard/>
            </CardDeck>    */}
        </div>
        
    );
}

export default ConcertCardDeck;
