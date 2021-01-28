// List concert

import axios from "axios";
import { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './listConcert.css';

function AdminConcertList() {

    //react Hook useState
    let [concerts, setConcerts] = useState([])
    //react Hook useEffect
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/test')
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

            <Table striped hover rounded className="w-75 mx-auto">                <thead>
                <tr>
                    <td>Id</td>
                    <td>Nom</td>
                    {/* <td>Artiste</td>
                    <td>Lieu</td>
                    <td>Date</td>
                    <td>etc</td> */}
                </tr>
            </thead>
                {/* <tbody>
                    {concerts.map(concert => (
                        //L'attribut key est obligatoire pour le dataBinding
                        <tr key={concert.username}>
                            <td>{concert.email}</td>
                            <td>{concert.id}</td>
                            <td>{concert.id}</td>
                            <td>{concert.name}</td>
                            <td>{concert.number}</td>
                            <td>{concert.price.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody> */}
            </Table>
        </Card>
    );
}

export default AdminConcertList;