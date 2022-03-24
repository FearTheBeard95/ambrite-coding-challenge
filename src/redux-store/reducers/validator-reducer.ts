import { ValidatorAction } from '../actions/validator-actions';
import { ValidatorType } from '../action-type/validator-type';

interface ValidatorState {
  validatedData: any[];
  validatedGeoData: any[];
}

const initialState: ValidatorState = {
  validatedData: [],
  validatedGeoData: [],
};

function reducer(
  state: ValidatorState = initialState,
  action: ValidatorAction
): ValidatorState {
  switch (action.type) {
    case ValidatorType.SET_VALIDATED_DATA:
      return {
        ...state,
        validatedData: action.payload,
      };
    case ValidatorType.SET_VALIDATED_GEO_DATA:
      return {
        ...state,
        validatedGeoData: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
