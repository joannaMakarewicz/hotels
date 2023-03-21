import React from "react";
import "./Header.css";
import withMousePosition from "../../../hoc/withMousePosition";

const Header = (props) => {
  const paralaxStyles = {
    transform: `translate(
      ${props.mouseX / 20}px,
      ${props.mouseY / 100}px
    )`,
  };
  return (
    <header className="header" >
      <div className="header__image" style={paralaxStyles}></div>

      {props.children}
    </header>
  );
};

export default withMousePosition(Header);
