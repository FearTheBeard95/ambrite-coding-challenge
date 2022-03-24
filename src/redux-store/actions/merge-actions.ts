import { mergeDataType } from '../action-type/merge-data-type';

interface SetMergeAction {
  type: mergeDataType.SET_MERGE_TYPE;
  payload: any;
}

export type MergeAction = SetMergeAction;
