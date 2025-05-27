import { useNavigate } from 'react-router-dom';
import '../styles/main.scss';

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <p className="error-code">404</p>
      <p className="error-message">Oups ! La page que vous demandez n'existe pas.</p>
      <button className="error-button" onClick={() => navigate('/')}>
        Retourner sur la page d’accueil
      </button>
    </div>
  );
}