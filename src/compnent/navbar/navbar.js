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
<<<<<<< HEAD
=======
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

>>>>>>> 79947b6 (redesign 1)

function NavBar() {
  return (

    <Navbar bg="light" expand="lg" className="fondNavbar">
      <Navbar.Brand href="#home">
        <img
          src={logo}
<<<<<<< HEAD
          width="70"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
=======
          
          className="d-inline-block align-top ml-5 mr-3 navbar__logo"
          alt="SNRK" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="navbar navbar-expand-sm bg-light justify-content-center">
        <Nav className="mr-auto align-items-center">
>>>>>>> 79947b6 (redesign 1)
          <div className="container">
            <div className="row">
              <div className="col-sm">
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
              <div className="col-sm">
                <NavDropdown title="Restauration" id="basic-nav-dropdown">
                  <NavDropdown.Item href="presentationRestoration">Présentation</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Réserver</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="col-sm">
                <NavDropdown title="Parking" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Présentation</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Réserver</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="col-sm">
                <NavDropdown title="Privatisation" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Présentation</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Réserver</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="col-sm">
                <NavDropdown title="Infos pratiques" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Comment venir</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="col-sm">
                <Nav.Link href="contact" >Contact</Nav.Link>
              </div>
<<<<<<< HEAD
              <div className="ml-1">
                <Nav.Link href="#" >Connexion / Inscription</Nav.Link>
              </div>
            </div>
            {/* <div class="row"> */}
            {/* <div class="col-sm"> */}
            <Form inline className="formSearch">
              <FormControl type="text" placeholder="Search" className="mr-sm-2 w-50" />
              <Button variant="outline-success" className="searchButton">Search</Button>
            </Form>
=======
              <div className="ml-0">
                <Nav.Link href="#" >Connexion / Inscription</Nav.Link>
              </div>
              <div className="ml-0">
                <Nav.Link href="#" ><ShoppingBasketIcon /></Nav.Link>
              </div>
              
              
            </div>
            {/* <div class="row  w-100"> */}
            {/* <div class="col-sm"> */}
            <center>
              <div class="input-group ">
                
              <input type="search" class="form-control rounded " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <span class="input-group-text border-0" id="search-addon"><SearchIcon className="sidebarRow__icon"/>
  
              </span>
              </div>
              {/* display: flex;
    align-items: center; */}
              {/* <Form inline className="formSearch">
              <FormControl type="text" placeholder="Search" className="mr-sm-2 w-50" />
              <Button variant="outline-success" className="searchButton">Search</Button>
            </Form> */}
            </center>
            
>>>>>>> 79947b6 (redesign 1)
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavBar;