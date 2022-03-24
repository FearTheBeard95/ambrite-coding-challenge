import { combineReducers } from 'redux';
import mergeReducer from './merge-reducer';
import geoReducer from './geo-reducer';

const reducers = combineReducers({
  mergeReducer,
  geoReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
