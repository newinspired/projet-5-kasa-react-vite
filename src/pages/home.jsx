import React from 'react';
import Banner from '../components/banner.jsx';
import Card from '../components/card.jsx';
import '../styles/main.scss'

export default function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" />
      <div className="card-grid">
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
      </div>
    </div>
  );
}