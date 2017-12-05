import React from 'react';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';

export default [
    {
        ...App,
        routes:[
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...PortfolioPage,
                path: '/portfolio',
            },
            {
                ...ServicesPage,
                path: '/services',
            },
            {
                ...ContactPage,
                path: '/contact',
            },
            {
                ...NotFoundPage
            }
        ]
    }
];