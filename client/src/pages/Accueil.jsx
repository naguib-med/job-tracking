import React, {useEffect, useState} from "react";
import axios from 'axios';
import imgaccueil from "../assets/imgaccueil.jpg";


const Accueil = () => {
    const [candidatures, setCandidatures] = useState([]);
    const baseUrl = 'http://localhost:5000';

    useEffect(() => {
        axios.defaults.baseURL = baseUrl;
        const fetchCandidatures = async () => {
            const res = await axios.get("/api/candidatures?limit=3&sort=-dateEnvoi");
            console.log(res.data);
            setCandidatures(res.data);
        };
        fetchCandidatures()
            .then(() => console.log("Candidatures chargées"))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="mt-10">
            <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-center">Bienvenue dans votre application de suivi de candidatures</h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto">
                        Gardez une trace des entreprises et des offres d'emploi auxquelles vous avez postulé, suivez les réponses des entreprises et les étapes du processus de recrutement.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                        <div className="rounded-md shadow">
                            <a href="/candidatures" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                Mes candidatures
                            </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <div className="rounded-md shadow">
                                <a href="/entreprises" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 md:py-4 md:text-lg md:px-10">
                                    Mes entreprises
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Dernières candidatures ajoutées</h2>
                        {candidatures.map((candidature) => (
                            <div key={candidature._id} className="bg-gray-100 rounded-lg p-4 mb-2">
                                <h3 className="text-lg font-medium text-gray-900">{candidature.poste}</h3>
                                <p className="text-sm text-gray-600">Entreprise : {candidature.entreprise?.nom}</p>
                                <p className="text-sm text-gray-600">Date d'envoi : {candidature.dateEnvoi}</p>
                                <p className="text-sm text-gray-600">Statut : {candidature.statut}</p>
                                <span className="text-sm text-gray-600">Étapes :
                                    <ol className="list-decimal list-inside">
                                        {candidature.etapes.map((etape, index) => (
                                            <li key={index} className="my-1 ml-4 text-sm text-gray-600">{etape}</li>
                                        ))}
                                    </ol>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accueil;