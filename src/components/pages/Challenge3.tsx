import React, { useEffect } from 'react';
import { Table } from 'antd';
import MainLayout from '../MainLayout';
import arrayUnion from '../../utils/data-merge';
import { RootState } from '../../redux-store/reducers';
import p3Data from '../../utils/p3Data.json';
import { useState } from 'react';
import * as mergeActionCreators from '../../redux-store/action-creators/merge-action-creator';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

const Challenge3 = () => {
  const { testSet1, testSet2 } = p3Data;
  const [dataSource, setDataSource] = useState<Array<any>>([]);
  const state = useSelector(
    (store: RootState) => store.mergeReducer.mergedData
  );
  const dispatch = useDispatch();
  const { setMergedData } = bindActionCreators(mergeActionCreators, dispatch);

  const onExecute = () => {
    setMergedData(arrayUnion(testSet1, testSet2));
    setDataSource(state);
  };

  useEffect(() => setDataSource(state), [state]);

  const columns = [
    { title: 'name', dataIndex: 'name', key: 'key' },
    Table.EXPAND_COLUMN,
  ];

  const columns2 = [
    { title: 'field', dataIndex: 'key', key: 'key' },
    { title: 'value', dataIndex: 'value', key: 'key' },
  ];

  return (
    <MainLayout
      selected={['Challenge3']}
      title={'Challenge 3'}
      onExecute={onExecute}
    >
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <Table columns={columns2} dataSource={record.values} />
          ),
        }}
        dataSource={dataSource}
      />
    </MainLayout>
  );
};

export default Challenge3;
