import './App.css';
import NavBar from './compnent/navbar/navbar.js'
import Footer from './compnent/footer/footer.js'
import Home from './compnent/home/home.js'
import Contact from './compnent/contact/contact.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (



    <div>
   
   
    <Router forceRefresh={true}>
    <NavBar />
     <Switch>
        <Route exact path="/"  component={Home}/>
         <Route exact path="/contact"  component={Contact}/>
         <Route path="/" component={() => <div>ERREUR 404</div>} />
      </Switch>
        <Footer />
  </Router>

    </div>

   

  );
}



export default App;
