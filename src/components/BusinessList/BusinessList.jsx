import React from 'react';
import Business from '../Business/Business';
import '../BusinessList/BusinessList.css';


const BusinessList = (props) => {
  return (
    <div className="BusinessList">
      {
        props.businesses.map(business => {
          return <Business business={business} key={business.id}  />
        })
      }
    </div>
  )
}

export default BusinessList;
