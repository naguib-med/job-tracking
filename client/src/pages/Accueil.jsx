import React from "react";

function Accueil() {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
                Bienvenue sur mon application de suivi des candidatures !
            </h1>
            <p className="text-lg mb-8">Vous pouvez utiliser cette application pour garder une trace de vos candidatures à des offres d'emploi et suivre les étapes du processus de recrutement.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Commencer
            </button>
        </div>
    )
}

export default Accueil;