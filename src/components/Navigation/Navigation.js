import React from "react";
import { Link } from "react-router-dom";
import "../../css/navigation.css"
import { Nav, Navbar } from "react-bootstrap";
import importedImages from "../index";


export default function Navigation() {
  return (
<>
<Navbar collapseOnSelect expand="lg" className='auto-margin mainContent'>
  <Navbar.Brand>
    <Link to="/" ><img src={importedImages.logo} alt="logo" /></Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto right-navigation">
      <Nav.Link href="#features" className="color">Features</Nav.Link>
      <Nav.Link href="#pricing" className="color">Pricing</Nav.Link>
      <Nav.Link href="#pricing" className="color">Resources</Nav.Link>
    </Nav>
   <Nav className="left-navigation">
      <Link to="/Login" className="link">Login</Link>
      <Link to="/Signup" className="link signup">Sign Up</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
  );
}
