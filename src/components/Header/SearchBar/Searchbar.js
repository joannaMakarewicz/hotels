import './Searchbar.css';

const SearchBar = () => {
  return (
    <div className="searchBar d-flex">
      <input
        className='searchBar__input'
        type="text"
        placeholder="Szukaj..."
      />
      <button className='ms-1 btn btn-secondary searchBar__button' color='primary'>Szukaj</button>
    </div>
  );
};

export default SearchBar;
