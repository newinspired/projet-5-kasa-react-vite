import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <Link
      to={`/logement/${id}`}
      className="card"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="card-overlay">
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;