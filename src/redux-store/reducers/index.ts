import { combineReducers } from 'redux';
import mergeReducer from './merge-reducer';
import geoReducer from './geo-reducer';
import validatorReducer from './validator-reducer';

const reducers = combineReducers({
  mergeReducer,
  geoReducer,
  validatorReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
