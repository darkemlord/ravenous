import React from 'react';
import '../Business/Business.css'
// Busisness object

const Business = (props) => {
  return (
    <div className="Business">
      <div className="image-container">
        <img src={props.business.imageSrc} alt='' />
      </div>
      <h2>{props.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{props.business.state}</p>
        </div>
        <div className="Business-reviews">
          <h3>{props.business.category}</h3>
          <h3 className="rating">{props.business.rating}</h3>
          <p>{props.business.reviewCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Business;
