import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import data from '../data/logements.json';
import '../styles/logements.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Collapse from '../components/collapse';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/collapse.scss'
import Error404 from './error404.jsx'


export default function Logement() {
  const { id } = useParams(); // permet de créer un url à partir de l'ID
  const logement = data.find(item => item.id === id); // item = balayer tout les id dans le json*/
  const [currentIndex, setCurrentIndex] = useState(0);
        //une donnée   //fonction qui permet de modifier la donnée


  // console.log(logement);
  // console.log("Index :", currentIndex);


  if (!logement) {
    
    return  <Error404/>
    ;
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
          {pictures.length > 1 && (
            <FontAwesomeIcon icon={faChevronLeft} onClick={prevImage} className="carousel-arrow left" />
          )}

          <img 
            className="logement-cover" 
            src={pictures[currentIndex]} 
            alt={`${logement.title} ${currentIndex + 1}`} 
          />

          {pictures.length > 1 && (
            <FontAwesomeIcon icon={faChevronRight} onClick={nextImage} className="carousel-arrow right" />
          )}

          {pictures.length > 1 && (
            <div className="image-counter">{currentIndex + 1}/{pictures.length}</div>
          )}
        </div>
        
        
      </div>



      <div className='ContainerDescriptionImageLogement'>
        <div className='ContainerDescriptionImageLogementPartOne'>
          <h2>{logement.title}</h2>
          <h3 className="logement-location">{logement.location}</h3>

          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className='ContainerDescriptionImageLogementPartTwo'>
          <div className='NameAndPictureLogement'>
            <div className="host-name">{logement.host.name}</div>
            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="logement-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  className={star <= logement.rating ? 'star filled' : 'star empty'}
                />
              ))}
          </div> 
        </div>
      </div>




      <div className="logement-collapse">
              <Collapse
                title="Descriptions"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
              />
              <Collapse
                title="Equipements"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
              />
      </div>
    </div>
  );
}