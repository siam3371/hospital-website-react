import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuthContext from '../Hooks/UseAuthContext';
  import './Header.css'
 
const Header = () => { 
  const {user, logOut} = UseAuthContext()
       return ( 
<div>
<>
{/* heder start */}
  <Navbar bg="dark" variant="dark"  className="sticky-top" collapseOnSelect expand="lg">
    <Container>
     <Navbar.Brand href="#home" className="fs-1 brand "> <i className="fas fa-hospital"></i> General Hospital</Navbar.Brand>
     <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home"  className="brand">Home</Nav.Link>
      <Nav.Link as={Link} to="/aboutUs" className="brand">About Us</Nav.Link>
      <Nav.Link as={Link} to="/doctors" className=" brand ">Doctors</Nav.Link>
      <Navbar.Text>
        {/* {user.email ? <button>LogOut</button> : ''  } */}
        {user.email ?   <Button onClick={logOut} variant="light">LogOut</Button> :    <button className="light">Login</button>   }

        Signed in as: <a className="a-style" href="#login">{user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse> 
    </Container>
  </Navbar>
  {/* header end */}
   
</>
</div>
    );
};

export default Header;