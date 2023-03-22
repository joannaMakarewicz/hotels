import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import AuthContext from '../../context/AuthContext';

const Menu = (props) => {
  const auth = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    auth.login();
  }

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }

  return (
    <nav className='menu container'>
      <ul className='d-flex menu__container'>
        <li className='menu__item me-2'>
          <Link className={`menu__link text-${props.theme}`} to="/">Home</Link>
        </li>
        {auth.isAuthenticated ? (
          <li >
            <a className={`text-decoration-none text-${props.theme}`} href="/" onClick={logout}>Wyloguj</a>
          </li>
        ) : (
          <li>
            <a className={`text-decoration-none text-${props.theme}`} href="/" onClick={login}>Zaloguj</a>
          </li>
        )
        }
      </ul>
    </nav>
  )
}

export default Menu;
