import React from 'react';
import '../App/App.css'
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
  let businessWord = "business "
  const businesses = businessWord.repeat(6).trimEnd().split(" ");

  const searchYelp = (term, location, sortBy) => {
    console.log(`searching Yelp with ${term} ${location} ${sortBy}`)
  }

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp={searchYelp}></SearchBar>
      <BusinessList businesses={businesses} business={business}/>
    </div>
  );
}

export default App;
