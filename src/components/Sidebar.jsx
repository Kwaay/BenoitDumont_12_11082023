import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <Link to={'/'}>
          <li>
            <img src="./src/assets/meditate-icon.svg" alt="meditate-icon"></img>
          </li>
        </Link>
        <Link to={'/'}>
          <li>
            <img src="./src/assets/swim-icon.svg" alt="swim-icon"></img>
          </li>
        </Link>
        <Link to={'/'}>
          <li>
            <img src="./src/assets/bike-icon.svg" alt="bike-icon"></img>
          </li>
        </Link>
        <Link to={'/'}>
          <li>
            <img src="./src/assets/weight-icon.svg" alt="weight-icon"></img>
          </li>
        </Link>
        <p>Copyright, SportSee 2023</p>
      </ul>
    </div>
  );
}
