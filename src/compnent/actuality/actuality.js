import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import React, { useEffect, useState } from 'react';

import './actuality.css';



const Actuality = () => {

    let [articles, setArticle] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/articles')
            .then(response => {
                console.log(response.data);
                setArticle(response.data);
            }
            )
            .catch((error) => { console.log(error) })
    }, []);


    return (
        <div className="test">


            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h3" className="titleCard text-center">
                    Actualités
        </Card.Header>
                <Card.Body>

                    {articles.map(article => (
                        <Card className="my-4 shadow bg-white rounded text-justify" inline>
                            <Card.Title className="shadow rounded text-center titleActualy">{article.title}</Card.Title>

                            {/* <Card.Header className="titleCard text-center">{article.title}</Card.Header> */}
                            <Card.Body>
                                <Card.Text >
                                    {article.text}
                                </Card.Text>
                            </Card.Body>


                        </Card>

                    ))}



                </Card.Body >
            </Card >





        </div>



    );
}

export default Actuality;