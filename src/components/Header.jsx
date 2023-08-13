// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src="../src/assets/logo.svg" className="header-img" />
        <ul>
          <Link to={'/'}>
            <li className="nav-btn">Accueil</li>
          </Link>
          <Link to={'/'}>
            <li className="nav-btn">Profil</li>
          </Link>
          <Link to={'/'}>
            <li className="nav-btn">Réglages</li>
          </Link>
          <Link to={'/'}>
            <li className="nav-btn">Communauté</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
