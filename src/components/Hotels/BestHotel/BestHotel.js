import React, { useEffect, useState } from "react";
import moment from "moment/moment";

const BestHotel = (props) => {
  const [time, setTime] = useState("");
  const hotel = props.getBestHotel();
  const endTime = moment().add(23, "minutes").add(34, "seconds");

  useEffect(() => {
    let interval = setInterval(() => {
      const leftTime = -moment().diff(endTime) / 1000;
      const minutes = Math.floor(leftTime / 60);
      const seconds = Math.floor(leftTime % 60);
      setTime(`${minutes} min. ${seconds} sec.`);
    }, 1000);
    return () => {
      console.log("Odmonotowany");
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="card bg-success text-light">
      <h4 className="card-header">Oferta tygodnia!</h4>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{hotel.name}</h5>
          <p>Ocena: {hotel.rating}</p>
        </div>

        <a href="/" className="btn btn-sm btn-light">
          Pokaż
        </a>
        <p className="m-0 mt-3 fs-6">Do końca oferty pozostało: {time}</p>
      </div>
    </div>
  );
};

export default BestHotel;
