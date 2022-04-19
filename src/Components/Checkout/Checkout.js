import React from 'react';
import image from '../../Images/banner.jpg';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className='darkShade'>
            <img src={image} alt="" srcset="" height={300} className='w-100'/>
            <h3 className='text-white fw-bold py-3'>C h e c k o u t</h3>
        </div>
    );
};

export default Checkout;