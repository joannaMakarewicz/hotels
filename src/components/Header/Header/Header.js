import React from "react";
import SearchBar from "../SearchBar/Searchbar";
import "./Header.css";

const Header = ({hotels, getHotels}) => {
  return (
    <header className='header container'>
      <div>
        <SearchBar hotels={hotels} getHotels={getHotels}/>
      </div>
    </header>
  );
};

export default Header;
