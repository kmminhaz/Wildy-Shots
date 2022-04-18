import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import image from '../../Images/chita2.jpg'

const MyWorks = () => {
    return (
      <div>
        <Container>
          <Row xs={1} md={2}>
            <Col lg={5}>
              <Card>
                <Card.Img variant='top' src={image} />
              </Card>
            </Col>
            <Col lg={7} className='d-flex align-items-center'>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button className='btn-dark'> Visit My Gallery</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default MyWorks;