import React from 'react';
import '../styles/card.scss';

const Card = ({ title = "Titre de la location" }) => {
  return (
    <div className="card">
      <div className="card-overlay">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default Card;