import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import useAuth from '../../hooks/useAuth';

const Menu = (props) => {
  const [auth, setAuth] = useAuth();

  const login = (e) => {
    e.preventDefault();
    setAuth(true);
  }

  const logout = (e) => {
    e.preventDefault();
    setAuth(false)
  }


  return (
    <nav className='menu container'>
      <ul className='d-flex menu__container'>
        <li className='menu__item me-2'>
          <NavLink className= {({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home</NavLink>
        </li>
        {auth ? (
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
