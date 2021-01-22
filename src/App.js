import './App.css';
import NavBar from './compnent/navbar/navbar.js'
import Footer from './compnent/footer/footer.js'
import Home from './compnent/home/home.js'
import Contact from './compnent/contact/contact.js'
import Cgu from './compnent/cgu/cgu.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LegalNotices from './compnent/legalNotices/legalNotices';
import PresentationRestoration from './compnent/restoration/presentation';
import Parking from './compnent/parking/presentation.js';

function App() {
  return (



    <div>


      <Router forceRefresh={true}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cgu" component={Cgu} />
          <Route exact path="/legalNotices" component={LegalNotices} />
          <Route exact path="/presentationRestoration" component={PresentationRestoration} />
          <Route exact path="/parking" component={Parking} />

          <Route path="/" component={() => <div>ERREUR 404</div>} />
        </Switch>
        <Footer />
      </Router>

    </div>



  );
}



export default App;
