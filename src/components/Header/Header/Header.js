import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className='header container'>
      <div>
        {props.children}
      </div>
    </header>
  );
};

export default Header;
