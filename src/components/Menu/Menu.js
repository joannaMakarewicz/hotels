import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import useAuth from "../../hooks/useAuth";

const Menu = (props) => {
  const [auth, setAuth] = useAuth();

  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
  };

  return (
    <nav className="menu container">
      <ul className="d-flex menu__container">
        <li className="menu__item me-2">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        {auth ? (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/profil"
              >
                Mój profil
              </NavLink>
            </li>
            <li>
              <a
                className={`text-decoration-none text-${props.theme} ms-2`}
                href="/zaloguj"
                onClick={logout}
              >
                Wyloguj
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                className={`text-decoration-none text-${props.theme} ms-2`}
                to="/rejestracja"
              >
                Zarejestruj
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`text-decoration-none text-${props.theme} ms-2`}
                to="/zaloguj"
              >
                Zaloguj
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
