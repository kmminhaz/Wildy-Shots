import React from 'react';
import { Navbar, Container, Nav, } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand as={Link} to='/'>Wildy Shots</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='about'>About</Nav.Link>
                <Nav.Link as={Link} to='blog'>Blog</Nav.Link>
                <Nav.Link as={Link} to='login' className='text-dark bg-white p-2 fw-bold rounded ms-2'>Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavBar;