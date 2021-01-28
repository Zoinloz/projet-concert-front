import React from 'react';
import ConcertCard from './ConcertCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderPageTitleClassic.css';


function HeaderPageTitleClassic({title}){
    return (
        <div className="header__page__h1">
            <h1 className="p-5 m-auto text-center">{title}</h1>
        </div>
        
    );
}

export default HeaderPageTitleClassic;
