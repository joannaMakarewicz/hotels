import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Header from "./components/Header/Header/Header";
import SearchBar from "./components/Header/SearchBar/Searchbar";
import Hotels from "./components/Hotels/Hotels";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import ColorItem from "./components/Header/ColorItem/ColorItem";
import BestHotel from "./components/Hotels/BestHotel/BestHotel";

const colors = [
  {
    id: "1",
    color: "primary",
  },
  {
    id: "2",
    color: "danger",
  },
  {
    id: "3",
    color: "success",
  },
];

const basicHotels = [
  {
    id: "1",
    name: "Pod akacjami",
    city: "Warszawa",
    rating: "8.3.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
  {
    id: "2",
    name: "Amazonka",
    city: "Grudziądz",
    rating: "8.7.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
  {
    id: "3",
    name: "Pod palmami",
    city: "Łeba",
    rating: "9.3.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
  },
];

function App() {
  const [theme, setTheme] = useState("primary");
  const [hotels, setHotels] = useState(basicHotels);
  // const [loading, setLoading] = useState(true);
  // const [isAutenticated, setIsAutenticated] = useState(false);

  const changeTheme = (color) => {
    setTheme(color);
  };

  const searchHandler = (input) => {
    const filteredHotels = basicHotels.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(filteredHotels);
    setHotels(filteredHotels);
  };

  const getBestHotel = useCallback((options) => {
    if (hotels.length < options.minHotels) {
      return null;
    } else {
      return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
    }
  }, [hotels]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHotels(basicHotels);
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    // <AuthContext.Provider value={{
    //   isAutenticated : isAutenticated,
    //   login: () => setIsAutenticated(true),
    //   logout: () => setIsAutenticated(false),
    // }}>
    <Layout
      header={
        <Header>
          <SearchBar onSearch={(input) => searchHandler(input)} theme={theme} />
          <ColorItem colors={colors} changeTheme={changeTheme} />
        </Header>
      }
      menu={<Menu theme={theme} />}
      content={
        <>
          <BestHotel getBestHotel={getBestHotel} />
          <Hotels hotels={hotels} theme={theme} />
        </>
      }
      footer={<Footer theme={theme} />}
    />
    // </AuthContext.Provider>
  );
}

export default App;
