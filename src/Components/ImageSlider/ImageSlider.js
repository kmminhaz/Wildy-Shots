import React from "react";
import { Carousel, Container } from "react-bootstrap";

const ImageSlider = () => {
  return (
    <div>
      <Container className="">
        <Carousel className='text-dark'>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=First slide&bg=373940'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3 className='text-dark'>First slide label</h3>
              <p className='fw-bold'>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=Second slide&bg=282c34'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=Third slide&bg=20232a'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default ImageSlider;
