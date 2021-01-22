
import aixSalle from '../../logo/ledome-marseille-concert-musique-spectacle.jpg'
import bourgesSalle from '../../logo/salle-de-concert.jpg'
import echirollesSalle from '../../logo/salle-echirolles.jpg'
// import dunkerqueSalle from '../../logo/salle-dunkerque.jpg'
// import cannesSalle from '../../logo/salle-cannes.jpg'
import React from 'react';
import Slide from 'react-slideshow-image'

import './home.css';

const proprietes = {

}

const Home = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="col-sm">
          <Slide {...proprietes}>

            <div className="each-slide">
              <div>
                <img src={aixSalle} alt="img" />
              </div>
            </div>

            <div className="each-slide">
              <div>
                <img src={bourgesSalle} alt="img" />
              </div>
            </div>

            <div className="each-slide">
              <div>
                <img src={echirollesSalle} alt="img" />
              </div>
            </div>

          </Slide>

        </div>
      </div>

    </div>


  );
}

export default Home;