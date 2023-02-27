import React from "react";
import SearchBar from "../SearchBar/Searchbar";
import "./Header.css";

const Header = () => {
  return (
    <header className='header container'>
      <div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
