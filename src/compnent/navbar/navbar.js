import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import logo from '../../logo/logo_projet_concert.png'

function NavBar() {
  return (

  <Navbar bg="light" expand="lg" className="fondNavbar">
  <Navbar.Brand href="#home"> 
  <img
        src={logo}
        width="70"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  

   
    <Nav className="mr-auto">
    <div class="container">
  <div class="row">
    <div class="col-sm">
    





      <NavDropdown title="Programmation" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Tous les évènements</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Aix-en-Provence</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Bourges</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Cannes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Dunkerque</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Echirolles</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Comment réserver ?</NavDropdown.Item>
      </NavDropdown>
      </div>
      <div class="col-sm">
      <NavDropdown title="Restauration" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Présentation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Réserver</NavDropdown.Item>
      </NavDropdown>
      </div>
      <div class="col-sm">
      <NavDropdown title="Parking" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Présentation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Réserver</NavDropdown.Item>
      </NavDropdown>
      </div>
      <div class="col-sm">
      <NavDropdown title="Privatisation" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Présentation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Réserver</NavDropdown.Item>
      </NavDropdown>
      </div>
      <div class="col-sm">
      <NavDropdown title="Infos pratiques" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Comment venir</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
      </NavDropdown>
      </div>
      <div class="col-sm">
      <Nav.Link href="contact" >Contact</Nav.Link>
      </div>
      <div class="col-sm-8" >
      <Nav.Link href="#home" className="loginLink">Se connecter / S'inscrire</Nav.Link>
      </div>
  </div>
      <div class="row">
    <div class="col-sm">
    
    <Form inline className="test">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
      
    
    </div>
  </div>
    </div>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>

  );
}

export default NavBar;