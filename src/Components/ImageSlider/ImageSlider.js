import React from "react";
import { Carousel, Container } from "react-bootstrap";
import './ImageSlider.css'
import image1 from "../../Images/bird1.jpg";
import image2 from "../../Images/cheeta3.jpg";
import image3 from "../../Images/animals.jpg";
import image4 from "../../Images/squirrel.jpg";
import image5 from "../../Images/puffin.jpg";

const ImageSlider = () => {
  return (
    <div className=''>
      <Carousel fade className='darkShade'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image1}
            alt='First slide'
            height={600}
          />
          {/* <Carousel.Caption>
              <h3 className='text-dark'>First slide label</h3>
              <p className='fw-bold'>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image2}
            alt='Second slide'
            height={600}
          />

          {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image3}
            alt='Third slide'
            height={600}
          />

          {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image4}
            alt='Third slide'
            height={600}
          />

          {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image5}
            alt='Third slide'
            height={600}
          />

          {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
