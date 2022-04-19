import React from "react";
import { Button, Card } from "react-bootstrap";
import image from "../../Images/photographer_Banner.jpg";
import myImage from "../../Images/my.jpg";

const About = () => {
  return (
    <div className='text-white'>
      <img src={image} alt='' height={400} className='w-100' />
      <div className='w-75 mx-auto'>
        <img
          src={myImage}
          alt=''
          srcset=''
          height={300}
          className='mt-5 mb-3'
        />
        <h3 className='mb-3'>K. M. Minhaz Uddin</h3>
        <h6 className='mb-3'>
          <h5>As-Salamu Alaikum,</h5> I am a student of university final
          semester. I love to do programming and I enjoy web development. So to
          learn web development in a professional level and to land a job in
          a good & big company. I decided to take the web development course of
          programming hero. I have a greate interest on computer technology so I
          will be keep learning an exploring day by day untill I achieve my
          goal.
        </h6>
        <Button variant='primary' className='mb-5'>
          My GitHub
        </Button>
      </div>
    </div>
  );
};

export default About;
