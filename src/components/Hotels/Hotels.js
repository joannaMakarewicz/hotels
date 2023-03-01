import React from "react";
import Hotel from "./Hotel/Hotel";
import "./Hotels.css";

const Hotels = ({ hotels }) => {
  return (
    <div className="hotels container">
      <h2 className="hotels__heading">Oferty</h2>
      {hotels.length !== 0 ? hotels.map((hotel) => {
        return (
        <Hotel hotel={hotel} key={hotel.id} />)}) : <p>Nie znaleziono noclegu.</p>
        }
    </div>
  );
}

export default Hotels;
