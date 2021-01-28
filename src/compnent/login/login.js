import './login.css';
import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthContext from '../../context/AuthContext';
import AuthApi from '../../services/authApi';


// function Login() {
const Login = ({ history }) => {
    const { setIsAuth } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState("")

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setCredentials({ ...credentials, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await AuthApi.auth(credentials);
            setError("");
            setIsAuth(true);
            history.replace('/admin/ListConcert')
        } catch (errorRequest) {
            setError('error de login')
        }


        console.log(credentials);
    }
    // function Login() {

    return (
        <div>
            <Card className="w-50 mx-auto my-4 shadow-lg bg-white rounded" inline>
                <Card.Header as="h3" className="titleCard">Connectez-vous</Card.Header>
                <Card.Body>
                    <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={credentials.username}
                                onChange={handleChange} type="email" placeholder="Email" name="username"
                                id="username"
                                className={"form-control" + (error && " is-invalid")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control value={credentials.password}
                                onChange={handleChange} type="password" placeholder="Password" name="password"
                                id="password" />
                        </Form.Group>
                        <div>
                            <Button type="submit" className="buttonLogin mb-2">
                                Se connecter
                        </Button>
                        </div>
                        <Button href="/register" className="buttonRegister">Pas de compte ? <strong>Inscrivez vous !</strong></Button>
                    </Form>

                </Card.Body>

            </Card>
        </div>






    );
}


export default Login;