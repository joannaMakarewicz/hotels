import React, { useState } from "react";
import "./Searchbar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const search = () => {
    console.log("szukaj!", input);
  };
  const updateInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="searchBar d-flex">
      <input
        value={input}
        onChange={updateInput}
        onKeyDown={e => e.key === "Enter" && search()}
        className="searchBar__input"
        type="text"
        placeholder="Szukaj..."
      />
      <button
        onClick={search}
        className="ms-1 btn btn-secondary searchBar__button"
        color="primary"
      >
        Szukaj
      </button>
    </div>
  );
};

export default SearchBar;
