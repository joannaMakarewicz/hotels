import React from 'react';

const Footer = (props) => {
  return (
    <footer className='container'>
      <p className={`text-center text-${props.theme}`}>Stopka</p>
    </footer>
  )
}

export default Footer;
