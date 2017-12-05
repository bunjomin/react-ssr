import { createStore, applyMiddleware } from 'redux';
import reducers from '../client/reducers';

export default (req) => {
    const store = createStore(reducers,
        {}
    );

    return store;
}