import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import './Header.css'
const Header = () => {
    return ( 
<div>
<>
{/* heder start */}
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
     <Navbar.Brand href="#home" className="fs-1 brand "> <i className="fas fa-hospital"></i> General Hospital</Navbar.Brand>
     <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home"  className="brand">Home</Nav.Link>
      <Nav.Link as={Link} to="/aboutUs" className="brand">About Us</Nav.Link>
      <Nav.Link as={Link} to="/doctors" className=" brand ">Doctors</Nav.Link>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
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