import React from 'react';
import { useParams } from 'react-router-dom';

const Search = (props) => {
  const { input } = useParams();
    const searchHandler = input => {
        // const filteredHotels = basicHotels.filter((el) =>
        //   el.name.toLowerCase().includes(input.toLowerCase())
        // );
      };

  return (
    <div>
      <h2>Wyniki dla frazy "{input}":</h2>
    </div>
  )
}

export default Search;
