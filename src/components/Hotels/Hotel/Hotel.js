import React from 'react';
import './Hotel.css';
import hotelImg from '../../../assets/img/hotel1.jpg';

const Hotel = () => {
  return (
    <div className='hotel'>
        <img className='img-fluid' src={hotelImg} alt=''/>
      Hotel
    </div>
  )
}

export default Hotel;
