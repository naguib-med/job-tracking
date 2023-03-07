import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Candidatures from '../pages/Candidatures';
import Entreprises from '../pages/Entreprises';
import Offres from '../pages/Offres';
import Profil from '../pages/Profil.jsx';

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

const LinkItem = ({ link }) => {
    return (
        <li className="mr-6">
            <NavLink to={link.path} className="text-blue-500 hover:text-blue-800" >
                {link.name}
            </NavLink>
        </li>
    );
}

const routes = () => {
    return (
        <BrowserRouter>
            <nav className="flex items-center justify-between flex-wrap bg-white p-6">
                <ul className="flex items-center flex-shrink-0 text-blue-700 mr-6">
                    {navLinks.map((link) => (
                        <LinkItem key={link.id} link={link} />
                    ))}
                </ul>
            </nav>

            <Routes>
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/candidatures" element={<Candidatures />} />
                <Route path="/entreprises" element={<Entreprises />} />
                <Route path="/offres" element={<Offres />} />
                <Route path="/profil" element={<Profil />} />
            </Routes>
        </BrowserRouter>
    );
};

export default routes;
