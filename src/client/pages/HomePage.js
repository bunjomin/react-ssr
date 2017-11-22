import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return(
        <div>
            <Helmet>
                <title>{`Ben Harrington App`}</title>
                <meta property="og:title" content="Ben Harrington App" />
            </Helmet>
            <div className="center-align" style={{ marginTop: '200px'}}>
                <h3>Welcome</h3>
                <p>Check out these awesome features!</p>
            </div>
        </div>
    );
};

export default {
    component: Home
};