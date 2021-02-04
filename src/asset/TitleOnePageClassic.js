import React from 'react';
import './TitleOnePageClassic.css';

const TitleOnePageClassic = ({title}) => {
    return (
        <div className="title__page">
            <h1 className="p-3 text-left">{title}</h1>
        </div>
    );
}

export default TitleOnePageClassic;
