import React, { useState } from 'react';
import '../styles/collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`collapse-icon ${isOpen ? '' : 'rotate'}`} //condition 
          />
        </span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(content) ? ( //méthode qui permet de vérifier si une valeur est un tableau
          console.log(content), 
            <ul>
              {content.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}