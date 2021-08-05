import { Link } from 'react-router-dom';
import logo from '../../assets/compass.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <Link><img to="accueil" className="logo" src={logo} alt="pirate logo" /></Link>
            <div className="navigation">
                <Link to="/accueil" className="navigation-link">ACCUEIL</Link>
                <Link to="/tresors" className="navigation-link">TRÉSORS</Link>
                <Link to="/recrutement" className="navigation-link">RECRUTEMENT</Link>
                <Link to="/rhums" className="navigation-link">PROVISIONS</Link>
            </div>
        </div>
    )
}

export default Navbar;
