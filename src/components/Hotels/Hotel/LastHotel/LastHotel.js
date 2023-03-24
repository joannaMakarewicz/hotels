import React from "react";
import { Link } from 'react-router-dom';

const LastHotel = ({lastHotel, onRemove}) => {

  return (
    <div className="card bg-light mb-2">
      <p className="card-header">
        Ostatnio oglądałeś ten hotel. Wciąż zainteresowany?
      </p>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{lastHotel.name}</h5>
          <span className="badge bg-light text-dark">{lastHotel.city}</span>
        </div>
        <div style={{width:'100px'}} className="ml-auto d-flex justify-content-between">
          <Link to={`/hotele/${lastHotel.id}`} className="btn btn-sm btn-dark">
            Tak
          </Link>
          <button onClick={onRemove} href="/" className="btn btn-sm btn-dark" >
            Nie
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastHotel;
