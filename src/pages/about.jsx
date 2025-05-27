import React from 'react';
import bannerImageAbout from '../assets/image-about.jpg';
import Collapse from '../components/collapse';
import '../styles/main.scss';

export default function About() {
  return (
    <div className="about-container">
      <div className="banner-about">
        <img
          src={bannerImageAbout}
          className="banner-image-about"
          alt="bannière à propos du site Kasa"
        />
      </div>
      <div className="about-collapses">
        <Collapse
          title="Fiabilité"
          content="Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"
        />
        <Collapse
          title="Respect"
          content="Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"
        />
        <Collapse
          title="Service"
          content="Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"
        />
        <Collapse
          title="Sécurité"
          content="Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"
        />
      </div>
    </div>
  );
}