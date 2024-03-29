import React from "react";
import "./Hotel.css";
import hotelImg from "../../../assets/img/hotel1.jpg";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Hotel = (props) => {
  const [auth] = useAuth();

  const clickHandler = (e) => {
    props.onOpen(props);
  };

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
                <p className="hotel__name">{props.hotel.name}</p>
                <span className="badge bg-light text-dark">
                  {props.hotel.city}
                </span>
              </div>
              <div className="col text-end">
                <h5>Ocena: {props.hotel.rating}</h5>
                <Link to={`/hotele/${props.hotel.name}`} onClick={clickHandler}>
                  Pokaż
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="hotel__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {auth
              ? <p className="mt-2">Dostępność: 4 pokoje</p>
              : <p className="mt-2">Dostępność: zaloguj się </p>
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
