import React from 'react';
import ConcertCard from './ConcertCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderPageTitleReservation.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


function HeaderPageTitleReservation({step}){
    return (
        <div className="header__page__h1 text-center p-5 m-auto">
            <span className="mx-3 reservation__step">1. Réservation</span> <ChevronRightIcon />
            <span className="mx-3">2. Panier d'achat</span> <ChevronRightIcon />
            <span className="mx-3">3. Coordonnées</span> <ChevronRightIcon />
            <span className="mx-3">4. Paiement </span> <ChevronRightIcon />
            <span className="mx-3">5. Confirmation</span> 
            
        </div>
        
    );
}

export default HeaderPageTitleReservation;
