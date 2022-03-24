import { GeoAction } from '../actions';
import { GeoDataType } from '../action-type/get-data-type';
import geoData from '../../utils/geo.json';

interface GeoState {
  geo: any[];
}

const initialState: GeoState = { geo: [] };

function reducer(state: GeoState = initialState, action: GeoAction): GeoState {
  switch (action.type) {
    case GeoDataType.GET_GEO_DATA:
      return {
        geo: action.payload,
      };
    case GeoDataType.SET_GEO_DATA:
      return {
        geo: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;

export type RootState = ReturnType<typeof reducer>;
