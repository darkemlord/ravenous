import React, {useState} from 'react';
import '../App/App.css'
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

  function App() {

    const [business, setBusiness] = useState([])

    const searchYelp = (term, location, sortBy) => {
      Yelp.search(term, location, sortBy).then(data => {
        setBusiness(data)
      })
    }

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp={searchYelp}></SearchBar>
      <BusinessList businesses={business}/>
    </div>
  );
}

export default App;
