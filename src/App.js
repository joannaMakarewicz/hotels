import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header/Header";
import SearchBar from "./components/Header/SearchBar/Searchbar";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import ColorItem from "./components/Header/ColorItem/ColorItem";
import InspiringQuote from "./components/InspiringQuote/InspiringQuote";
import AuthContext from "./context/AuthContext";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Search from "./pages/Search";

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
  const [isAuthenticated, setIsAutenticated] = useState(false);
 



  const changeTheme = (color) => {
    setTheme(color);
  };



  const content = (
    <>
      <Routes>
        <Route exact path="/" element={<Home hotels={hotels}/>}/>
        <Route path="/hotele/:id" element={<HotelPage/>}/>
        <Route path="/wyszukaj/:term" element={<Search/>}/>
      </Routes>
    </>
  );

  const header = (
    <Header>
      <InspiringQuote />
      <SearchBar />
      <ColorItem colors={colors} changeTheme={changeTheme} />
    </Header>
  );

  const menu = <Menu theme={theme} />;

  const footer = <Footer theme={theme} />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isAuthenticated: isAuthenticated,
          login: () => setIsAutenticated(true),
          logout: () => setIsAutenticated(false),
        }}
      >
        <Layout header={header} menu={menu} content={content} footer={footer} />
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
