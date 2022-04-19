import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginRegister = () => {
    return (
      <div>
        <Container>
          <div className='w-50 mx-auto'>
            <Nav variant='pills' defaultActiveKey='login'>
              <Row>
                <Col lg={6}>
                  <Nav.Item className='mx-auto'>
                    <Nav.Link as={Link} to='/login'>
                      Login
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col lg={6}>
                  <Nav.Item className='mx-auto'>
                    <Nav.Link as={Link} to='/register'>
                      Register
                    </Nav.Link>
                  </Nav.Item>
                </Col>
              </Row>
            </Nav>
          </div>
        </Container>
      </div>
    );
};

export default LoginRegister;