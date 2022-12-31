import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





function NavScrollExample () {
  return(
    <div >
       <Navbar bg="dark"  fixed="top"    expand="lg" variant='dark' >
      <Container fluid>
        <Navbar.Brand href="#">Flip Board</Navbar.Brand>
       
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

        <Nav.Link  href="#action2">Newsletters</Nav.Link> 
          </Nav>

      <Nav.Link href="#action2">Link</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Flipboard"
              className="me-2"
              aria-label="Search"
            />
           
            <Button variant="danger">signup</Button>
            <Button variant="dark" >login</Button>
          </Form>
        
      </Container>
    </Navbar>
   </div>

   


    
  );
}
export default NavScrollExample;