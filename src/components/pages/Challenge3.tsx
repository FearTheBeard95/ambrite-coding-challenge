import React from 'react';
import { Table } from 'antd';
import MainLayout from '../MainLayout';
import arrayUnion from '../../utils/data-merge';
import p3Data from '../../utils/p3Data.json';
import { useState } from 'react';

const Challenge3 = () => {
  const { testSet1, testSet2 } = p3Data;
  const [dataSource] = useState(arrayUnion(testSet1, testSet2));

  const columns = [
    { title: 'name', dataIndex: 'name', key: 'key' },
    Table.EXPAND_COLUMN,
  ];

  const columns2 = [
    { title: 'field', dataIndex: 'key', key: 'key' },
    { title: 'value', dataIndex: 'value', key: 'key' },
  ];

  return (
    <MainLayout selected={['Challenge3']} title={'Challenge 3'}>
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
