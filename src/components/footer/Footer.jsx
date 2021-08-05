import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-columns-container">
                <div className="footer-column footer-column-address">
                    <h4>Adresse</h4>
                    <span>Auberge du Perroquet Muet</span>
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
                        <a><FaFacebook /></a>
                        <a><FaInstagramSquare /></a>
                        <a><FaTwitterSquare /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
