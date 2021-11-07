import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/About/AboutUs';
import Contact from './Components/Contact/Contact';
 import AuthProvider from './Components/Context/AuthProvider';
import Doctors from './Components/Doctors/Doctor/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import ServicesDetail from './Components/Home/ServicesDetail/ServicesDetail';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
           <Switch>
            <Route exact path="/">
              <Home></Home>
              </Route>
            <Route path="/home">
              <Home></Home>
               <AboutUs></AboutUs>
             </Route>
            <Route path='/Contact'>
        <Contact></Contact> 
              </Route>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/login">
               <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
              </Route>
            <PrivateRoute  path="/services/:detail">
              <ServicesDetail></ServicesDetail>
               </PrivateRoute>  
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
