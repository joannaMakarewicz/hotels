import React from 'react';
import Hotel from './Hotel/Hotel';
import './Hotels.css';

const Hotels = () => {
  return (
    <div className='hotels container'>
       <h2 className='hotels__heading'>Oferty</h2>
      <Hotel/>
      <Hotel/>
      <Hotel/>
    </div>
  )
}

export default Hotels;
