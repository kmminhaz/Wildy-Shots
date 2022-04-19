import React from "react";
import { Button, Container, } from "react-bootstrap";

import image1 from '../../../Images/lions.jpg'
import image2 from '../../../Images/bird1.jpg'
import image3 from '../../../Images/cheeta4.jpg'

const Services = () => {
  return (
    <div className='my-3 py-2'>
      <Container>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col'>
            <div className='card'>
              <img src={image1} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h3 className='fw-bold'>100$</h3>
                <p className='card-text text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quidem unde corporis inventore est facere, qui
                  accusantium magnam totam quisquam aliquam sit libero ullam
                  debitis?
                </p>
                <Button variant='dark'> Checkout </Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={image2} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h3 className='fw-bold'>100$</h3>
                <p className='card-text text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quidem unde corporis inventore est facere, qui
                  accusantium magnam totam quisquam aliquam sit libero ullam
                  debitis?
                </p>
                <Button variant='dark'> Checkout </Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={image3} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h3 className='fw-bold'>100$</h3>
                <p className='card-text text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quidem unde corporis inventore est facere, qui
                  accusantium magnam totam quisquam aliquam sit libero ullam
                  debitis?
                </p>
                <Button variant='dark'> Checkout </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
