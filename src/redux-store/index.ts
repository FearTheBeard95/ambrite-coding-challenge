import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/geo-reducer';

// const composeEnhancers = (window && (window as any)._REDUX_DEV_TOOLS_EXTENSIONS_COMPOSE_) || compose;
export default createStore(reducers, applyMiddleware(thunk));
