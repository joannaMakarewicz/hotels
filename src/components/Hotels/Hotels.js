import React from "react";
import Hotel from "./Hotel/Hotel";
import "./Hotels.css";

const Hotels = (props) => {
  const count = props.hotels.length;
  return (
    <div className="hotels container">
      <h2 className="hotels__heading">Oferty ({count})</h2>
      {props.hotels.length !== 0 ? props.hotels.map((hotel) => {
        return (
        <Hotel onOpen={props.onOpen} hotel={hotel} key={hotel.id} theme={props.theme} />)}) : <p>Nie znaleziono noclegu.</p>
        }
    </div>
  );
}

export default Hotels;
