import React from 'react';
import '../App/App.css'
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar></SearchBar>
      <BusinessList/>
    </div>
  );
}

export default App;
