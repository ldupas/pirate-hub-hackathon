import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-columns-container">
                <div className="footer-column footer-column-address">
                    <h4>Adresse</h4>
                    <span>Taverne du Perroquet Muet</span>
                    <span>Fort de Rocher, FR22</span>
                    <span>Tortuga Island, Haïti</span>
                </div>
                <div className="footer-column footer-column-contact">
                    <h4>Contact</h4>
                    <span>contact@perroquetmuet.com</span>
                    <span>+265 752 164</span>
                </div>
                <div className="footer-column footer-column-social">
                    <h4>Réseaux Sociaux</h4>
                    <div className="social-links">
                        <a href="" ><FaFacebook /></a>
                        <a href="" ><FaInstagramSquare /></a>
                        <a href="" ><FaTwitterSquare /></a>
                    </div>
                </div>
            </div>
            <p className="greetings">Made with ❤️ par l'ami des bêtes !</p>
        </div>
    )
}

export default Footer;
