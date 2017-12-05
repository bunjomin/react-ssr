import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchPosts } from './actions';

const App = ({route}) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
};

export default {
    component: App
};