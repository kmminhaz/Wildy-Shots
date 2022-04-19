import React from "react";
import { Container } from "react-bootstrap";

import image1 from "../../../Images/Customers/customer-1.png";
import image2 from "../../../Images/Customers/customer-2.png";
import image3 from "../../../Images/Customers/customer-3.png";
import image4 from "../../../Images/Customers/customer-4.png";
import image5 from "../../../Images/Customers/customer-5.png";

const Feedbacks = () => {
  return (
    <div className='my-3 py-2'>
      <Container>
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4'>
          <div className='col'>
            <div className='card text-white bg-dark py-3 border-dark'>
              <img
                src={image1}
                alt=''
                srcset=''
                height={100}
                width={100}
                className='mx-auto'
              />
              <h6 className='py-3'>
                Taking images from here for my wall photo makes me satisfy and
                gives me pleasure when ever i look into it.
              </h6>
            </div>
          </div>
          <div className='col'>
            <div className='card text-white bg-dark py-3 border-dark'>
              <img
                src={image2}
                alt=''
                srcset=''
                height={100}
                width={100}
                className='mx-auto'
              />
              <h6 className='py-3'>
                I am happy because my assignment now looks so good after adding
                your photography
              </h6>
            </div>
          </div>
          <div className='col'>
            <div className='card text-white bg-dark py-3 border-dark'>
              <img
                src={image3}
                alt=''
                srcset=''
                height={100}
                width={100}
                className='mx-auto'
              />
              <h6 className='py-3'>So Good Photograpy</h6>
            </div>
          </div>
          <div className='col'>
            <div className='card text-white bg-dark py-3 border-dark'>
              <img
                src={image4}
                alt=''
                srcset=''
                height={100}
                width={100}
                className='mx-auto'
              />
              <h6 className='py-3'>
                It has been a pleasure to work with you Mr. Minhaz.
              </h6>
            </div>
          </div>
          <div className='col'>
            <div className='card text-white bg-dark py-3 border-dark'>
              <img
                src={image5}
                alt=''
                srcset=''
                height={100}
                width={100}
                className='mx-auto'
              />
              <h6 className='py-3'>
                Thank you for your unlimited free download option and your
                images are just wow.
              </h6>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feedbacks;
