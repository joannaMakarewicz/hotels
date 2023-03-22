import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});

  const fetchHotel = () => {
    setHotel(
        {
            id: "2",
            name: "Amazonka",
            city: "Grudziądz",
            rating: "8.7.",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "",
          },
    )
  };


  useEffect(() => {
    setTimeout(() => {
      fetchHotel();
    }, 500);
  }, []);

  return (
    <div>
      <p>Hotel: {hotel.name}</p>
    </div>
  );
};

export default HotelPage;
