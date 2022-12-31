import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto" >
            <Nav.Link href="#NEWS" >NEWS</Nav.Link>
            <Nav.Link href="#ENTERTAINMENT">ENTERTAINMENT</Nav.Link>
            <Nav.Link href="#TECHNOLOGY">TECHNOLOGY</Nav.Link>
            <Nav.Link href="#TRAVEL">TRAVEL</Nav.Link>
            <Nav.Link href="#FOOD">FOOD</Nav.Link>
            <Nav.Link href="#SPORTS">SPORTS</Nav.Link>
            <Nav.Link href="#FLIPBOARD TV">FLIPBOARD TV</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
     

      
      
    </>
  );
}

export default ColorSchemesExample;