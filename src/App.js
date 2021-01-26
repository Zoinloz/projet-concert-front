import './App.css';
import NavBar from './compnent/navbar/navbar.js'
import Footer from './compnent/footer/footer.js'
import Home from './compnent/home/home.js'
import Contact from './compnent/contact/contact.js'
import Cgu from './compnent/cgu/cgu.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LegalNotices from './compnent/legalNotices/legalNotices';
import PresentationRestoration from './compnent/restoration/presentation';
import ConcertPage from './compnent/concertPage/concertPage'
import ConcertCard from "./asset/ConcertCard";
import ConcertCardDeck from "./asset/ConcertCardDeck";
import programmationPage from './compnent/programmationPage/programmationPage';


function App() {
  return (



    <div>


      <Router forceRefresh={true}>
        <NavBar />

        <Switch>
          
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cgu" component={Cgu} />
          <Route exact path="/legalNotices" component={LegalNotices} />
          <Route exact path="/presentationRestoration" component={PresentationRestoration} />
          <Route exact path="/concertPage" component={ConcertPage} />
          <Route exact path="/programmationPage" component={programmationPage} />

          <Route exact path="/" component={Home} />

        </Switch>
        <Footer />
      </Router>

    </div>



  );
}



export default App;
