import React from "react";
import { Link } from 'react-router-dom';

const MyHotels = () => {

  return (
    <div>
      <p>Nie masz żadnego hotelu</p>
      <Link to="/profil/hotele/dodaj" className="btn btn-primary">Dodaj hotel</Link>
    </div>
  );
};

export default MyHotels;
