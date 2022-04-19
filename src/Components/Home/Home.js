import React from 'react';
import Feedbacks from './Feedbacks/Feedbacks';
import ImageSlider from './ImageSlider/ImageSlider';
import Services from './MyServices/Services';
import MyWorks from './MyWorks/MyWorks';

const Home = () => {
    return (
      <div>
        <ImageSlider></ImageSlider>
        <br /> <br /> <br /> <br /> <br />
        <h2 className='text-white fw-bold py-4'> My Services </h2>
        <Services></Services>
        <br /> <br />
        <h2 className='text-white fw-bold py-4'> My Works </h2>
        <MyWorks></MyWorks>
        <br /> <br />
        <h2 className='text-white fw-bold py-4'> People Liked My Work </h2>
        <Feedbacks></Feedbacks>
      </div>
    );
};

export default Home;