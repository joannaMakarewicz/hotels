import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h1>Mój profil</h1>
      </div>
      <div className="card-body">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" to="/profil/edytuj">
              Profil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profil/hotele">
              Hotele
            </NavLink>
          </li>
        </ul>
        <div className="pt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
