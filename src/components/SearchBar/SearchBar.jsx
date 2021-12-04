import React from 'react';
import '../SearchBar/SearchBar.css'

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

export const SearchBar = () => {
  const renderSortedByOptions = () =>{
    return Object.keys(sortByOptions).map((element, index) => {
      let sortByOptionValue = sortByOptions[element];
      return <li key={index}>{sortByOptionValue}</li>
    })
  };

  return (
    <div>

    </div>
  )
}

export default SearchBar;
