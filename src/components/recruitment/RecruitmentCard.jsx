import React from 'react';
import './RecruitmentCard.css';

function RecruitmentCard({ pirate }) {
    return (
        <div className="RecruitmentCard">
            <article className="pirate-card">
                <img src={pirate.picture} alt={pirate.name} className="pirate-img" />
                <div className="pirate-card-content">
                    <h2>{pirate.name}</h2>
                    <div className="pirate-desc">
                        <span>Prix: {pirate.cost}</span>
                        <span>Particularité : {pirate.detail}</span>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default RecruitmentCard;
