import React from 'react';
import Business from '../Business/Business';
import '../BusinessList/BusinessList.css';


const BusinessList = (props) => {
  return (
    <div className="BusinessList">
      {props.businesses.map( (business, index) => (
        <Business key={index} business={props.business}/>
      ))}
    </div>
  )
}

export default BusinessList;
