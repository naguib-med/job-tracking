import React, {useState} from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Accueil from "../../pages/Accueil.jsx";
import Candidatures from "../../pages/Candidatures.jsx";
import Entreprises from "../../pages/Entreprises.jsx";
import Offres from "../../pages/Offres.jsx";
import Profil from "../../pages/Profil.jsx";

const navLinks = [
    {
        id: 1,
        name: 'Accueil',
        path: '/accueil',
    },
    {
        id: 2,
        name: 'Candidatures',
        path: '/candidatures',
    },
    {
        id: 3,
        name: 'Entreprises',
        path: '/entreprises',
    },
    {
        id: 4,
        name: 'Offres',
        path: '/offres',
    },
    {
        id: 5,
        name: 'Profil',
        path: '/profil',
    },
];
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <BrowserRouter>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow-lg dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="#" className="flex items-center">
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Jobs Tracking</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default" aria-expanded="false"  onClick={() => setIsOpen(!isOpen)}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                    <div className={`w-full md:w-auto md:block ${isOpen ? "" : "hidden"}`} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navLinks.map((link) => (
                                <a href={link.path} key={link.id} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    {link.name}
                                </a>
                                ))}
                        </ul>
                    </div>
                </div>
            </nav>


            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/candidatures" element={<Candidatures />} />
                <Route path="/entreprises" element={<Entreprises />} />
                <Route path="/offres" element={<Offres />} />
                <Route path="/profil" element={<Profil />} />
            </Routes>
        </BrowserRouter>
    );
}
export default NavBar;