import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './listConcert.css';
import React, { useEffect, useState } from 'react';
import concertApi from '../../services/concertApi';

function AdminConcertList() {

    //react Hook useState map : pour les array pas JSON
    const [allConcerts, setAllConcert] = useState(null);

    //react Hook useEffect
    useEffect(async () => {
        try {
            const concerts = await concertApi.findAll();
            setAllConcert(concerts);
        } catch (error) {
            console.log(error)
        }
    }, [])

    // FORMATAGE DATE
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        console.log(date);
        return date.toLocaleDateString('fr-FR', options)
    }

    // FORMATAGE HEURE
    const formatTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleTimeString('fr-FR')
    }



    return (
        allConcerts ? (
            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h4" className="titleCard text-center">
                    Administration - Liste des concerts
      </Card.Header>
                <div className="mx-auto my-4">
                    <Button className="addConcert mx-2 p-3" href="/admin/addConcert">+ Ajouter un concert</Button>
                </div>

                <Table striped hover rounded className="px-5">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Nom de l'artiste /Groupe</td>
                            <td>Nom du concert</td>
                            <td>Date et heure</td>
                            <td>Lieu</td>
                            <td>Catégorie de musique</td>
                            <td>Catégorie de tarif</td>
                            <td>Heure d'ouverture</td>
                            <td>Présentation de l'article</td>
                            <td>Player audio</td>


                        </tr>
                    </thead>
                    <tbody>
                        {allConcerts.map(concert => (
                            //L'attribut key est obligatoire pour le dataBinding
                            <tr key={concert.id}>
                                <td>{concert.id}</td>
                                <td>{concert.event.artistName}</td>
                                <td>{concert.event.name}</td>
                                <td>{formatDate(concert.date)} à {formatTime(concert.time)} heures</td>
                                <td>{concert.event.salle.city}</td>
                                <td>{(concert.event.categories.length > 0) ? concert.event.categories[0].name : 'Aucune catégorie'}</td> {/* A voir pour change */}
                                <td>{concert.categoryNumber}</td>
                                <td>{formatTime(concert.openingTime)}</td>
                                <td>Présentation de l'article</td>
                                <td>Player audio</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        ) :
            (
                <p>WAIT</p>
            )
    );
}

export default AdminConcertList;