import './Searchbar.css';
import { Button } from 'reactstrap';

const SearchBar = () => {
  return (
    <div className="searchBar d-flex">
      <input
        className='searchBar__input'
        type="text"
        placeholder="Szukaj..."
      />
      <Button className='searchBar__button' color='primary'>Szukaj</Button>
    </div>
  );
};

export default SearchBar;
