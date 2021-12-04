import React from 'react';
import '../SearchBar/SearchBar.css'

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

export const SearchBar = () => {
  const renderSortedByOptions = () =>{
    return Object.keys(sortByOptions).map((element) => {
      let sortByOptionValue = sortByOptions[element];
      return <li key={sortByOptionValue}>{element}</li>
    })
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortedByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a href="/" >Let's Go</a>
      </div>
    </div>
  )
}

export default SearchBar;
