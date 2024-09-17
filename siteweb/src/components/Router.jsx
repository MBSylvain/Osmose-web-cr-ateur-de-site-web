import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import AboutPage from './Projets';
import ContactPage from './FormContact';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Projets" element={<AboutPage />} />
                <Route path="/FormContact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
