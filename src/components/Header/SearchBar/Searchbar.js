import React, { useState, useEffect, useRef } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const history = useNavigate();

  const search = () => {
    history(`/wyszukaj/${input}`);
  };

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="searchBar d-flex">
      <input
        ref={inputRef}
        value={input}
        onChange={updateInput}
        onKeyDown={(e) => e.key === "Enter" && search()}
        className="searchBar__input"
        type="text"
        placeholder="Szukaj..."
      />
      <button
        onClick={search}
        className={`ms-1 btn btn-${props.theme} searchBar__button`}
      >
        Szukaj
      </button>
    </div>
  );
};

export default SearchBar;
