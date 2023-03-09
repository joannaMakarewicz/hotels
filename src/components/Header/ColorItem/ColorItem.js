import React from "react";
import "./ColorItem.css";

const ColorItem = (props) => {
  return (
    <div className="colorItem d-flex justify-content-center">
      <button
        className="colorItem__button bg-success text-light"
        onClick={props.changeThemeSuccess}
      ></button>
      <button
        className="colorItem__button bg-primary text-light ms-2"
        onClick={props.changeThemePrimary}
      ></button>
      <button
        className="colorItem__button bg-danger text-light ms-2"
        onClick={props.changeThemeDanger}
      ></button>
    </div>
  );
};

export default ColorItem;
