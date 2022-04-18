import React from 'react';
import { Navbar, Container, Nav, NavDropdown, } from "react-bootstrap";

const NavBar = () => {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>Wildy Shot</Navbar.Brand>
            <Nav className='m-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#features'>Features</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavBar;