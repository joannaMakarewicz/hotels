import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className='header'>
      <div>
        {props.children}
      </div>
    </header>
  );
};

export default Header;
