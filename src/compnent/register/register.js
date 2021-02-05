import './register.css';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import AuthApi from '../../services/authApi';


// DECOMMENTER LES LIGNES QUAND LE BACK EST OK


// function Register(props) {
const Register = ({ history }) => {

    // const [data, setData] = useState(
    //     { email: '', password: ''}) //FONCTIONNE

    const [data, setData] = useState({
        email: '', password: '', firstName: '', lastName: '', address: '', residence: '', locality: '', zipCode: '', city: '', country: '', phoneNumber: ''
    })
    const [genders, setGender] = useState({
        gender: ''
    });

    // const [birthDate, setBirthDate] = useState({
    //     birthDate: ''
    // })
    const [birthDate, setBirthDate] = useState('');

    // ONCHANGE
    const onChange = (e) => {
        e.persist();
        // debugger;
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const onChangeCivility = (e) => {
        console.log(e.target.value);
        setGender({ ...genders, gender: e.target.value });
        console.log(e.target.value);
        // console.log(genders);
    }

    const onChangeDate = (e) => {
        console.log(e.target.value)
        setBirthDate(e.target.value)
    }


    // ONSUBMIT
    const registration = async (event) => {
        event.preventDefault();
        // const dataInput = { email: data.email, password: data.password };
        const dataInput = {
            email: data.email, password: data.password, firstName: data.firstName, lastName: data.lastName, address: data.address, residence: data.residence, locality: data.locality, zipCode: data.zipCode, city: data.city, country: data.country, phoneNumber: data.phoneNumber, birthDate: birthDate, gender: genders.gender
        }
        axios.post("http://localhost:8000/register", dataInput)
            .then((result) => {
                console.log(result.data);
                console.log(result.gender);
                // console.log(civilityRadio.selectedOption)
                if (result.data.Status === 'Invalid')
                    alert('Invalide User');
                else
                    // props.history.replace('/login');
                    // AuthApi.auth({
                    //     username: data.email,
                    //     password: data.password,
                    // });
                    history.push('/login')
            })

    }

    return (
        <div>
            <Card className="w-50 mx-auto my-4 shadow-lg bg-white rounded" inline>
                <Card.Header as="h3" className="titleCard">Inscrivez-vous</Card.Header>
                <Card.Body>
                    <Form className="w-50 mx-auto" onSubmit={registration}>
                        <Form.Group controlId="formRegisterEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control name="email" onChange={onChange} value={data.email} type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterEmailConfirmation">
                            <Form.Label>Confirmation Email*</Form.Label>
                            <Form.Control name="emailConfirmation" type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterPassword">
                            <Form.Label>Mot de passe*</Form.Label>
                            <Form.Control name="password" onChange={onChange} value={data.password} type="password" placeholder="Password" required />
                            <Form.Text className="text-muted">
                                Votre mot de passe doit comprendre au moins 8 caractères, une lettre
                                majuscule, une lettre minuscule et un chiffre (0-9).
                            </Form.Text>
                        </Form.Group>



                        <Form.Group controlId="formRegisterPasswordConfirmation">
                            <Form.Label>Confirmation de mot de passe *</Form.Label>
                            <Form.Control name="passwordConfirmation" type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterCivilite">
                            <Form.Label className="mr-3">Civilité* : </Form.Label>
                            <Form.Check
                                inline
                                type="radio"
                                label="Madame"
                                value="F"
                                name="gender"
                                // checked={genders === "F"}
                                onChange={onChangeCivility}
                            // onClick={() => setGender('F')}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Monsieur"
                                name="gender"
                                value="M"
                                // checked={genders === "M"}
                                // onClick={() => setGender('M')}
                                onChange={onChangeCivility}
                            />
                        </Form.Group>
                        <Form.Group controlId="formRegisterName">
                            <Form.Label>Nom*</Form.Label>
                            <Form.Control name="lastName" onChange={onChange} value={data.lastName} type="text" placeholder="Nom" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterFirstName">
                            <Form.Label>Prénom*</Form.Label>
                            <Form.Control name="firstName" onChange={onChange} value={data.firstName} type="text" placeholder="Prénom" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterVoie">
                            <Form.Label>N° et libellé de la voie*</Form.Label>
                            <Form.Control name="address" onChange={onChange} value={data.address} type="text" placeholder="N°" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterResidence">
                            <Form.Label>Immeuble, Bâtiment, Résidence</Form.Label>
                            <Form.Control name="residence" onChange={onChange} value={data.residence} type="text" placeholder="Résidence" />
                        </Form.Group>
                        <Form.Group controlId="formRegisterLieuDit">
                            <Form.Label>Lieu-dit, boite postale, etc</Form.Label>
                            <Form.Control name="locality" onChange={onChange} value={data.locality} type="text" placeholder="..." />
                        </Form.Group>
                        <Form.Group controlId="formRegisterPostcode">
                            <Form.Label>Code postale*</Form.Label>
                            <Form.Control name="zipCode" onChange={onChange} value={data.zipCode} type="text" placeholder="code postale" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterCity">
                            <Form.Label>Ville*</Form.Label>
                            <Form.Control name="city" onChange={onChange} value={data.city} type="text" placeholder="Ville" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterCountry">
                            <Form.Label>Pays*</Form.Label>
                            <Form.Control name="country" onChange={onChange} value={data.country} type="text" placeholder="Pays" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterPhone">
                            <Form.Label>Téléphone*</Form.Label>
                            <Form.Control name="phoneNumber" onChange={onChange} value={data.phoneNumber} type="text" placeholder="0000000000" required />
                        </Form.Group>
                        <Form.Group controlId="formRegisterBirthday">
                            <Form.Label>Date de naissance*</Form.Label>
                            <Form.Control name="birthdayDate" onChange={onChangeDate} value={birthDate} type="date" name="formRegisterBirthday" required />
                        </Form.Group>

                        <Button type="submit" className="buttonRegisterValidation mb-2 w-50">
                            S'inscrire
                        </Button>
                    </Form>

                </Card.Body>

            </Card>
        </div>






    );
}


export default Register;