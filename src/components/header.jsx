

import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.svg';

export default function Header() {
  return (
    <header>
      <img src={logoImage} alt='logo de kasa' className='logo-kasa'></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  );
}