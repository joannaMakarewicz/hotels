import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header/Header";
import SearchBar from "./components/Header/SearchBar/Searchbar";
import Hotels from "./components/Hotels/Hotels";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  const theme="primary";

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

  const [hotels, setHotels] = useState(basicHotels);

  const searchHandler = (input) => {
    const filteredHotels = basicHotels.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(filteredHotels);
    setHotels(filteredHotels);
  };

  return (
    <Layout
      header={
        <Header>
          <SearchBar onSearch={(input) => searchHandler(input)} />
        </Header>
      }
      menu={<Menu />}
      content={<Hotels hotels={hotels} />}
      footer={<Footer/>}
    />
  );
}

export default App;
