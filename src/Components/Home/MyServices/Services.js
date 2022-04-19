import React from "react";
import { Button, Container } from "react-bootstrap";

import image1 from "../../../Images/lions.jpg";
import image2 from "../../../Images/bird1.jpg";
import image3 from "../../../Images/cheeta4.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className='my-3 py-2'>
      <Container>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col'>
            <div className='card'>
              <img src={image1} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Wild Falmily</h5>
                <h3 className='fw-bold'>100$</h3>
                <p className='card-text text-start'>
                  To get a perfect shot of the family of the animals is so
                  diffecult. Actually while taking a picture of the such powerful animals
                  family you need to make them understand that you are not going
                  to herm them.
                </p>
                <Button variant='dark' as={Link} to='checkout'>
                  {" "}
                  Checkout{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={image2} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Wild Nature</h5>
                <h3 className='fw-bold'>100$</h3>
                <p className='card-text text-start'>
                  The Nature in the wild is very beautiful and pleasing. But to
                  get a parfect shot that blow your mind takes patience and hard
                  working.
                </p>
                <Button variant='dark' as={Link} to='checkout'>
                  {" "}
                  Checkout{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={image3} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Wild In Deep Jungle</h5>
                <h3 className='fw-bold'>100$</h3>
                <p className='card-text text-start'>
                  Deep in the jungle thing became so dangerous and hard to shot
                  pictures. You never know when and what things are comming to
                  you. Somtime we need to stay in the jungle to get a perfect
                  shot.
                </p>
                <Button variant='dark' as={Link} to='checkout'>
                  {" "}
                  Checkout{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
