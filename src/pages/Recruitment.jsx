import { useState, useEffect } from 'react';
import axios from 'axios';
import RecruitmentCard from '../components/recruitment/RecruitmentCard';
import './Recruitment.css';

function Recruitment() {
    const [pirates, setPirates] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        axios
        .get("https://a.nacapi.com/sailor5")
        .then((res) => res.data)
        .then((data) => setPirates(data))
    }, [])

    return (
        <div className="Recruitment">
            <h1>Venez recruter vos compagnons de mer !</h1>
            <button className="filter-btn" onClick={() => setIsFiltered(!isFiltered)}>
                {isFiltered? 'Toute notre flotte' : 'Le fond de cale'}
            </button>
            <div className="pirate-container">
                {!isFiltered
                ? 
                pirates
                .map((pirate) => (
                    <div key={pirate.id}>
                        <RecruitmentCard pirate={pirate} />
                    </div>
                ))
                :
                pirates
                .filter((pirate) => pirate.cost < 10)
                .map((pirate) => (
                    <div key={pirate.id}>
                        <RecruitmentCard pirate={pirate} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recruitment;
