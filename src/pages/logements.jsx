import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/logements.json';
import '../styles/logements.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Collapse from '../components/collapse';

export default function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = data.find(item => item.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  const pictures = logement.pictures;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="logement-container">
      <div className="cover">
        
        <div className="carousel">
          <FontAwesomeIcon icon={faChevronLeft} onClick={prevImage} className="carousel-arrow left" />
          
          <img 
            className="logement-cover" 
            src={pictures[currentIndex]} 
            alt={`${logement.title} ${currentIndex + 1}`} 
          />
          
          <FontAwesomeIcon icon={faChevronRight} onClick={nextImage} className="carousel-arrow right" />

          <div className="image-counter">{currentIndex + 1}/{pictures.length}</div>
        </div>
      </div>

      <h2>{logement.title}</h2>
      <h3 className="logement-location">{logement.location}</h3>

      <div className="logement-tags">
        {logement.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}