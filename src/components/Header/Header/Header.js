import React from "react";
import SearchBar from "../SearchBar/Searchbar";
import "./Header.css";

const Header = ({onSearch}) => {
  return (
    <header className='header container'>
      <div>
        <SearchBar onSearch={onSearch}/>
      </div>
    </header>
  );
};

export default Header;
