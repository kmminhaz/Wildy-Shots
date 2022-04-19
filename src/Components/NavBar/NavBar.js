import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const NavBar = () => {
  const { user, signOutUser } = useFirebase();
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Wildy Shots
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='about'>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='blog'>
                Blog
              </Nav.Link>
              {user?.uid ? (
                <Button
                  variant='light'
                  size='sm'
                  onClick={signOutUser}
                  className='fw-bold ms-2'
                >
                  {" "}
                  Sign Out{" "}
                </Button>
              ) : (
                <Link
                  to={"login"}
                  className='text-dark p-2 fw-bold bg-white text-decoration-none rounded-3 ms-2'
                >
                  {" "}
                  Sign In{" "}
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
