import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header/Header";
import Hotels from "./components/Hotels/Hotels";
import Menu from "./components/Menu/Menu";

function App() {
  const [hotels, getHotels] = useState([
    {
      id:"1",
      name: "Pod akacjami",
      city: "Warszawa",
      rating: "8.3.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
    {
      id:"2",
      name: "Amazonka",
      city: "Grudziądz",
      rating: "8.7.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
    {
      id:"3",
      name: "Pod palmami",
      city: "Łeba",
      rating: "9.3.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    }
  ]);
  return (
    <div>
      <Header />
      <Menu />
      <Hotels hotels={hotels} getHotels={getHotels}/>
    </div>
  );
}

export default App;
