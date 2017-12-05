import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    
    return (
        <div className="not-found" style={{ marginTop: '200px'}}>
            <h1>Oops! Route not found!</h1>
            <p>Click <Link to='/'>here</Link> to go back to the home page!</p>
        </div>
    );
};

export default {
    component: NotFoundPage
};