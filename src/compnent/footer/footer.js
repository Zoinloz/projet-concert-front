import './footer.css';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function Footer() {
    return (
  
      <div className="main-footer">

        {/* RESEAUX SOCIAUX ET NEWSLETTERS */}
        <div className="container mb-4">
          <div className="row ml-5">
            {/* RESEAUX SOCIAUX */}
            <div className="col mt-4">
              <h5 className="centerNewsReseau">Réseaux sociaux</h5>
              <p className="text-xs centerNewsReseau w-50 mx-auto">Suivez-nous pour
                vous tenir informé des concerts à venir ! 
              </p>
            </div>
            {/* NEWSLETTER */}
            <div className="col mt-4">
              <h5 className="centerNewsReseau">Newsletter</h5>
              <p className="text-xs centerNewsReseau w-50 mx-auto">Recevez notre newsletter pour ne
              manquer aucune information</p>
              <Form inline className="formNewsletter">
                <FormControl type="text" placeholder="exemple@exemple.com" className="mr-sm-2" />
                <Button variant="outline-success buttonNewsletter">Search</Button>
              </Form>
            </div>
          </div>
        </div>

        {/* INFORMATIONS */}
        <div className="container">
          <div className="row ml-5">
            {/* COLUMN 1 */}
            <div className="col-md-2 col-sm-4 mt-4 borderColumn">
            {/* <div className="col-md-3 col-sm-6"> */}
              <h6>PROGRAMMATION</h6>
              <ul className="list-unstyled">
                <li>Tous les évènements</li>
                <li>Aix-en-Provence</li>
                <li>Bourges</li>
                <li>Cannes</li>
                <li>Dunkerque</li>
                <li>Echirolles</li>
                <li>Comment réserver ? </li>
              </ul>
            </div>
            {/* COLUMN 2 */}
            <div className="col-md-2 col-sm-4 mt-4 borderColumn">
              <h6>RESTAURATION</h6>
              <ul className="list-unstyled">
                <li>Présentation</li>
                <li>Réserver</li>
              </ul>
              <h6>PARKING</h6>
              <ul className="list-unstyled">
                <li>Présentation</li>
                <li>Réserver</li>
              </ul>
            </div>
            {/* COLUMN 3 */}
            <div className="col-md-2 col-sm-4 mt-4 borderColumn">
              <h6>PRIVATISATION</h6>
              <ul className="list-unstyled">
                <li>Présentation</li>
                <li>Réserver</li>
              </ul>
              <h6>ACTUALITES</h6>
            </div>
            {/* COLUMN 4 */}
            <div className="col-md-2 col-sm-4 mt-4 borderColumn">
              <h6>INFOS PRATIQUES</h6>
              <ul className="list-unstyled">
                <li>Comment venir ?</li>
                <li>FAQ</li>
              </ul>
              <h6>CONTACT</h6>
            </div>
            {/* COLUMN 5 */}
            <div className="col-md-2 col-sm-4 mt-4">
              <h6>POLITIQUES</h6>
              <h6>CGU</h6>
              <ul className="list-unstyled">
                <li>Mentions légales</li>
              </ul>
            </div>

          </div>
          {/* footer bottom */}
          <div className="footer-bottom mt-4">
            <p className="text-xs-center copyright">&copy;{new Date().getFullYear()} - SNRK - Tous droits réservés </p>
          </div>
        </div>
      
      </div>
    );
  }
  
  export default Footer;