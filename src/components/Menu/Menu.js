import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu container'>
      <ul className='menu__container'>
        <li className='menu__item'>
          <a className='menu__link' href='/'>Home</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;
