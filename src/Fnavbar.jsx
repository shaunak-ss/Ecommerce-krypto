import {Container,Nav,Navbar} from 'react-bootstrap';
import React from 'react';

function Fnavbar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShopKart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Product</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Fnavbar;