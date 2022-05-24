import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import logo from "../../images/logo.svg"

export default function Navigation() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Brand href="#home">
    <Link to="/" ><img src={logo} alt="" /></Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto right-navigation">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Resources</Nav.Link>
    </Nav>
   <Nav className="left-navigation">
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Sign Up</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
