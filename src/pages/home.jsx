import React from 'react';
import Banner from '../components/banner.jsx';
import Card from '../components/card.jsx';
import '../styles/main.scss';
import data from '../data/logements.json';

export default function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" />
      <div className="card-grid">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}  
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}