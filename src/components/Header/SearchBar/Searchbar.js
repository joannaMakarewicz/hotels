import React, { useState, useEffect } from "react";
import "./Searchbar.css";

const SearchBar = (props) => {
  const [input, setInput] = useState("");

  const search = () => {
    props.onSearch(input);
  };

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const focusInput = () => {
    const input = document.querySelector('.searchBar__input');
    console.log(input.focus());
  }

  useEffect(() => {
    focusInput();
  }, [])

  return (
    <div className="searchBar d-flex">
      <input
        value={input}
        onChange={updateInput}
        onKeyDown={(e) => e.key === "Enter" && search()}
        className="searchBar__input"
        type="text"
        placeholder="Szukaj..."
      />
      <button
        onClick={search}
        className={`ms-1 btn btn-${props.theme} searchBar__button`}>
        Szukaj
      </button>
    </div>
  );
};

export default SearchBar;
