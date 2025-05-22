export function SayHello(){
    return (
    <div>
        <h1>Hello World</h1>
        <p>Bonjour à tous</p>
    </div>
    )
}

export function DiceHola(){
    return (
    <div>
        <h1>Hola !</h1>
        <p>Hola a todos</p>
    </div>
    )
}

{/*----------------------------HEADER----------------------------------*/}

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