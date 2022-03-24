import { MergeAction } from '../actions/merge-actions';
import { mergeDataType } from '../action-type/merge-data-type';

interface MergeState {
  mergedData: any[];
}

const initialState: MergeState = { mergedData: [] };

function reducer(
  state: MergeState = initialState,
  action: MergeAction
): MergeState {
  switch (action.type) {
    case mergeDataType.SET_MERGE_TYPE:
      return {
        mergedData: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
