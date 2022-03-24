import { message } from 'antd';
import { Dispatch } from 'redux';
import { GeoAction } from '../actions/geo-actions';
import { GeoDataType } from '../action-type/geo-data-type';

export function getGeoData(data: any[]) {
  return (dispatch: Dispatch<GeoAction>) => {
    try {
      dispatch({
        type: GeoDataType.GET_GEO_DATA,
        payload: data,
      });
    } catch (error) {
      message.error('An error occured when loading initial geo data' + error);
    }
  };
}

export function setGeoData(data: any[]) {
  return (dispatch: Dispatch<GeoAction>) => {
    try {
      dispatch({
        type: GeoDataType.SET_GEO_DATA,
        payload: data,
      });
    } catch (error) {
      message.error('An error occured when setting the geo data' + error);
    }
  };
}
