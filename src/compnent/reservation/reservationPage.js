import React, { useState } from 'react';

import HeaderPageTitleReservation from './../../asset/HeaderPageTitleReservation.js';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './reservationPage.css'; 
import DatePicker from "react-datepicker";

import TodayIcon from '@material-ui/icons/Today';
import EventIcon from '@material-ui/icons/Event';
import InfiniteScroll from 'react-infinite-scroller';
import ConcertCardDeck from './../../asset/ConcertCardDeck'



const reservationPage = () => {
    return (
        <div>

            <HeaderPageTitleReservation />
            Card : nom de l'artiste, affiche, date et heure, lieu, catégorie de musique, carte 

            <h2>1. Choisissez vos places sur le plan :</h2>
            Tableau présentant la scène<br></br>
            cadre récapitualitif 

            <h2>2. Choisissez le mode d'obtention des billets :</h2>
            cadre option d'achat <br></br>
            <br></br>

            bouton annuler / valider

            
        </div>
    );
}

export default reservationPage;
