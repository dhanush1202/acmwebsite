import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="black" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img
            alt="" 
            src="acm_logo.png"
            width="35"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ACM VNRVJIET
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        <Nav>
            <Nav.Link href="#home">Gallery</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
