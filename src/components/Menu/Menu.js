import React from 'react';
import './Menu.css';

const Menu = (props) => {
  return (
    <div className='menu container'>
      <ul className='menu__container'>
        <li className='menu__item'>
          <a className={`menu__link text-${props.theme}`} href='/'>Home</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;
