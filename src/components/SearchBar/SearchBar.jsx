import React, { useState } from 'react';
import '../SearchBar/SearchBar.css'


export const SearchBar = (props) => {
  //here is the states
  const [sortBy, setSortBy] = useState("best_match")
  const [term, setTerm] = useState("")
  const [location, setLocation] = useState("")
  //Here is the objects
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  }
  // Here we are coding the methods

  const getSortByClass = (sortByOption) => {
    if(sortByOption === sortBy){
      return 'active';
    }else{
      return '';
    }
  }

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption)
  }

  const handleTermChange = (event) => {
    setTerm(event.target.value)
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }
  const handleSearch = (event) => {
    props.searchYelp(term, location, sortBy);
    event.preventDefault();
  }

  const renderSortedByOptions = () =>{
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} onClick={() => {handleSortByChange(sortByOptionValue)}} className={getSortByClass(sortByOptionValue)}>{sortByOption}</li>
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
        <input placeholder="Search Businesses" onChange={ e => handleTermChange(e)} />
        <input placeholder="Where?" onChange={e => handleLocationChange(e)} />
      </div>
      <div className="SearchBar-submit">
        <a onClick={(e) =>{handleSearch(e)}}>Let's Go</a>
      </div>
    </div>
  )
}

export default SearchBar;
