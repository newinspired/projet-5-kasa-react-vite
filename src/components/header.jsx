import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.svg';
import "../styles/header.scss"

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logoImage} alt='logo de kasa' className='logo-kasa'></img>
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  );
}