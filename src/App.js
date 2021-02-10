import './App.css';
import NavBar from './compnent/navbar/navbar.js'
import Footer from './compnent/footer/footer.js'
import Home from './compnent/home/home.js'
import Contact from './compnent/contact/contact.js'
import Cgu from './compnent/cgu/cgu.js'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import LegalNotices from './compnent/legalNotices/legalNotices';
import PresentationRestoration from './compnent/restoration/presentation';
import PresentationPrivatisation from './compnent/privatisation/presentation';
import ReservationPrivatisation from './compnent/privatisation/reservation';
import ConcertPoster from './compnent/programmation/concertPoster';
import Login from "./compnent/login/login";
import Register from './compnent/register/register';
import ShoppingCartStepTwo from "./compnent/reservation/shoppingCart";
import ContactInformationStepThree from './compnent/reservation/contactInformations';
import PaymentStepFour from './compnent/reservation/payment';
import ConfirmationStepFive from './compnent/reservation/confirmation';
import ReservationPage from './compnent/reservation/ReservationPage';
import UserLoggedReservationStepThree from './compnent/reservation/reservationUserLog';
import Programmation from './compnent/programmation/programmation';
import Parking from './compnent/parking/presentation';

import AdminConcertList from './compnent/administrator/listConcert';
import AdminConcertAdd from './compnent/administrator/addConcert';
import Programation from './compnent/programmation/concertPoster';

import Actuality from './compnent/actuality/actuality';
import AuthApi from './services/authApi';
import AuthContext from './context/AuthContext';
import { useState } from 'react';

import PrivateRoute from './compnent/PrivateRoute/PrivateRoute';

AuthApi.init();

function App() {
  const [isAuth, setIsAuth] = useState(AuthApi.isAuth());

  const NavbarRouter = withRouter(NavBar);

  const contextValue = {
    isAuth,
    setIsAuth,
    isAdmin: AuthApi.isAdmin,
  }

  return (

    <div>

      <AuthContext.Provider value={contextValue}>

        <Router forceRefresh={true}>
          <NavbarRouter />

          <Switch>

            <Route exact path="/" component={Home} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/parking" component={Parking} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cgu" component={Cgu} />
            <Route exact path="/legalNotices" component={LegalNotices} />
            <Route exact path="/presentationRestoration" component={PresentationRestoration} />
            <Route exact path="/presentationPrivatisation" component={PresentationPrivatisation} />
            <Route exact path="/reservationPrivatisation" component={ReservationPrivatisation} />
            <Route exact path="/actuality" component={Actuality} />


            <Route exact path="/concertPoster/:id" component={ConcertPoster} />
            <Route exact path="/programmation" component={Programmation} />

            {/* <Route exact path="/admin/addConcert" component={AdminConcertList} /> */}
            <PrivateRoute admin='true' path='/admin/ListConcert' component={AdminConcertList} />
            <PrivateRoute admin='true' path='/admin/addConcert' component={AdminConcertAdd} />

            {/* <PrivateRoute path='/shoppingCart' component={ShoppingCartStepTwo} />
            <PrivateRoute path='/contactInformation' component={ContactInformationStepThree} />
            <PrivateRoute path='/informationsUserLogged' component={UserLoggedReservationStepThree} />
            <PrivateRoute path='/payment' component={PaymentStepFour} />
            <PrivateRoute path='/confirmation' component={ConfirmationStepFive} /> */}

            <Route exact path="/reservationpage" component={ReservationPage} />


            {/* <Route exact path="/reservationStepOne" component={ReservationStepOne} />  */}
            <Route exact path="/shoppingCart" component={ShoppingCartStepTwo} />
            <Route exact path="/contactInformation" component={ContactInformationStepThree} />
            <Route exact path="/informationsUserLogged" component={UserLoggedReservationStepThree} />
            <Route exact path="/payment" component={PaymentStepFour} />
            <Route exact path="/confirmation" component={ConfirmationStepFive} />


          </Switch>
          <Footer />
        </Router>
      </AuthContext.Provider>

    </div>



  );
}



export default App;
