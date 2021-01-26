import React, { useState } from 'react';

import HeaderPageTitleClassic from './../../asset/HeaderPageTitleClassic.js';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './programmationPage.css'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodayIcon from '@material-ui/icons/Today';
import EventIcon from '@material-ui/icons/Event';
import InfiniteScroll from 'react-infinite-scroller';
import ConcertCardDeck from './../../asset/ConcertCardDeck'


const programmationPage = () => {

const handleSubmit = async (event) => {
    event.preventDefault()

}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [startDate, setStartDate] = useState(new Date());

// eslint-disable-next-line react-hooks/rules-of-hooks
const [endDate, setEndDate] = useState(new Date());


    return (
        <div>
            <HeaderPageTitleClassic title="Programmation" />

            <div className="programmationPage__content m-5">

                <div className="container">

                    <div className="row m-3 row__1 align-items-center">

                        <div className="col-2 col__cool text-right">
                    
                            <Form.Label className="mr-3">Lieu:</Form.Label>
    
                        </div>

                        <div className="col">
                            
                            <Form className="" onSubmit={handleSubmit}>
                                <Form.Group controlId="formRegisterPlace">
                                    <ButtonGroup aria-label="Lieu">
                                        <Button className="form__button" variant="secondary">Tous</Button>
                                        <Button className="form__button" variant="secondary">Aix-En-Provence</Button>
                                        <Button className="form__button" variant="secondary">Bourges</Button>
                                        <Button className="form__button" variant="secondary">Cannes</Button>
                                        <Button className="form__button" variant="secondary">Dunkerque</Button>
                                        <Button className="form__button" variant="secondary">Echirolles</Button>
                                    </ButtonGroup>
                                </Form.Group>
                            </Form>

                        </div>

                    </div>

                    <div className="row m-3row__1 align-items-center">

                        <div className="col-2 col__cool text-right">
                    
                            <Form.Label className="mr-3">Catégorie de musique : </Form.Label>
    
                        </div>

                        <div className="col">

                            <Form className="" onSubmit={handleSubmit}>

                                <Form.Group controlId="formRegisterMusic">

                                    <Form.Check
                                        // disabled
                                        inline
                                        type="radio"
                                        label="Toutes"
                                    // id='disabled-default-checkbox'
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Pop"
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Rock"
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Electro"
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Rap / Hip-Hop"
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Rap / Hip-Hop"
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Soul / Funk"
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Classique"
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Dub / Reggae"
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="World"
                                    />
                            
                                </Form.Group>

                            </Form>

                        </div>

                    </div>

                    <div className="row m-3 row__1 align-items-center">

                        <div className="col-2 col__cool text-right">
                    
                            <Form.Label className="mr-3">Dates :</Form.Label>
    
                        </div>

                        <div className="col">
                            
                            <Form className="" onSubmit={handleSubmit}>

                            Du : <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> <TodayIcon/>
                            <span className="ml-3">
                                au : <DatePicker selected={endDate} onChange={date => setEndDate(date)} /> <EventIcon/>
                            </span> 
                               
                            </Form>

                        </div>

                    </div>
                    
                </div>
                
                <div className="container mt-5">

                    <div className="row ">
                        
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={<div><ConcertCardDeck/></div>}
                        hasMore={true || false}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        <div><ConcertCardDeck/></div>
                        <div><ConcertCardDeck/></div>
                    </InfiniteScroll>
                    
                    </div>

                </div>

            </div>
                
        </div>
    );
}

export default programmationPage;
