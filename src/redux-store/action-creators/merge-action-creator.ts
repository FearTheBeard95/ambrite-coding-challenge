import { message } from 'antd';
import { Dispatch } from 'redux';
import { MergeAction } from '../actions/merge-actions';
import { mergeDataType } from '../action-type/merge-data-type';

export function setMergedData(data: any[]) {
  return (dispatch: Dispatch<MergeAction>) => {
    try {
      dispatch({
        type: mergeDataType.SET_MERGE_TYPE,
        payload: data,
      });
    } catch (error) {
      message.error('An error occured when setting the geo data' + error);
    }
  };
}
