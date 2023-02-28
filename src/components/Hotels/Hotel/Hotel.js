import React from "react";
import "./Hotel.css";
import hotelImg from "../../../assets/img/hotel1.jpg";

const Hotel = () => {
  return (
    <div className="card hotel">
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img className="img-fluid img-thumbnail" src={hotelImg} alt="" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className="hotel__name">Pensjonat</p>
                <span className="badge badge-light text-dark">miasto</span>
              </div>
              <div className="col text-end">
                <h5>Ocena:8.3</h5>
                <a href="/" className="btn btn-primary mt-2 px-5">
              Pokaż
            </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="hotel__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
