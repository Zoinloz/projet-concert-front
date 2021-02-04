import './footer.css';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import instagram from '../../logo/instagram.png'
import facebook from '../../logo/facebook.png'
import twitter from '../../logo/twitter.jpg'
import youtube from '../../logo/youtube.png'

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Footer() {
  return (

    <div className="main-footer">

      {/* RESEAUX SOCIAUX ET NEWSLETTERS */}
      <div className="container mb-4">
        <div className="row ml-5">
          {/* RESEAUX SOCIAUX */}
          <div className="col mt-4 col-xs-1">
            <h5 className="centerNewsReseau">Réseaux sociaux</h5>
            <p className="text-xs centerNewsReseau w-50 mx-auto">Suivez-nous pour
            vous tenir informé des concerts à venir !
            </p>
            <div className="socialIcons text-center">
              <div 
                  width="36"
                  height="36"
                  className="d-inline-block align-top m-2"
                  alt="Facebook">
                  <FacebookIcon />
                </div>

                <div 
                  width="36"
                  height="36"
                  className="d-inline-block align-top m-2"
                  alt="Facebook">
                    <InstagramIcon/>
                </div>

                <div 
                width="36"
                height="36"
                className="d-inline-block align-top m-2"
                alt="Facebook">
                  <TwitterIcon/>
                </div>

              <div 
                width="36"
                height="36"
                className="d-inline-block align-top m-2"
                alt="Facebook">
                  <YouTubeIcon/>
              </div>
            </div>
          </div>
          {/* NEWSLETTER */}
          <div className="col mt-4 col-xs-1">
            <h5 className="centerNewsReseau">Newsletter</h5>
            <p className="text-xs centerNewsReseau w-50 mx-auto">Recevez notre newsletter pour ne
              manquer aucune information</p>
            <Form inline className="formNewsletter">
              <FormControl type="text" placeholder="exemple@exemple.com" className="mr-sm-2" />
              <Button variant="outline-light buttonNewsletter">Valider</Button>
            </Form>
          </div>
        </div>
      </div>

      {/* INFORMATIONS */}
      <div className="container">
        <div className="row ml-5">
          {/* COLUMN 1 */}
          <div className="col-md col-sm mt-4 borderColumn">
            {/* <div className="col-md-3 col-sm-6"> */}
            <h6>PROGRAMMATION</h6>
            <ul className="list-unstyled">            
              <li><Link className="footer__link" to="/tous-les-evenements">Tous les évènements</Link></li>
              <li><Link className="footer__link" to="/ville-aix-en-provence">Aix-en-Provence</Link></li>
              <li><Link className="footer__link" to="/ville-bourges">Bourges</Link></li>
              <li><Link className="footer__link" to="/ville-cannes">Cannes</Link></li>
              <li><Link className="footer__link" to="/ville-dunkerque">Dunkerque</Link></li>
              <li><Link className="footer__link" to="/ville-echirolles">Echirolles</Link></li>
              <li><Link className="footer__link" to="/comment-reserver">Comment réserver ?</Link></li>
            </ul>
          </div>
          {/* COLUMN 2 */}
          <div className="col-md col-sm mt-4 borderColumn">
            <h6>RESTAURATION</h6>
            <ul className="list-unstyled">
              <li><Link className="footer__link" to="/restauration-presentation">Présentation</Link></li>
              <li><Link className="footer__link" to="/restauration-reserver">Réserver</Link></li>
            </ul>
            <h6>PARKING</h6>
            <ul className="list-unstyled">
              <li><Link className="footer__link" to="/parking-presentation">Présentation</Link></li>
              <li><Link className="footer__link" to="/parking-reserver">Réserver</Link></li>
            </ul>
          </div>
          {/* COLUMN 3 */}
          <div className="col-md col-sm mt-4 borderColumn">
            <h6>PRIVATISATION</h6>
            <ul className="list-unstyled">
              <li><Link className="footer__link" to="/privatisation-presentation">Présentation</Link></li>
              <li><Link className="footer__link" to="/privatisation-reserver"> Réserver</Link></li>
            </ul>
            <h6>ACTUALITES</h6>
          </div>
          {/* COLUMN 4 */}
          <div className="col-md col-sm mt-4 borderColumn">
            <h6>INFOS PRATIQUES</h6>
            <ul className="list-unstyled">
              <li>Comment venir ?</li>
              <li>FAQ</li>
            </ul>
            <h6>CONTACT</h6>
          </div>
          {/* COLUMN 5 */}
          <div className="col-md col-sm mt-4">
            <h6>POLITIQUES</h6>
            <h6><a href="cgu" className="noStyleLink">CGU</a></h6>
            <ul className="list-unstyled">
              <li><a href="legalNotices" className="noStyleLink">Mentions légales</a></li>
            </ul>
          </div>

        </div>
        {/* footer bottom */}
        <div className="footer-bottom mt-4">
          <p className="text-xs-center copyright mb-0">&copy;{new Date().getFullYear()} - SNRK - Tous droits réservés </p>
        </div>
      </div>

    </div>
  );
}

export default Footer;