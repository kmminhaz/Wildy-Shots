import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../../../Images/chita2.jpg";

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
                <Card.Title>All My Works</Card.Title>
                <Card.Text>
                  From here you can see all of my best works and also can
                  download picture that you want. You can also share the images you like from here to anyone of your friends family and all.
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
