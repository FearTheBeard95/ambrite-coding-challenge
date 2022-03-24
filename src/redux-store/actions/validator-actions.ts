import { ValidatorType } from '../action-type/validator-type';

interface SetValidatedData {
  type: ValidatorType.SET_VALIDATED_DATA;
  payload: any;
}

interface SetValidatedGeoData {
  type: ValidatorType.SET_VALIDATED_GEO_DATA;
  payload: any;
}

export type ValidatorAction = SetValidatedData | SetValidatedGeoData;
