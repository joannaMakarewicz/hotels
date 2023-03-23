import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink className= {({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home</NavLink>
        </li>
        {auth.isAuthenticated ? (
          <>
          <li >
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/profil" >Mój profil</NavLink>
          </li>
          <li >
            <a className={`text-decoration-none text-${props.theme} ms-2`} href="/" onClick={logout}>Wyloguj</a>
          </li>
          </>
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
