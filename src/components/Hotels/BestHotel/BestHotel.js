import React from "react";

const BestHotel = (props) => {
    const hotel= props.getBestHotel({minHotels:2});
    if(!hotel) return null;

  return (
    <div className="card bg-success text-light">
      <div className="card-header">Oferta tygodnia!</div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{hotel.name}</h5>
          <p>Ocena: {hotel.rating}</p>
        </div>

        <a href="/" className="btn btn-sm btn-light">
          Pokaż
        </a>
      </div>
    </div>
  );
};

export default BestHotel;