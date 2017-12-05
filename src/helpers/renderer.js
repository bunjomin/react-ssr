import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();
    
    return (
        `<html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400,700,900" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Oswald:200" rel="stylesheet">
                <link rel="stylesheet" href="styles/css/styles.css">
                <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>`
    );
};