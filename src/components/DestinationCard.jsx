import React from 'react';
import '../styles/DestinationCard.css';

function DestinationCard({ destination }) {
  const { name, location, image, description, price } = destination;

  return (
    <div className="destination-card">
      <div className="destination-image">
        <img src={image} alt={name} />
      </div>
      <div className="destination-info">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <p>Description: {description}</p>
        <div className="destination-price">Price: {price}</div>
      </div>
    </div>
  );
}

export default DestinationCard;
