import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

function LandingPage() {

    return (
        <div className="LandingPage">
            <Link to="/accueil">
            <div className="enter-button">
                ENTRER
            </div> 
            </Link> 
            <div className="ag-sparks">
                <div className="ag-spark"> 
                    <img className="landing-img" src="https://wallpapercave.com/wp/wp3650143.jpg" alt="intro-pic" />
                </div>
                <div className="ag-lightning"></div>
            </div>
        </div>
    )
}

export default LandingPage;
