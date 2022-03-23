import React from 'react';
import { Breadcrumb, Table } from 'antd';
import MainLayout from '../MainLayout';
import arrayUnion from '../../utils/data-merge';
import p3Data from '../../utils/p3Data.json';
import { useState } from 'react';
import { useEffect } from 'react';

const Challenge3 = () => {
  const { testSet1, testSet2 } = p3Data;
  const [dataSource, setDataSource] = useState(arrayUnion(testSet1, testSet2));

  const columns = [
    { title: 'name', dataIndex: 'name', key: 'key' },
    Table.EXPAND_COLUMN,
  ];

  const columns2 = [
    { title: 'field', dataIndex: 'key', key: 'key' },
    { title: 'value', dataIndex: 'value', key: 'key' },
  ];
  // useEffect(() => {
  //   // eslint-disable-next-line no-unused-vars
  //   let isMounted = true;
  //   const { testSet1, testSet2 } = p3Data;

  //   arrayUnion(testSet1, testSet2).then((union) => {
  //     console.log(union);
  //     return setDataSource(union);
  //   });

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <MainLayout selected={['Challenge3']}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>App</Breadcrumb.Item>
        <Breadcrumb.Item>Challenge 3</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>
        <h1>Challenge 3</h1>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <Table columns={columns2} dataSource={record.values} />
            ),
          }}
          dataSource={dataSource}
        />
      </div>
    </MainLayout>
  );
};

export default Challenge3;
