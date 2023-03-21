import React from "react";
import Hotels from "../components/Hotels/Hotels";
import LastHotel from "../components/Hotels/Hotel/LastHotel/LastHotel";
import BestHotel from "../components/Hotels/BestHotel/BestHotel";
import useStateStorage from '../../src/hooks/useStateStorage';

const Home = (props) => {
    const [lastHotel, setLastHotel] = useStateStorage("last-hotel", null);
    

    const getBestHotel = () => {
        if (props.hotels.length < 2) {
          return null;
        } else {
          return props.hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
        }
      };

      
  const openHotel = (hotel) => setLastHotel(hotel);
  const removeLastHotel = () => setLastHotel(null);

  return (
    <div>
      {lastHotel ? (
        <LastHotel lastHotel={lastHotel} onRemove={removeLastHotel} />
      ) : null}
      {getBestHotel() ? <BestHotel getBestHotel={getBestHotel} /> : null}
      <Hotels onOpen={openHotel} hotels={props.hotels} theme={props.theme} />
    </div>
  );
};

export default Home;
