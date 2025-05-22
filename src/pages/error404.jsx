import { Link } from 'react-router-dom';
import '../styles/main.scss';

export default function Error404() {
  return (
    <div className="error-container">
      <p className="error-code">404</p>
      <p className="error-message">Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}