import { GeoDataType } from '../action-type/geo-data-type';

interface GetGeoAction {
  type: GeoDataType.GET_GEO_DATA;
  payload: any;
}

interface SetGeoAction {
  type: GeoDataType.SET_GEO_DATA;
  payload: any;
}

export type GeoAction = GetGeoAction | SetGeoAction;
