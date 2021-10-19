 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/About/AboutUs';
import AuthProvider from './Components/Context/AuthProvider';
  import Doctors from './Components/Doctors/Doctor/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import ServicesDetail from './Components/Home/ServicesDetail/ServicesDetail';
import NotFound from './Components/NotFound/NotFound';
 
function App() {
  return (
    <div>
   <AuthProvider> 
   <Router>
       <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home> 
        </Route>
        <Route path="/aboutUs">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/doctors">
          <Doctors></Doctors>
            </Route>
            <Route path="/services/:detail">
                <ServicesDetail></ServicesDetail>
             </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
     </Switch>
     <Footer></Footer>
     </Router>
   </AuthProvider>
       </div>
  );
}

export default App;
