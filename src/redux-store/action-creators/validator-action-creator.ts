import { message } from 'antd';
import { Dispatch } from 'redux';
import { ValidatorAction } from '../actions/validator-actions';
import { ValidatorType } from '../action-type/validator-type';

export function setValidatedData(data: any[]) {
  return (dispatch: Dispatch<ValidatorAction>) => {
    try {
      dispatch({
        type: ValidatorType.SET_VALIDATED_DATA,
        payload: data,
      });
    } catch (error) {
      message.error('An error occured when setting the geo data' + error);
    }
  };
}

export function setValidatedGeoData(data: any[]) {
  return (dispatch: Dispatch<ValidatorAction>) => {
    try {
      dispatch({
        type: ValidatorType.SET_VALIDATED_GEO_DATA,
        payload: data,
      });
    } catch (error) {
      message.error('An error occured when setting the geo data' + error);
    }
  };
}
