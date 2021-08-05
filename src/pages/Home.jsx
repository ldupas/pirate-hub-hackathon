import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className="Home">
           <header>
               <h1>Bienvenue à l'Auberge du Perroquet Muet !</h1>
           </header>
           <div className="intro-container">
                <p className="intro-p">
                    YOOHOO ! Approche-toi jeune flibustier ! Il fait meilleur à l'intérieur, hein ? Remplis cette chopine et assieds-toi
                    près de l'âtre ! Tant que tu ne fais pas d'esclandre, tu es ici chez toi.  
                </p>
                <p className="intro-p">
                    Avant de repartir affronter les océans, 
                    tu devrais aller faire un tour dans la section des Trésors. Tu pourras voir les dernières prises des marins du coin.
                    Cela t'évitera peut-être d'aller fouiller un coin en vain.
                </p>
                <p className="intro-p">
                    Tu as besoin d'embarquer de nouveaux moussaillons ? Jeunes ou 
                    aguerris, tu pourras les retrouver dans notre section recrutement. Hé d'ailleurs, tu pourrais pas emmener Scar avec toi ?
                    Il traine ses bottes crasseuses dans la taverne depuis trop longtemps.
                </p>
                <p className="intro-p">
                    Enfin, si tu as envie de faire le plein de carburant, rends-toi dans la section Provisions. Un vrai pirate n'est jamais
                    loin de sa bouteille de rhum, si tu vois ce que je veux dire.
                </p>
           </div>
        </div>
    )
}

export default Home;
