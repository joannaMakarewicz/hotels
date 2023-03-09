import React from "react";
import "./ColorItem.css";

const ColorItem = (props) => {
  return (
    <div className="colorItem d-flex justify-content-center">
      {props.colors.map((el)=> {
        return (
          <button
          className={`colorItem__button bg-${el.color} text-light ms-2`}
          onClick={() => props.changeTheme(el.color)}
          key={el.id}
        ></button>
        )
      })}
    </div>
  );
};

export default ColorItem;
