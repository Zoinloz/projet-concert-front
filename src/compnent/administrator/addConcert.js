// List concert

import axios from "axios";
import { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './listConcert.css';

function AdminConcertAdd() {

    //react Hook useState
    let [concerts, setConcerts] = useState([])
    //react Hook useEffect
    useEffect(() => {
        axios.get('')
            .then(response => {
                console.log(response.data);
                setConcerts(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);

    return (
        <Card className="mx-auto my-4 shadow-lg bg-white rounded testCard" style={{width:"90%"}}>
            <Card.Header as="h4" className="titleCard text-center">
                Administration - Liste des concerts
      </Card.Header>
            <div className="mx-auto my-4">
                <Button className="addConcert mx-2 p-3" href="#">+ Ajouter un concert</Button>
            </div>

            
        </Card>
    );
}

export default AdminConcertAdd;