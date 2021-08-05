import { Link } from 'react-router-dom';
import logo from '../../assets/parrot.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <Link><img className="logo" src={logo} alt="pirate logo" /></Link>
            <div className="navigation">
                <Link to="/accueil" className="navigation-link">ACCUEIL</Link>
                <Link to="/tresors" className="navigation-link">TRÉSORS</Link>
                <Link to="/recrutement" className="navigation-link">RECRUTEMENT</Link>
                <Link to="/rhums" className="navigation-link">MUNITIONS</Link>
            </div>
        </div>
    )
}

export default Navbar;
