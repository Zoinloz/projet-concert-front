import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import React, { useState } from 'react';
import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import logo from '../../logo/logo_projet_concert.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import AuthContext from '../../context/AuthContext';
import AuthApi from '../../services/authApi';


// function NavBar() {
const NavBar = ({ history }) => {

  // const { isAuth } = useContext(AuthContext);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { isAdmin } = useContext(AuthContext);



  const handleLogout = () => {
    AuthApi.logout();
    setIsAuth(false);
    history.push('/login');
  }

  //Déclaration de variables pour hover navbar
  const [showProgram, setShowProgram] = useState(false);
  const [showRestaurant, setShowRestaurant] = useState(false);
  const [showParking, setShowParking] = useState(false);
  const [showPrivatisation, setShowPrivatisation] = useState(false);
  const [showInfos, setShowInfos] = useState(false);

  // Affichage NavDropItem pour Programmation
  const showDropdownProgram = (eProgrammation) => {
    setShowProgram(!showProgram);
  }
  const hideDropdownProgram = eProgrammation => {
    setShowProgram(false);
  }

  // Affichage NavDropItem pour Restauration
  const showDropdownRestaurant = (eRestaurant) => {
    setShowRestaurant(!showRestaurant);
  }
  const hideDropdownRestaurant = eRestaurant => {
    setShowProgram(false);
  }

  // Affichage NavDropItem pour Parking
  const showDropdownParking = (eParking) => {
    setShowParking(!showParking);
  }
  const hideDropdownParking = eParking => {
    setShowParking(false);
  }

  // Affichage NavDropItem pour Privatisation
  const showDropdownPrivatisation = (ePrivatisation) => {
    setShowPrivatisation(!showPrivatisation);
  }
  const hideDropdownPrivatisation = ePrivatisation => {
    setShowPrivatisation(false);
  }

  // Affichage NavDropItem pour Infos
  const showDropdownInfos = (eInfos) => {
    setShowInfos(!showInfos);
  }
  const hideDropdownInfos = eInfos => {
    setShowInfos(false);
  }



  return (
    <div>


      <div className="header__style">

        <Navbar bg="light" expand="lg" className="fondNavbar">

          <Navbar.Brand href="/">
            <img
              src={logo}
              className="d-inline-flex align-top ml-5 mr-3 navbar__logo"
              alt="SNRK"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="m-auto">

              <Link className="footer__link" to="/tous-les-evenements"></Link>
              <NavDropdown href="/programmation" show={showProgram} onMouseEnter={showDropdownProgram} onMouseLeave={hideDropdownProgram} title="Programmation" id="basic-nav-dropdown">
                <NavDropdown.Item href="/programmation">Tous les évènements</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">Aix-en-Provence</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Bourges</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Cannes</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Dunkerque</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Echirolles</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Comment réserver ?</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown show={showRestaurant} onMouseEnter={showDropdownRestaurant} onMouseLeave={hideDropdownRestaurant} title="Restauration" id="basic-nav-dropdown">
                <NavDropdown.Item href="presentationRestoration">Présentation</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">Réserver</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown show={showParking} onMouseEnter={showDropdownParking} onMouseLeave={hideDropdownParking} title="Parking" id="basic-nav-dropdown">
                <NavDropdown.Item href="/parking">Présentation</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">Réserver</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown show={showPrivatisation} onMouseEnter={showDropdownPrivatisation} onMouseLeave={hideDropdownPrivatisation} title="Privatisation" id="basic-nav-dropdown">
                <NavDropdown.Item href="/presentationPrivatisation">Présentation</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">Réserver</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/actuality" >Actualités</Nav.Link>

              <NavDropdown show={showInfos} onMouseEnter={showDropdownInfos} onMouseLeave={hideDropdownInfos} title="Infos pratiques" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Comment venir</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/contact" >Contact</Nav.Link>
              {
                (isAuth && isAdmin()) && (
                  <NavDropdown title="Admin" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/admin/ListConcert">Liste des concerts</NavDropdown.Item>

                    <NavDropdown.Item href="/admin/addConcert">Créer un concert</NavDropdown.Item>
                  </NavDropdown>
                )
              }

            </Nav>

            <Nav>
              {!isAuth && (
                <Nav.Link href="/login" >Mon compte / Crée un compte</Nav.Link>
              )
                ||
                (
                  <Nav.Link onClick={handleLogout} href="#" >Déconnexion</Nav.Link>

                )
              }
              < Nav.Link className="ml-3 mr-5" href="/reservationpage" ><ShoppingBasketIcon /></Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Navbar>

        <Navbar bg="light" expand="lg" className="fondNavbar">
          <div className="d-flex justify-content-center w-50 m-auto">
            <InputGroup className="mb-5">
              <InputGroup.Prepend>
                <Button variant="outline-secondary"><SearchIcon style={{ fontSize: 20 }} /></Button>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="basic-addon1 inputGroup-sizing-sm-6" />
            </InputGroup>
          </div>
        </Navbar>

      </div>

    </div >

  );
}

export default NavBar;