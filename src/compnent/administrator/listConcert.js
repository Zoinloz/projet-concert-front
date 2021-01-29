// List concert

import axios from "axios";
import { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './listConcert.css';

function AdminConcertList() {

    //react Hook useState map : pour les array pas JSON
    let [allConcerts, setConcerts] = useState({
        events: []
    })
    //react Hook useEffect
    useEffect(() => {
        // axios.get('http://127.0.0.1:8000/concert')
        axios.get('http://127.0.0.1:8000/event/search')

            .then(response => {
                console.log(response.data);
                setConcerts(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);

    return (
        <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
            <Card.Header as="h4" className="titleCard text-center">
                Administration - Liste des concerts
      </Card.Header>
            <div className="mx-auto my-4">
                <Button className="addConcert mx-2 p-3" href="#">+ Ajouter un concert</Button>
            </div>

            <Table striped hover rounded className="w-75 mx-auto">
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
                    {allConcerts.events.map(concert => (
                        //L'attribut key est obligatoire pour le dataBinding
                        <tr key={concert.id}>
                            <td>{concert.id}</td>
                            <td>{concert.artistName}</td>
                            <td>Nom du concert</td>
                            <td>{concert.concerts[0].date}{concert.concerts[0].time}</td>
                            <td>{concert.salle.city}</td>
                            <td>catégorie de musique</td>
                            <td>{concert.concerts[0].time}</td>
                            <td>{concert.concerts[0].openingTime}</td>
                            <td>Présentation de l'article</td>
                            <td>Player audio</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
}

export default AdminConcertList;