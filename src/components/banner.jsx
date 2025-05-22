import React from 'react';
import '../styles/banner.scss';
import bannerImage from '../assets/banner-image.png';

const Banner = ({ title = "Chez vous, partout et ailleurs" }) => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="bannière du site Kasa" className="banner-image" />
      <div className="banner-overlay">
        <h2 className="banner-title">{title}</h2>
      </div>
    </div>
  );
};

export default Banner;